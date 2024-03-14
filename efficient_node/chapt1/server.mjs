import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express 2');
});

export default app;
