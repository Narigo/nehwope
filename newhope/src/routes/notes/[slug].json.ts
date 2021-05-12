import { assets } from '$app/paths';
import { readFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

/**
 * @type {import('@sveltejs/kit').get}
 */
export async function get({ params }): Promise<{ name: string; contents: string }> {
  const { slug } = params;
  const fileName = resolve(`${assets}/note-contents/${slug}.md`);
  const contents = (await promisify(readFile)(fileName)).toString();
  return { name: slug, contents };
}
