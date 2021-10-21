<script context="module" lang="ts">
	import { client } from '$lib/sanityClient'
	

</script>
<script lang="ts">

	export async function preload() {
		const query = "*[_type == 'post']{_id, slug, title}";
		const posts = await client.fetch(query);
        console.log(posts);
		return { posts };
	}

	type Slug = {
		_type: string,
		current: string,
	}
	
	export let posts: { slug: Slug; title: string }[] = [];
	preload()
	</script>

<h1>Recent posts</h1>
{ console.log(posts) }
