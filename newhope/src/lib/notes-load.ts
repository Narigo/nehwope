import type { Load } from '@sveltejs/kit';
export const load: Load = async ({ page, fetch }) => {
  const url = `/notes.json`;
  const res = await fetch(url);

  if (res.ok) {
    const notes = await res.json();
    const folder = notes.folders.find((folder) => page.path.startsWith(`/notes/${folder.name}`));
    const note = folder.notes.find((n) => page.path.endsWith(n.file));
    return {
      props: {
        note
      }
    };
  }

  return {
    status: res.status,
    error: new Error(`Could not load ${url}`)
  };
};
