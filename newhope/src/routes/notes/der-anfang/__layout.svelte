<script lang="ts" context="module">
  import { load } from '$lib/notes-load';
  export { load };
</script>

<script lang="ts">
  import NotesLayout from '../../../components/notes-layout.svelte';
  export let note;
</script>

<NotesLayout {note}>
  <slot />
</NotesLayout>
