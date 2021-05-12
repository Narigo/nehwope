<script context="module" lang="ts">
  import { not_equal } from 'svelte/internal';

  /**
   * @type {import('@sveltejs/kit').load}
   */
  export async function load({ page, fetch }) {
    const url = `/notes/${page.params.slug}.json`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          note: await res.json()
        }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script lang="ts">
  export let note: { name: string; contents: string };
</script>

<h2>{note.name}</h2>
<p>{note.contents}</p>
