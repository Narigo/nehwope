<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  export const load: Load = async ({ page, fetch }) => {
    const url = `/notes.json`;
    const res = await fetch(url);

    if (res.ok) {
      const notes = await res.json();
      const folder = notes.folders.find((folder) => page.path.startsWith(`/notes/${folder.name}`));
      const note = folder.notes.find((n) => page.path.endsWith(n.file));
      return {
        props: {
          note
        }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  };
</script>

<script lang="ts">
  import { setContext } from 'svelte';

  export let note;
  setContext('note', note);
</script>

<div>
  <article>
    <slot />
  </article>

  <nav>
    {#if !!note.previous}
      <a href={note.previous}>Zurück</a>
    {:else}
      <a href="..">Zum Index</a>
    {/if}
    {#if !!note.next}
      <a href={note.next}>Weiter</a>
    {:else}
      <a href="..">Zum Index</a>
    {/if}
  </nav>
</div>

<style>
  div {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
  }
  nav {
    display: flex;
    justify-content: space-between;
  }
</style>
