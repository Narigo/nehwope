import * as fs from 'fs';
import { promisify } from 'util';
import { compile } from 'mdsvex';
import { basename } from 'path';

const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function run() {
  const folders = await readDir(process.env.VITE_NH_NOTES);
  for (const folder of folders) {
    const fullFolderName = `${process.env.VITE_NH_NOTES}/${folder}`;
    const notesFolder = await readDir(`${process.env.VITE_NH_NOTES}/${folder}`);
    const notes = notesFolder.filter((nf) => nf.endsWith('.svx'));
    for (const noteFile of notes) {
      const file = `${process.env.VITE_NH_NOTES}/${folder}/${noteFile}`;
      const content = await (await readFile(file)).toString();
      const svelteFile = await compile(content);
      const compiledFolder = `./src/routes/notes/_notes/${folder}`;
      await mkdir(compiledFolder, { recursive: true });
      /** @type {Record<string, any>} */
      const frontMatter = svelteFile.data?.fm;
      await writeFile(
        `${compiledFolder}/${basename(file, '.svx')}.svelte`,
        `${svelteFile.code}\n<svelte:head><title>${frontMatter.title || ''}</title></svelte:head>`
      );
      await copyFile(`${fullFolderName}/index.json`, `${compiledFolder}/index.json`);
    }
  }
}
