<script context="module">
	/* 
    
    BUG: fix the position of the headers
    Responsivity - 
    BUG: flow to one wide at minmal breakpoint
    BUG: put locations on the right of people at some breakpointwidth 
    BUG: make  Person flow left to right (three wide)
    BUG: make  Location flow left to right (two wide)

    create task to push BUG items to an api...
    **/
	import '../styles/tailwind-output.css';
	import { browser, dev } from '$app/env';
	import Person from '$lib/Person.svelte';
	import Card from '$lib/Card.svelte';
	import JoinPopup from '$lib/JoinPopup.svelte';

	export const hydrare = dev;
	export const router = browser;
	export const prerender = true;
</script>

<svelte:head><title>About</title></svelte:head>

<section>
	<h1>About SvelteKit</h1>
	<p>This is the about page</p>
	<JoinPopup></JoinPopup>
	<!-- let's have a two column layout-->
	<div>
		<h2 class="section-header">who we are</h2>
		<ul class="grid  grid-cols-1 gap-1 md:grid-cols-2  md:gap-2  lg:grid-cols-3 lg:gap-3 ">
			<li class="p-3"><Person /></li>
			<li class="p-3"><Person /></li>
			<li class="p-3"><Person /></li>
			<li class="p-3"><Person /></li>
			<li class="p-3"><Person /></li>
			<li class="p-3"><Person /></li>
		</ul>
	</div>
</section>
<JoinPopup th="th-blue"></JoinPopup>

<section>
	<div>
		<h2 class="section-header">our locations</h2>
		<ul class="grid  grid-cols-1 gap-2 xl:grid-cols-2  lg:gap-3 ">
			<li class="p-3"><Card /></li>
			<li class="p-3"><Card /></li>
			<li class="p-3"><Card /></li>
			<li class="p-3"><Card /></li>
		</ul>
	</div>
</section>
<JoinPopup ></JoinPopup>
<JoinPopup th="th-blue"></JoinPopup>
<JoinPopup th="th-red"></JoinPopup>

<style>
	.section-header { @apply m-2 text-xl font-medium text-black;}
</style>
