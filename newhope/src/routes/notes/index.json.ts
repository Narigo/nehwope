import type { ServerResponse } from '@sveltejs/kit/types/endpoint';
import { readdir, readFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

/**
 * @type {import('@sveltejs/kit').get}
 */
export async function get(): Promise<ServerResponse> {
  console.log('get() index.json.ts');
  const list = await promisify(readdir)(resolve(`/app/newhope/notes`));
  return {
    body: await Promise.all(
      list.map(async (fileName) => {
        console.log(fileName);
        const file = resolve(`/app/newhope/notes/${fileName}`);
        const contents = await (await promisify(readFile)(file)).toString();
        return { name: fileName.replace(/\.md$/, ''), contents };
      })
    )
  };
}
