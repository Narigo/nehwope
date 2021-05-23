<script context="module" lang="ts">
  /**
   * @type {import('@sveltejs/kit').load}
   */
  export async function load({ page, fetch }) {
    const url = `/notes.json`;
    const res = await fetch(url);

    if (res.ok) {
      return {
        props: await res.json()
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script lang="ts">
  import { page } from '$app/stores';

  export let folders: NotesFolder[];
</script>

{#each folders as folder}
  <h2>{folder.title}</h2>
  <ol>
    {#each folder.notes as note}
      <li>
        <a href={`${$page.path.replace(/\/$/, '')}/${folder.name}/${note.file}`}>{note.title}</a><br
        />
        {note.teaser ? `${note.teaser} ...` : ''}
      </li>
    {/each}
  </ol>
{/each}
