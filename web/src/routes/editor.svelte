<script contetext="module">
	import '../styles/tailwind-output.css';

	import { afterUpdate } from 'svelte';
	import MarkdownIt from "markdown-it";
	import sanitizeHtml from  "sanitize-html"; 
	import MarkdownItSuperscript from "markdown-it-sup";
	import MarkdownItSubscript from "markdown-it-sub";
	import MarkdownItInsert from "markdown-it-ins";
	import MarkdownItMark from "markdown-it-mark";
	import MarkdownItTasklists from "markdown-it-task-lists";
	import MarkdownItFootnote from "markdown-it-footnote";
	import MarkdownItEmoji from "markdown-it-emoji";
	import MarkdownItContainer from "markdown-it-container";
	import MarkdownItDeflist from "markdown-it-deflist";
	import MarkdownItAbbreviation from "markdown-it-abbr";
	import MarkdownItKatex from "markdown-it-katex";
	import hljs from "highlight.js";
	import {typography, code, tables,footnotes,task_lists} from "$lib/data"
	export const prerender = true;

	let markdown = `${typography} ${footnotes} ${code} ${tables} ${task_lists}`;
	let result = '';

	const mdiOptions = {
		html: true,
		xhtmlOut: true,
		breaks: true,
		linkify: true,
		typographer: true,
		quotes: "“”‘’"
	}

   const md = new MarkdownIt(mdiOptions)
   	.use(MarkdownItSuperscript)
	.use(MarkdownItSubscript)
	.use(MarkdownItInsert)
	.use(MarkdownItMark)
	.use(MarkdownItTasklists, { enabled: true })
	.use(MarkdownItFootnote)
	.use(MarkdownItEmoji)
	.use(MarkdownItContainer, "hljs-left")
	.use(MarkdownItContainer, "hljs-center")
	.use(MarkdownItContainer, "hljs-right")
	.use(MarkdownItDeflist)
	.use(MarkdownItAbbreviation)
	.use(MarkdownItKatex);
		
	afterUpdate(() => {
		const sanitize = false;
		let md_out = md.render(markdown);
		//console.log(md_out);
		if (sanitize){
			// see [here](https://github.com/apostrophecms/sanitize-html) how to allow more html 
			result = sanitizeHtml(md_out, {
			allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'h1', 'h2', 'img' ,]),

				allowedClasses: {
					// 'code': [ 'language-*', 'lang-*' ],
					// '*': [ 'fancy', 'simple' ],
				 '*': ['*'],
				}
			});
		}else{
			result = md_out;
		}	

	});
</script>

<style>	
	.markdown-editor {
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
	}
	
	.markdown-editor__panel {
		width: calc(50% - 1rem);
		height: calc(90vh - 4rem); 
		box-sizing: inherit;
	}
	
	.markdown-editor__panel__label {
		display: block;
		font-weight: 700;
		margin-bottom: 0.75rem;
	}
	
	.markdown-editor__textarea, .markdown-editor__result-html {
		box-sizing: inherit;
		height: 100%;
		width: 100%;
		padding: 1rem;
		border: 1px solid black;
	}
	
	.markdown-editor__textarea {
		margin: 0;
	}
	
	.markdown-editor__result-html {
		overflow-y: scroll;
	}

	.hljs {
	padding: 9.5px;
	}
	.hljs code {
	white-space: pre;
	}
		.checkbox {
	margin-right: 10px;
	}

		.emoji {
	height: 1.2em;
	}


	button {
		@apply py-1 px-4 mx-1 my-5 bg-th-primary text-th-secondary rounded-md w-24;
	}
</style>
<section>
	<div class="markdown-editor">
		<div class="markdown-editor__panel">
			<span class="markdown-editor__panel__label">Markdown</span>
			<textarea class="markdown-editor__textarea" bind:value={markdown} />
		</div>
		<div class="markdown-editor__panel">
			<span class="markdown-editor__panel__label">Output</span>
			<div class="markdown-editor__result-html prose md:prose-lg lg:prose-xl">
				{@html result}
			</div>
		</div>
	</div>
</section>
<hr>
<section>
	<div class="m-2 ">
		<ul class="flex ">
			<li><button>basic md</button></li>
			<li><button>footnotes</button></li>
			<li><button>emojis</button></li>		
			<li><button>clear</button></li>

	</ul>
	</div>
</section>

