<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').load}
   */
  export async function load({ page, fetch }) {
    const { story, part } = page.params;
    const url = `/notes/${story}/${part}.json`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: {
          note: await res.json()
        }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script lang="ts">
  import { default as NoteComponent } from '../../../components/note.svelte';

  export let note: Note;
</script>

<NoteComponent {note} />
