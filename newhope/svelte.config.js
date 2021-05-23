import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.svx'],

  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [mdsvex({ extensions: ['.svx'] }), preprocess()],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',

    adapter: adapterStatic(),

    vite: {
      server: {
        hmr: {
          port: 3001
        }
      }
    }
  }
};

export default config;
