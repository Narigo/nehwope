<script lang="ts">
  import { page } from '$app/stores';
  import type { NotesFolder } from 'src/global';

  export let basePath: string;
  export let folder: NotesFolder;
</script>

<h2>{folder.title}</h2>
{#if folder.author}<p>Von {folder.author}</p>{/if}
{#if folder.teaser}<p>{folder.teaser}</p>{/if}
<ol>
  {#each folder.notes as note}
    <li>
      <a href={`${basePath}/${note.file}`}>{note.title}</a>
      {note.teaser ? ` - ${note.teaser}` : ''}
    </li>
  {/each}
</ol>

<style>
  li {
    line-height: 2em;
  }
</style>
