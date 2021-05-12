import type { ServerResponse } from '@sveltejs/kit/types/endpoint';
import { readFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

/**
 * @type {import('@sveltejs/kit').get}
 */
export async function get({ params }): Promise<ServerResponse> {
  console.log('get() [slug].json.ts');
  const { slug } = params;
  console.log({ slug });
  const fileName = resolve(`/app/newhope/notes/${slug}.md`);
  console.log({ fileName });
  const contents = await (await promisify(readFile)(fileName)).toString();
  console.log({ contents });
  return { body: { name: slug, contents } };
}
