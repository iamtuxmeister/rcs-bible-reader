# rcs-bible-reader

This is the end product of the application we developed in class at Riverview Christian School

The students made suggestions, and we developed it in class together. Originally we created this
application in pure html, javascript, and css.

As a demonstration it was rewritten in [Svelte/SvelteKit](https://kit.svelte.dev/) with [SkeletonUI](https://www.skeleton.dev/) to show the power of modern
frameworks and the ease of deployment to modern serverless platforms.

## Obtaining the Source

Clone the repo, change into the directory, and install the dependancies

```bash
git clone git@github.com:iamtuxmeister/rcs-bible-reader.git
cd rcs-bible-reader
npm install
```

## Running the Application

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
