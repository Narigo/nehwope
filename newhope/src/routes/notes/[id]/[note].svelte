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
  export let componentImport;
  export let component;
  export let componentDynamic;

  onMount(async () => {
    componentDynamic = await import(componentImport);
  });
</script>

<svelte:head>
  {#if note.title}
    <title>{note.title} - Notes of NewHope</title>
  {/if}
</svelte:head>

<NotesLayout {note}>
  {#if componentDynamic}
    <svelte:component this={componentDynamic} />
  {:else}
    <svelte:component this={component} />
  {/if}
</NotesLayout>
