<script context="module">
	import '../styles/tailwind-output.css';
</script>
<script lang="ts">
	export let th:string = "";  // this is the theme prop
	let src = '/img/store.jpg';
	const button_label = "Sign up";
	const title = 'Join our mailing list';
	const cta = 'Be the first to hear about our new offerings';
</script>
<!--Component with default theme-->
<div class="{th} ring-white ring-4 bg-th-primary m-2 max-w-xs mx-auto my-3 drop-shadow-xl shadow-inner  overflow-hidden md:max-w-2xl rounded-md">
	<h3 class=" bg-th-secondary text-th-primary px-3 tracking-wide text-xl font-semibold ">{title}</h3>
	<div>
	  <p class=" relativepx-3 mx-3 py-2 text-white">{cta}</p>
	  <button class=" float-right bg-th-secondary text-white text-xl font-bold mx-4 my-2 px-3 py-2 rounded-xl" type="button">{button_label}</button>
	</div>
  </div>
