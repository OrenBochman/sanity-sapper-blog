# from scratch:

create project


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash

# create a new project in my-app
yarn init svelte@next tailwind-sanity-kit

```
then add the dependencies as development dependencies

``` bash
yarn add -D autoprefixer postcss-cli tailwindcss concurrently cross-env @sanity/client snarkdown

```
Choose:
1. skeleton to start from scratch
1. TypeScript - we will need it for the sanity client
1. prettier for automatically formatting your code and 
1. eslint not sure if it can lint typescript - but I'll give it a shot

## adding tailwind support

``` bash
mkdir src/styles
touch src/styles/tailwind.css
touch postcss.config.cjs
npx tailwindcss init tailwind.config.cjs
```

next add the following code to `postcss.config.cjs`:
``` js
module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: {},
  },
}
```

and to `src/styles/tailwind.css`:

``` css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

add JIT support to tailwind by adding to `tailwind.config.cjs`:

```js
module.exports = {

  // ...
  mode: 'jit', // ⚠ Make sure to have this
  purge: ["./src/**/*.svelte"],
  // ...
```

to using tailwind in svelte component you will need to import the generated styles
<script >
  import "../styles/tailwind-output.css";
</script>



## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
yarn run dev

# or start the server and open the app in a new browser tab
yarn run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
yarn run build
```

> You can preview the built app with `yarn run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
