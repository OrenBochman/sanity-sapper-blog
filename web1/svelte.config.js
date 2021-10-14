import node from '@sveltejs/adapter-node'

/** @type {import('@sveltejs/kit').Config} */
// svelte.config.js

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: node(),
    target: '#svelte',
    vite: () => ({}),
    vite: { optimizeDeps: { include: ['@sanity/block-content-to-hyperscript/internals'] } }
  }
}

export default config
