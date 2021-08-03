import * as fs from 'fs';
import { promisify } from 'util';

const readDir = promisify(fs.readdir);
const rm = promisify(fs.rm);
const stat = promisify(fs.stat);

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

async function run() {
  const compiledNotesFolder = 'src/routes/notes';
  const folders = await readDir(compiledNotesFolder);
  for (const folder of folders) {
    const fullFolderName = `${compiledNotesFolder}/${folder}`;
    const isDirectory = (await stat(fullFolderName)).isDirectory();
    if (!/\[.*\]/.test(fullFolderName) && isDirectory) {
      await rm(fullFolderName, { recursive: true });
    }
  }
}
