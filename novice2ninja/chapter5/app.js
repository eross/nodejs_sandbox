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
      static: __dirname + 'static' + sep,
      views: __dirname + 'views' + sep
    }
  };

console.dir(cfg, { depth: null, color: true });

const app = express();
app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);

// home page route
app.get('/', (req, res) => {
    res.render('message', { title: 'Hello World!' });
  });
  
  // another route
  app.get('/hello/', (req, res) => {
    res.render('message', { title: 'Hello again!' });
  });
  
  // serve static assets
  app.use(express.static( cfg.dir.static ));
  
  // 404 errors
  app.use((req, res) => {
    res.status(404).render('message', { title: 'Not found' });
  });


app.listen(3000);
// Express initiation
// ...rest of code