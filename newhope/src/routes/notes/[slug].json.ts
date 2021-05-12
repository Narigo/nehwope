import type { ServerResponse } from '@sveltejs/kit/types/endpoint';
import { readFile } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import config from '$lib/config';

/**
 * @type {import('@sveltejs/kit').get}
 */
export async function get({ params }): Promise<ServerResponse> {
  const { slug } = params;
  const fileName = resolve(`${config.newhopeNotesFolder}/${slug}.md`);
  const contents = await (await promisify(readFile)(fileName)).toString();
  return { body: { name: slug, contents } };
}
