import type { Load } from '@sveltejs/kit';
export const load: Load = async ({ page, fetch }) => {
  const url = `/notes.json`;
  const res = await fetch(url);

  if (res.ok) {
    const notes = await res.json();
    const folder = notes.folders.find((folder) => page.params.id === folder.name);
    const note = folder.notes.find((n) => page.params.note === n.file);
    const noteModule = await import(
      `../routes/notes/_notes/${page.params.id}/${page.params.note}.svelte`
    );
    return {
      props: {
        note,
        component: noteModule.default
      }
    };
  }

  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
};
