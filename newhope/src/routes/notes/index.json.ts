import type { ServerResponse } from '@sveltejs/kit/types/endpoint';
import { readdir, readFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import config from '$lib/config';
/**
 * @type {import('@sveltejs/kit').get}
 */
export async function get(): Promise<ServerResponse> {
  const folderList = await promisify(readdir)(resolve(config.newhopeNotesFolder));
  return {
    body: {
      folders: await Promise.all(
        folderList.map(async (folder) => {
          const metaFile = resolve(`${config.newhopeNotesFolder}/${folder}/index.json`);
          const metaOfFolder = JSON.parse(await (await promisify(readFile)(metaFile)).toString());
          return {
            ...metaOfFolder,
            name: folder,
            notes: await Promise.all(
              metaOfFolder.notes.map(async (note) => {
                const file = resolve(`${config.newhopeNotesFolder}/${folder}/${note.file}.svx`);
                const contents = await (await promisify(readFile)(file)).toString();
                return { ...note, contents };
              })
            )
          };
        })
      )
    }
  };
}
