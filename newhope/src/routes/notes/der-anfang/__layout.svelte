<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';
  export const load: Load = async ({ page, context, fetch }) => {
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

<slot />
{#if !!note.previous}
  <a href={note.previous}>Zurück</a>
{/if}
{#if !!note.next}
  <a href={note.next}>Weiter</a>
{/if}
