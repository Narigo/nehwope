import type { ServerResponse } from '@sveltejs/kit/types/endpoint';
import { readdir, readFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import config from '$lib/config';
/**
 * @type {import('@sveltejs/kit').get}
 */
export async function get(): Promise<ServerResponse> {
  console.log('get() index.json.ts');
  const list = await promisify(readdir)(resolve(config.newhopeNotesFolder));
  return {
    body: await Promise.all(
      list.map(async (fileName) => {
        console.log(fileName);
        const file = resolve(`${config.newhopeNotesFolder}/${fileName}`);
        const contents = await (await promisify(readFile)(file)).toString();
        return { name: fileName.replace(/\.md$/, ''), contents };
      })
    )
  };
}
