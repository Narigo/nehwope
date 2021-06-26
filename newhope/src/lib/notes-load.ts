import type { Load } from '@sveltejs/kit';
export const load: Load = async ({ page, fetch }) => {
  console.log('load in [id]/index', page.params, page.path);
  const url = `/notes.json`;
  const res = await fetch(url);

  if (res.ok) {
    const notes = await res.json();
    console.log('load in [id]/index cont', JSON.stringify(notes.folders, null, 2));
    const folder = notes.folders.find((folder) => page.params.id === folder.name);
    const note = folder.notes.find((n) => page.params.note === n.file);
    const noteModule = await import(
      `../routes/notes/${page.params.id}/_notes/${page.params.note}.svx`
    );
    return {
      props: {
        note,
        component: noteModule
      }
    };
  }

  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
};
