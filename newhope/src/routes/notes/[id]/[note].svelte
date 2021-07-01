<script lang="ts" context="module">
  import { load } from '$lib/notes-load';
  export { load };
</script>

<script lang="ts">
  import { page } from '$app/stores';
  import NotesLayout from '../../../components/notes-layout.svelte';
  import { onMount } from 'svelte';

  const { id, note: noteFile } = $page.params;
  export let note;
  export let component;
</script>

<svelte:head>
  {#if note.title}
    <title>{note.title} - Notes of NewHope</title>
  {/if}
</svelte:head>

<NotesLayout {note}>
  {#if component}
    {#await component then { default: Component }}
      <Component />
    {/await}
  {/if}
</NotesLayout>
