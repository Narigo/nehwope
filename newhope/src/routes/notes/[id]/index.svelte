<script lang="ts" context="module">
  import { load } from '$lib/folder-load';
  export { load };
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import FolderLayout from '$components/folder-layout.svelte';
  import type { NotesFolder } from 'src/global';

  export let folder: NotesFolder;
</script>

<svelte:head>
  <title>{folder.title} - Notes of NewHope</title>
</svelte:head>

<FolderLayout basePath={$page.path.replace(/\/$/, '')} {folder} />
