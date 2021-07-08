<script context="module" lang="ts">
  import type { Load } from '@sveltejs/kit';
  export const load: Load = async ({ page, fetch }) => {
    const url = `/notes.json`;
    const res = await fetch(url);

    if (res.ok) {
      const notes = await res.json();
      return {
        props: {
          ...notes,
          page
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
  import { page } from '$app/stores';
  import FolderLayout from '$components/folder-layout.svelte';
  import type { NotesFolder } from '../../global';

  export let folders: NotesFolder[] = [];
</script>

<svelte:head><title>Notes of NewHope</title></svelte:head>

{#each folders as folder}
  <FolderLayout basePath={`${$page.path.replace(/\/$/, '')}/${folder.name}`} {folder} />
{/each}
