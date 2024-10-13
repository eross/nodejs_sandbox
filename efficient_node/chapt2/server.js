import http from 'http';

const server = http.createServer();

server.on('request', (req, res) => {
  res.end('Hello World\n');
  req.on('end', () => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Received data: ${responseData}`);
  });
});

server.on('listening', () => {
  console.log('Server is running...');
});

server.listen(3000);
