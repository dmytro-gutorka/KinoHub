import EventEmitter from 'node:events'
import { logEvent } from './logEvents.js';
import http from 'http'
import path from 'path'
import fs from 'node:fs'
import fsPromises from 'node:fs/promises'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter()

myEmitter.on('log', (msg, fileName) => logEvent(msg, fileName));
const PORT = process.env.PORT || 3500;


const serveFile = async (filePath, contentType, response) => {
  try {
    const isImage = contentType.includes('image')
    const isJSON = contentType === 'application/json'
    const is404 = filePath.includes('404.html')

    const rawData = await fsPromises.readFile(filePath, isImage ? '' : 'utf8');
    const data = isJSON ? JSON.parse(rawData) : rawData;

    response.writeHead(is404 ? 404 : 200, { 'Content-Type': contentType });
    response.end(isJSON ? JSON.stringify(data) : rawData);

  } catch (err) {
    console.log(err);
    myEmitter.emit('log', `${err.name}: ${err.message}`, 'errLog.txt');
    response.statusCode = 500;
    response.end();
  }
}

const server = http.createServer((req, res) => {
  myEmitter.emit('log', `${req.url}\t${req.method}`, 'reqLog.txt');

  const extension = path.extname(req.url);
  let contentType;

  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.txt':
      contentType = 'text/plain';
      break;
    default:
      contentType = 'text/html';
  }

  let filePath =
    contentType === 'text/html' && req.url === '/'
      ? path.join(__dirname, 'views', 'index.html')
      : contentType === 'text/html' && req.url.slice(-1) === '/'
        ? path.join(__dirname, 'views', req.url, 'index.html')
        : contentType === 'text/html'
          ? path.join(__dirname, 'views', req.url)
          : path.join(__dirname, req.url);


  if (!extension && req.url.slice(-1) !== '/') filePath += '.html';

  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    serveFile(filePath, contentType, res);
  } else {
    switch (path.parse(filePath).base) {
      case 'old-page.html':
        res.writeHead(301, { 'Location': '/new-page.html' });
        res.end();
        break;
      case 'www-page.html':
        res.writeHead(301, { 'Location': '/' });
        res.end();
        break;
      default:
        serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
    }
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));