import type { ServerResponse } from '@sveltejs/kit/types/endpoint';
import { readFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';
import { compile } from 'mdsvex';

import config from '$lib/config';

/**
 * @type {import('@sveltejs/kit').get}
 */
export async function get({ params }): Promise<ServerResponse> {
  const { story, part } = params;
  const metaFileOfFolder = resolve(`${config.newhopeNotesFolder}/${story}/index.json`);
  const metaOfFolder = JSON.parse(await (await promisify(readFile)(metaFileOfFolder)).toString());
  const noteIndex = metaOfFolder.notes.findIndex((note) => note.file === part);
  if (noteIndex < 0) {
    return { status: 404 };
  }
  const previous = noteIndex > 0 ? metaOfFolder.notes[noteIndex - 1].file : '..';
  const next =
    noteIndex < metaOfFolder.notes.length - 1 ? metaOfFolder.notes[noteIndex + 1].file : '..';
  const note = metaOfFolder.notes[noteIndex];
  const noteContentFile = resolve(`${config.newhopeNotesFolder}/${story}/${note.file}.svx`);
  const rawContent = await (await promisify(readFile)(noteContentFile)).toString();
  const result = await compile(rawContent);
  const content = result.code;
  return {
    body: { ...note, ...(result.data.fm as Record<string, unknown>), previous, next, content }
  };
}
