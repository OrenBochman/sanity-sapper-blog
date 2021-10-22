<script context="module" lang="ts">
	import { client } from '$lib/sanityClient'
	//import BlockContent from '$lib/portable-text'
	import snarkdown from 'snarkdown';

	export async function load( { page } )  {
		const query = `*[_type == "post" && slug.current == $slug][0]
		{
			slug,
			title,
			bodyMD
		}`;
		const post = await client.fetch(query, { slug: page.params.slug })

		//const post = await res.shift();
		return {
			props:{ post }
		}
	}
</script>

<script lang="ts">
	export let post: { slug: string; title: string, bodyMD: string };
</script>

<h1>{post.title}</h1>

<div class="content">
	{@html snarkdown(post.bodyMD)}
</div>