<script context="module">
	import '../styles/tailwind-output.css';
	import { page } from '$app/stores';
</script>

<header class="bg-gray-200  space-between flex items-center justify-between mb-3">
	<div class="start">
		<img class="h-8 w-8 ml-4 object-contain" src="/img/svelte-logo.svg" alt="svelte logo" />
	</div>
	<nav class="bg-gray-100 ring-4 ring-gray-500 rounded-b-2xl px-4 py-2 filter md:drop-shadow-md -m-1">
		<ul class="flex justify-between gap-3 sm:gap-4 md:gap-5 lg:gap-6 2xl:gap-9 ">
			<li class:active={$page.path === '/'}>
				<a href="/">Home</a>
			</li>
			<li class:active={$page.path === '/about'}>
				<a href="/about">About</a>
			</li>
			<li class:active={$page.path === '/blog'}>
				<a href="/blog">Blog</a>
			</li>
			<li class:active={$page.path === '/glossary'}>
				<a href="/glossary">Glossary</a>
			</li>
			<li class:active={$page.path === '/todo'}>
				<a href="/todo">ToDo</a>
			</li>
			<li class:active={$page.path === '/help'}>
				<a href="/help">Help</a>
			</li>
			<li class:active={$page.path === '/editor'}>
				<a href="/editor">Editor</a>
			</li>
			<!-- <li class:active={$page.path === '/REPL'}>
				<a href="/REPL">REPL</a>
			</li>
			<li class:active={$page.path === '/Kanban'}>
				<a href="/Kanban">Kan Ban</a>
			</li> -->
		</ul>
	</nav>
	<!-- todo add darkmode toggle here -->
	<div class="end" />
</header>

<!-- scoped styling -->
<style>
	/*nav {
		background: var(--color-primary);
		box-shadow: var(--shadow-lg);
		padding: var(--md) var(--xl);
		border-radius: 0 0 var(--xl) var(--xl);
	}

	ul {
		justify-content: space-between;
		gap: var(--base);
	}
	a {
		text-shadow: var(--shadow-text);
	}	
		.header {height: (--header-height);}
    */

	.active {
	@apply border-b-2 border-solid border-red-500; 	/*border-bottom: 2px solid var(--color-accent);*/
	
	}
</style>
