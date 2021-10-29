<script context="module" >
import { client } from '$lib/sanityClient'
import '../../styles/tailwind-output.css';

export async function load() {
	const query = `*[_type == 'glossary' && defined(slug)]{ 
	_id,
	title,
	"slug":slug.current, 
	author,
	category,
	body
	}`
	const glosses = await client.fetch(query);
	return { props: { glosses } }
}//load()
</script>
<script>
//type Slug = {_type: string,	current: string,}
export let  glosses //: { slug: Slug; title: string }[] = [];
</script>
<h1>Recent posts</h1>
<ul>
  {#each glosses as { slug,  title} }
		<li>
			<a href="Glossary/{slug}">
				<h2>{title}</h2>
			</a>
		</li>
	{/each}
</ul>