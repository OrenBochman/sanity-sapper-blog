<script contetext="module">
/**
 * issues: 
 * 1. unordered list with checkbox have :
 *    check box with:
 *       task-list-item  -->  padding  0 0 0 35px.
 *       input           -->  padding  0 0 0 35px.
 *   probably due to froms plugins
 */

	import '../styles/tailwind-output.css';

	import { afterUpdate } from 'svelte';
	import MarkdownIt from "markdown-it";
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
	//import MarkdownItCitations from "markdown-it-citations";
	//import MarkdownItArgdown from "markdown-it-argdown";

	import hljs from "highlight.js";
	import {basic,typography, code, tables,footnotes,task_lists, plugin_emojis,plugins_abbr,
		plugins_defintion_list, plugins_footnote, plugins_ins, plugins_mark,
		plugins_sub,plugins_warning} from "$lib/_data"
import { xlink_attr } from 'svelte/internal';
	export const prerender = true;

	const md_blocks = [ basic,typography, code, tables,footnotes,task_lists, plugin_emojis,plugins_abbr,
		plugins_defintion_list, plugins_footnote, plugins_ins, plugins_mark,];
	
	function add_state( md) {
			return {
				'name': md.name,
				'active': true, 
				'text' : md
			}			
		}
	
	const data = md_blocks.map(add_state)

	console.log(data);

	let b_basic = true, 
		b_typography = true,  
	    b_footnotes = true,  
	    b_code = true, 
		b_emojis = true, 
		b_plugins = true,
	    b_tables = true, 
		b_ins = true,
		b_abbr = true,
		b_mark = true,
		b_task_lists = true;

	let markdown_reset = () => b_basic  =  b_typography = b_footnotes = b_code = b_emojis = b_plugins = b_tables = b_ins = b_abbr =	b_mark   = b_task_lists = true

	$: markdown = `
	${b_footnotes ? plugins_footnote: ''}
	${b_basic ? basic: ''}
	${b_typography ? typography: ''} 
	${b_code ? code: ''} 
	${b_tables ? tables: ''}
	${b_task_lists ? task_lists: ''} 
	${b_emojis ? plugin_emojis: ''}
	${b_abbr ? plugins_abbr: ''} 
	${b_ins ? plugins_ins: ''} 
	${b_mark ? plugins_mark: ''} `;

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
	const b_sanitize = false;	
	afterUpdate(() => {	result =  md.render(markdown);	});
	function reset () { markdown_reset()};	
	function handleClear (){ this.markdown = ``};
</script>

<section>
	<div class="m-1">
	<label class="container">basic
		<input type="checkbox" checked = {b_typography}>
		<span class="checkmark"></span>
		</label>
		
		<label class="container">footnotes
		<input type="checkbox" checked = {b_footnotes}>
		<span class="checkmark"></span>
		</label>
		
		<label class="container">emojis 
		<input type="checkbox" checked = {b_emojis}>
		<span class="checkmark"></span>
		</label>
		
		<label class="container">code
		<input type="checkbox" checked = {b_code}>
		<span class="checkmark"></span>
		</label>

		<label class="container"> plugins
		<input type="checkbox" checked = {b_plugins}>
		<span class="checkmark"></span>
		</label>
			
		<label class="container">tables
		<input type="checkbox" checked = {b_tables}>
		<span class="checkmark"></span>
		</label>

		<label class="container">task lists
		<input type="checkbox" checked = {b_task_lists}>
		<span class="checkmark"></span>
		</label>
	</div>
	<div class="m-2 ">
		<ul class="flex ">
			<li><button on:click={reset}>reset</button></li>
			<li><button on:click={handleClear}>clear</button></li>
			<li><label class="container">sanitize
				<input type="checkbox" checked = {b_sanitize}>
				<span class="checkmark"></span></label></li>
		</ul>
	</div>
</section>
<section>
	<div class="markdown-editor">
		<div class="markdown-editor__panel">
			<span class="markdown-editor__panel__label">Markdown</span>
			<textarea class="markdown-editor__textarea" bind:value={markdown} />
		</div>
		<div class="markdown-editor__panel">
			<span class="markdown-editor__panel__label">Output</span>
			<div class="markdown-editor__result-html prose prose-sm sm:prose lg:prose-lg xl:prose-xl">
				{@html result}
			</div>
		</div>
	</div>
</section>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"/>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css">

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
	
	button {
		@apply py-1 px-4 mx-1 my-5 bg-th-primary text-th-secondary rounded-md w-24;
	}
</style>