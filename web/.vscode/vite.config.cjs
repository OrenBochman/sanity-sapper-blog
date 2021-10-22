// vite.config.cjs
const pkg = require('./package.json');

/** @type {import('vite').UserConfig} */
export default {
  // optimizeDeps: {
	// 		  include: ['@sanity/block-content-to-hyperscript/internals']
	// 		},
  ssr: {
    External: Object.keys(pkg.dependencies || {})
  },
};
