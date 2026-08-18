/* Servidor estático de desarrollo.
   node server.js  ->  http://localhost:4173
   Incluye un endpoint POST /_write usado por las utilidades de build de imágenes. */
const http = require('http'), fs = require('fs'), path = require('path');
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain', '.pdf': 'application/pdf'
};

http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/_write') {
    let body = '';
    req.on('data', c => { body += c; });
    req.on('end', () => {
      try {
        const { file, b64 } = JSON.parse(body);
        const safe = path.normalize(file).replace(/^(\.\.[\/])+/, '');
        const dest = path.join(__dirname, safe);
        if (!dest.startsWith(path.join(__dirname, 'assets'))) throw new Error('ruta no permitida');
        fs.writeFileSync(dest, Buffer.from(b64, 'base64'));
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true, bytes: Buffer.from(b64, 'base64').length }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const f = path.join(__dirname, p);
  fs.readFile(f, (e, d) => {
    if (e) { res.writeHead(404, { 'Content-Type': 'text/plain' }); return res.end('404'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(f).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    res.end(d);
  });
}).listen(4173, () => console.log('http://localhost:4173'));
