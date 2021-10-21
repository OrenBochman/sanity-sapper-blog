<script contetext="module">

	// tailwind generated css
	import '../styles/tailwind-output.css';
	// header & footer components from lib folder
	import Header from '$lib/Header.svelte';
//	import Footer from '$lib/Footer.svelte';
</script>

<Header />

<main>
	<!-- this is where the content from the route is inserted -->
	<slot />
</main>

<!--Footer /-->