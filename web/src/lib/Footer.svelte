<script context="module">
	import '../styles/tailwind-output.css';
</script>

<script>
	// Thise is a demo - real data should come from the cms/api
	export let facebook = 'https://facebook.com';
	export let twitter = 'https://twitter.com';
	export let linkedin = 'https://linkedin.com';
	export let youtube = 'https://youtube.com';
	export let instagram = 'https://instagram.com';
</script>

<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

<footer class="text-gray-600 body-font">
	<div
		class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
	>
		<div class="w-20 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
			<a
				href="http://bayesian.tech"
				class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
			>
				<i class="fas fa-cubes fa-lg text-purple-500" />
				<span class="ml-3 text-xl">Baysesian Technology</span>
			</a>
			<p class="mt-2 text-sm text-gray-500">
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, quam?
			</p>
		</div>
		<div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
			<div class="lg:w-12 md:w-1/2 w-full px-4">
				<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">NAV</h2>
				<nav class="list-none mb-10">
					<li>
						<a href="\about" class="text-gray-600 hover:text-gray-800">About</a>
					</li>
					<li>
						<a href="\contact" class="text-gray-600 hover:text-gray-800">Contact</a>
					</li>
					<li>
						<a href="\rss" class="text-gray-600 hover:text-gray-800">CV</a>
					</li>
					<li>
						<a href="\atom" class="text-gray-600 hover:text-gray-800">Wiki</a>
					</li>
				</nav>
			</div>
			<div class="lg:w-12 md:w-1/2 w-full px-4">
				<h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">BLOGS</h2>
				<nav class="list-none mb-10">
					<li>
						<a href="\protfolio" class="text-gray-600 hover:text-gray-800">Portfolio</a>
					</li>
					<li>
						<a href="\screenwriting" class="text-gray-600 hover:text-gray-800">ScreenWriting</a>
					</li>
					<li>
						<a href="\blog" class="text-gray-600 hover:text-gray-800">Blog</a>
					</li>
					<li>
						<a href="\lifehacks" class="text-gray-600 hover:text-gray-800">Lifehacks</a>
					</li>
					<li>
						<a href="\meditations" class="text-gray-600 hover:text-gray-800">Meditations</a>
					</li>
					<li>
						<a href="\patterns" class="text-gray-600 hover:text-gray-800">Patterns</a>
					</li>
				</nav>
			</div>
		</div>
	</div>
	<div class="bg-gray-100">
		<div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
			<p class="text-gray-500 text-sm text-center sm:text-left">
				© 2021 Copyright:
				<a href="https://www.tailwind-elements.com/" class="text-gray-600 ml-1" target="_blank"
					>Tailwind Elements</a
				>
			</p>
			<span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
				<a href={facebook} class="text-gray-500">
					<i class="fab fa-facebook-f" />
				</a>
				<a href={twitter} class="ml-3 text-gray-500">
					<i class="fab fa-twitter" />
				</a>
				<a href={linkedin} class="ml-3 text-gray-500">
					<i class="fab fa-linkedin-in" />
				</a>
				<a href={youtube} class="ml-3 text-gray-500">
					<i class="fab fa-youtube" />
				</a>
				<a href={instagram} class="ml-3 text-gray-500">
					<i class="fab fa-instagram" />
				</a>
			</span>
		</div>
	</div>
</footer>
<!--

<footer class="text-gray-600 body-font">
	<nav>
        <div class="row">
            <div class="column" >
                    <h3>left col title:</h3>
                    <ul>                
                        <li><a href="/">Home</a> </li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            <div class="column" >
                    <h3>middle col title:</h3>
                    <ul>                
                        <li><a href="#">Home</a> </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div class="column" >
                    <h3>right col title:</h3>
                    <ul>                
                        <li><a href="#">Home</a> </li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
        </div>
        <div class="row">
    </nav>



	<div class="row">
		<div class="copyright">copyright 2021 Oren Bochman</div>
	</div>

</footer>

<style>
	footer {
		text-align: center;
	}

    h3 {
        color: var(--color-accent);
        font-variant: small-caps;

    }

    .row {
        display: flex;
    }

    .column {
      flex: 50%;
    }

	nav {
		background: var(--primary-color);
		box-shadow: var(--shadow-lg);
        margin: 25px 10px 10px 15px ;
		padding: var(--md) var(--xl);
		border-radius: var(--xl);
	}
	ul {        
		/*display: flex;*/
		justify-content: space-between;
		gap: var(--base);
	}
	a {
		text-shadow: var(--shadow-text);
	}
	.copyright {
		/*  width : 480px;*/
		color: #aaa;
		min-width: 480px;
		max-width: 960px;
		margin: 40px auto;
		display: inline-block;
		border-top: 1px solid #ddd;
		padding: 20px;
		font-size: 14px;
	}
</style>
-->
