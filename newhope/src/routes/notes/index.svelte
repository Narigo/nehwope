<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').load}
   */
  export async function load({ page, fetch }) {
    const url = `/notes.json`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          notes: await res.json()
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
  import { page } from '$app/stores';

  export let notes: { name: string; contents: string }[];
</script>

<h2>notes of newhope</h2>
<ul>
  {#each notes as note}
    <li><a href={`${$page.path}/${note.name}`}>note: {note.name}</a></li>
  {/each}
</ul>
