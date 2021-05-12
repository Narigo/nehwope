import { assets } from '$app/paths';
import { readdir, readFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

/**
 * @type {import('@sveltejs/kit').get}
 */
export async function get(): Promise<{ name: string; contents: string }[]> {
  const list = await promisify(readdir)(`${assets}/note-contents`);
  return Promise.all(
    list.map(async (fileName) => {
      console.log(fileName);
      const file = resolve(`${assets}/note-contents/${fileName}`);
      const contents = (await promisify(readFile)(file)).toString();
      return { name: fileName.replace(/\.md$/, ''), contents };
    })
  );
}
