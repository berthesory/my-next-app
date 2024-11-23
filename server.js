const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const backendPort = process.env.BACKEND_PORT || 5000;

app.prepare().then(() => {
  const server = express();

  // Route par défaut pour les requêtes backend
  server.get('/api', (req, res) => {
    res.send('Backend is running!');
  });

  // Route pour Next.js (Frontend)
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(backendPort, (err) => {
    if (err) throw err;
    console.log(`> Backend Disponible sur http://localhost:${backendPort}`);
  });
});
