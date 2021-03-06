# Blog with Sapper and SvelteKit

_Fully customizable blog template with a Svelte.js front-end._

Deployed from [sanity.io/create](https://www.sanity.io/create?template=sanity-io/sanity-template-sapper-blog)

## What you have

- A Military-grade progressive blog with [Sapper](https://sapper.svelte.dev/)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your sapper frontend should be running on [http://localhost:3000](http://localhost:3000)
   - Your svelte-kit frontend should be running on [http://localhost:3002](http://localhost:3002)

4. `npm run build` to build to production locally

## Deploy changes

Netlify automatically deploys new changes committed to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on Twitter](https://twitter.com/sanity_io).

note: svelte-kit npm export is broken. and missing from the `package.json`


1. added tailwindcss
1. added tailwindcss plugins
1. basic themes in tailwind
1. added markdown it! 
1. added markdown it pluginss
1. moved markdown constants to their own file (data.js in \src\lib)