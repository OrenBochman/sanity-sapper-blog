<script context="module">
	import { client } from '$lib/sanityClient'
	

	export async function load() {
	  const query = `*[_type == 'post' && defined(slug)]{ 
		_id,
		title,
		"slug":slug.current, 
		}`


		const posts = await client.fetch(query);

		return { 
			props: { posts }
		}
	}
	//preload()
</script>

<script>

// type Slug = {
// 		_type: string,
// 		current: string,
// 	}
	
	export let posts//: { slug: Slug; title: string }[] = [];
</script>

<h1>Recent posts</h1>
<ul>
  {#each posts as { slug,  title } }
		<li>
			<a href="blog/{slug}">
				<h2>{title}</h2>
			</a>
		</li>	
	{/each}
</ul>
