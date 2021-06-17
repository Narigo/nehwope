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
  import type { NotesFolder } from '../../global';

  export let folders: NotesFolder[] = [];
</script>

{#each folders as folder}
  <h2>{folder.title}</h2>
  {#if folder.author}<p>Von {folder.author}</p>{/if}
  {#if folder.teaser}<p>{folder.teaser}</p>{/if}
  <ol>
    {#each folder.notes as note}
      <li>
        <a href={`${$page.path.replace(/\/$/, '')}/${folder.name}/${note.file}`}>{note.title}</a>
        {note.teaser ? ` - ${note.teaser}` : ''}
      </li>
    {/each}
  </ol>
{/each}

<style>
  li {
    line-height: 2em;
  }
</style>
