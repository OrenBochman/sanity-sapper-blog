<script context="module">
	import '../styles/tailwind-output.css';
</script>

<script>
	// Thise is a demo - real data should come from the cms/api
	export let person = {
		src: '/img/erin-lindford.jpg',
		alt: "Woman's Face",
		name: 'Erin Lindford',
		title: 'Product Engineer'
	};
</script>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

<div
	class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
>
	<img
		class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
		src={person.src}
		alt={person.alt}
	/>
	<div class="text-center space-y-2 sm:text-left">
		<div class="space-y-0.5">
			<p class="text-lg text-black font-semibold">
				{person.name}
			</p>
			<p class="text-gray-500 font-medium">
				{person.title}
			</p>
		</div>
		<button
			class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
			>Message</button
		>
	</div>
</div>
