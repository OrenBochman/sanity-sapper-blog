<script context="module">
	import '../styles/tailwind-output.css';
</script>

<script>
	// Thise is a demo - real data should come from the cms/api
	export let src = '/img/store.jpg';
	export let alt = 'Man looking at item at a store';
	export let title = 'Case study';
	export let subTitle = 'Finding customers for your new business';
	export let href = '/blog';
	export let body =
		'Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.';
</script>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
	<div class="md:flex">
		<div class="md:flex-shrink-0">
			<img class="h-48 w-full object-cover md:h-full md:w-48" {src} {alt} />
		</div>
		<div class="p-8">
			<div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
			<a {href} class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
				>{subTitle}</a
			>
			<p class="mt-2 text-gray-500">{body}</p>
		</div>
	</div>
</div>
