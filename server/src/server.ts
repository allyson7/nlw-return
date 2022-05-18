import express from 'express';

import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// GET, POST, PUT, DELETE
// GET = buscar informaçÕES
// POST = cafastrar isformações

app.listen(3333, () => {
  console.log('HTTP server runnning!');
})
