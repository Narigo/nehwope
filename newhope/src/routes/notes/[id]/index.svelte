<script lang="ts" context="module">
  import { load } from '$lib/folder-load';
  export { load };
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import type { NotesFolder } from 'src/global';

  export let folder: NotesFolder;
</script>

<svelte:head>
  <title>{folder.title} - Notes of NewHope</title>
</svelte:head>

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

<style>
  li {
    line-height: 2em;
  }
</style>
