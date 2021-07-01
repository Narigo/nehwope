import type { Load } from '@sveltejs/kit';
export const load: Load = async ({ page, fetch }) => {
  console.log('load in [id]/[note]', page.params, page.path);
  const url = `/notes.json`;
  const res = await fetch(url);

  if (res.ok) {
    const notes = await res.json();
    console.log('load in [id]/[note] cont', JSON.stringify(notes.folders, null, 2));
    const folder = notes.folders.find((folder) => page.params.id === folder.name);
    const note = folder.notes.find((n) => page.params.note === n.file);
    const noteModule = import(
      `../routes/notes/_notes/${page.params.id}/${page.params.note}.svelte`
    );
    return {
      props: {
        note,
        componentImport: `../_notes/${page.params.id}/${page.params.note}.svelte`,
        component: noteModule
      }
    };
  }

  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
};
