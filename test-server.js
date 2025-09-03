const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const PORT = 3000;
server.listen(PORT, '127.0.0.1', () => {
  console.log(`Test server running at http://127.0.0.1:${PORT}/`);
});

// Handle any errors
server.on('error', (error) => {
  console.error('Server error:', error);
});
