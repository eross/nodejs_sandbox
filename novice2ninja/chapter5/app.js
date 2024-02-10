// Express application
import express from 'express';

import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';
import { appendFile } from 'fs';

// configuration
const
  __dirname = dirname(fileURLToPath( import.meta.url )) + sep,
  cfg = {
    port: process.env.PORT || 3000,
    dir: {
      root:   __dirname,
      static: __dirname + 'static' + sep
    }
  };

console.dir(cfg, { depth: null, color: true });

const app = express();
app.disable('x-powered-by');
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

//app.use(express.static ( cfg.dir.static ));
app.use(express.static( 'static' ));
app.get('/', (req, res) => {
    console.log("get /");

    res.send('Hello World!');
});

// 404 error
app.use((req, res) => {
    res.status(404).send('Not found');
  });


app.listen(3000);
// Express initiation
// ...rest of code