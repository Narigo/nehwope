import type { ServerResponse } from '@sveltejs/kit/types/endpoint';
import { readdir, readFile, stat } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';
import { compile } from 'mdsvex';

/**
 * @type {import('@sveltejs/kit').get}
 */
export async function get(): Promise<ServerResponse> {
  const currentFullPath = import.meta.url || './src/routes/notes/';
  const currentPath = currentFullPath.replace(/\/[^/]*$/, '');
  const folderList = await promisify(readdir)(resolve(currentPath));
  return {
    body: {
      folders: await folderList.reduce(async (folders, fileOrFolder) => {
        const acc = await folders;
        const meta = await promisify(stat)(`${currentPath}/${fileOrFolder}`);
        if (!meta.isDirectory()) {
          return acc;
        }

        const files = await promisify(readdir)(resolve(`${currentPath}/${fileOrFolder}`));
        const notes = await Promise.all(
          files.map(async (file) => {
            const data = await compile(
              await (await promisify(readFile)(`${currentPath}/${fileOrFolder}/${file}`)).toString()
            );
            const noteMeta = data.data.fm as any;
            const name = file.replace(/\.svx$/, '');
            return {
              ...noteMeta,
              name,
              file: name
            };
          })
        );
        notes.sort((a, b) => {
          return (a.order || notes.length) - (b.order || notes.length);
        });
        const result: NotesFolder = {
          name: fileOrFolder,
          notes,
          title: fileOrFolder
        };
        return [...acc, result];
      }, Promise.resolve([]))
    }
  };
}
