import preprocess from 'svelte-preprocess';
//import node from '@sveltejs/adapter-node'
import netlify from '@sveltejs/adapter-netlify';
//import vercel from '@sveltejs/adapter-vercel';
//import {pkg} from ('./package.json');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
    //    adapter: node(),
		adapter: netlify(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    // vite: {
    /* moved to vite.config.cjs */
    // }




	}
};

export default config;
