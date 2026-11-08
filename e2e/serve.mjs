#!/usr/bin/env node
// Serves a static directory. Playwright's webServer runs it on the built Storybook, so e2e needs
// no dev server and no extra dependency. Usage: node serve.mjs <dir> <port>
import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const [dirArg = '.', portArg = '6106'] = process.argv.slice(2);
const root = resolve(dirArg);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.map': 'application/json; charset=utf-8',
};

if (!existsSync(join(root, 'index.html'))) {
  process.stderr.write(
    `No index.html in ${root}. Build Storybook first: yarn workspace @maxcwolf/storybook web:build\n`,
  );
  process.exit(1);
}

createServer((request, response) => {
  const path = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
  let file = normalize(join(root, path));
  if (!file.startsWith(root)) {
    response.writeHead(403).end();
    return;
  }
  if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
  if (!existsSync(file)) {
    response.writeHead(404).end('Not found');
    return;
  }
  response.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
  createReadStream(file).pipe(response);
}).listen(Number(portArg), '127.0.0.1', () => {
  process.stdout.write(`Serving ${root} at http://127.0.0.1:${portArg}\n`);
});
