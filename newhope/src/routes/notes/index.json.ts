import { readdir, readFile, stat } from 'fs';
import { resolve } from 'path';
import { promisify } from 'util';

import type { RequestHandler } from '@sveltejs/kit';
import type { NotesFolder } from '../../global';

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
      folders: await folderList.reduce(async (acc, fileOrFolder) => {
        const folders = await acc;
        const meta = await promisify(stat)(`${currentPath}/${fileOrFolder}`);
        if (!meta.isDirectory() || fileOrFolder === '[id]') {
          return folders;
        }

        const files = await promisify(readdir)(resolve(`${currentPath}/${fileOrFolder}`));
        const noteFiles = await Promise.all(
          files
            .filter((file) => /\.svelte$/.test(file))
            .map(async (file) => {
              console.log(`map file ${file} and import ${currentPath}/${fileOrFolder}/${file}`);
              const name = file.replace(/\.svelte$/, '');
              const data = await import(`./${fileOrFolder}/${name}.svelte`).then(
                (module) => module
              );
              const noteMeta = data.metadata as NoteMeta;
              return {
                ...noteMeta,
                name,
                file: name,
                content: data.code
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

        try {
          const folderMeta = await (
            await promisify(readFile)(`${currentPath}/${fileOrFolder}/index.json`)
          ).toString();
          const result: NotesFolder = {
            ...JSON.parse(folderMeta),
            name: fileOrFolder,
            notes
          };
          return [...folders, result];
        } catch (e) {
          const result: NotesFolder = {
            title: fileOrFolder,
            name: fileOrFolder,
            notes
          };
          return [...folders, result];
        }
      }, Promise.resolve([]))
    }
  };
};
