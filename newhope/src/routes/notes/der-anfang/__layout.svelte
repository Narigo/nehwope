<script lang="ts" context="module">
  /**
   * @type {import('@sveltejs/kit').load}
   */
  export async function load({ page, fetch }) {
    const url = `/notes.json`;
    const res = await fetch(url);

    if (res.ok) {
      const notes = await res.json();
      const folder = notes.folders.find((folder) => page.path.startsWith(`/notes/${folder.name}`));
      return {
        props: {
          note: folder.notes.find((n) => n.title === page.title)
        }
      };
    }

    console.log('res. not ok!');
    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script lang="ts">
  export let note;
  console.log('on der-anfang __layout', { note });
</script>

<slot {note} />
