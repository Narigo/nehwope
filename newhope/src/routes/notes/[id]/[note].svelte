<script lang="ts" context="module">
  import { load } from '$lib/notes-load';
  export { load };
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import NotesLayout from '../../../components/notes-layout.svelte';

  const { id, note: noteFile } = $page.params;
  export let note;

  console.log('hello in [id].svelte');
</script>

<svelte:head>
  {#if note.title}
    <title>{note.title} - Notes of NewHope</title>
  {/if}
</svelte:head>

<div>{id}: {noteFile}</div>
<div>{Object.keys(note)}</div>
<div>{note.content}</div>
<NotesLayout {note}>
  <slot>{note.content}</slot>
</NotesLayout>
