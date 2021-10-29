<script context="module" lang="ts">
	import { client } from '$lib/sanityClient'
	//import BlockContent from '$lib/portable-text'
	import snarkdown from 'snarkdown';
	import '../../styles/tailwind-output.css';

	export async function load( { page } )  {
		const query = `*[_type == "glossary" && slug.current == $slug][0]
		{
			slug,
			title,
			body
		}`;
		const gloss = await client.fetch(query, { slug: page.params.slug })

		//const post = await res.shift();
		return {
			props:{ gloss }
		}
	}
</script>

<script lang="ts">
	export let gloss: { slug: string; title: string, body: string };
</script>

<h1>{gloss.title}</h1>

<div class="content clean prose">
	{@html snarkdown(gloss.body)}
</div>