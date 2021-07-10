<script lang="ts" context="module">
  import { load } from '$lib/notes-load';
  export { load };
</script>

<script lang="ts">
  import NotesLayout from '../../../components/notes-layout.svelte';

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
    {#await component then m}
      <svelte:component this={m.default} />
    {/await}
  {/if}
</NotesLayout>
