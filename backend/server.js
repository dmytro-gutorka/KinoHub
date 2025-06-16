import fs from 'fs';
import { promises as fsPromises } from 'node:fs';
import process from 'node:process';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function readFileAsync() {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'starter'), 'utf-8');

    await fsPromises.unlink(path.join(__dirname, 'starter'));
    await fsPromises.writeFile(path.join(__dirname, 'asyncWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'asyncWrite.txt'), '\n \n some text to append');
    await fsPromises.rename(path.join(__dirname, 'asyncWrite.txt'), 'asyncRename.txt');

    const newData = await fsPromises.readFile(path.join(__dirname, 'asyncRename.txt'), 'utf-8');

    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}

readFileAsync();

// fs.writeFile(path.join(__dirname, 'test.txt'), '- Nice to meet, Im John \n', (err) => {
//   if (err) throw err;
//   console.log('Write complete');
//
//   fs.appendFile(path.join(__dirname, 'test.txt'), '- Nice to meet you, Im Dave', (err) => {
//     if (err) throw err;
//     console.log('Append complete');
//
//     fs.rename(path.join(__dirname, 'test.txt'), path.join(__dirname, 'renamed.txt'), (err) => {
//       if (err) throw err;
//       console.log('Rename complete');
//
//       fs.readFile(path.join(__dirname, 'renamed.txt'), 'utf-8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//       });
//     });
//   });
// });

process.on('uncaughtException', (err) => {
  console.log('Process failed with uncaught exception', err.message);
  process.exit(1);
});
