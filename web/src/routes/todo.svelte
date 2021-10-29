<script context="module">
	
	import '../styles/tailwind-output.css';
	import Todo from '$lib/Todo.svelte'
</script>

<svelte:head><title>Todo</title></svelte:head>

<section>
	<h2 class="section-header">Todo</h2>
	<Todo></Todo>
</section>

<style>
	.section-header {
		@apply m-2 text-xl font-medium text-black;
	}
</style>
