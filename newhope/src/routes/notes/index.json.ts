import { readdir, readFile, stat } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';
import { compile } from 'mdsvex';

import type { RequestHandler } from '@sveltejs/kit';

interface NoteMeta {
  title: string;
  order?: number;
}

export const get: RequestHandler = async () => {
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
        const noteFiles = await Promise.all(
          files
            .filter((file) => /\.svx$/.test(file))
            .map(async (file) => {
              const data = await compile(
                await (
                  await promisify(readFile)(`${currentPath}/${fileOrFolder}/${file}`)
                ).toString()
              );
              const noteMeta = data.data.fm as NoteMeta;
              const name = file.replace(/\.svx$/, '');
              return {
                ...noteMeta,
                name,
                file: name
              };
            })
        );
        noteFiles.sort((a, b) => {
          return (a.order || noteFiles.length) - (b.order || noteFiles.length);
        });
        const notes = noteFiles.map((note, index) => {
          return {
            ...note,
            ...(index === 0 ? {} : { previous: noteFiles[index - 1].file }),
            ...(index === noteFiles.length - 1 ? {} : { next: noteFiles[index + 1].file })
          };
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
};
