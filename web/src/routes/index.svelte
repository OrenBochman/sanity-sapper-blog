<script contetext="module">
	export const prerender = true;
	import Counter from '$lib/Counter.svelte';
	import '../styles/tailwind-output.css';

</script>

<section>
	<h1>Welcome to SvelteKit</h1>

	<Counter />

</section>

<section>

</section>


<!-- scoped styling -->
<style>
	section {
		min-height: calc (100vh - var(--header-height));
		display: grid;
		place-items: center;
		place-content: center;
	}
</style>
