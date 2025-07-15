import 'reflect-metadata';

import routes from './routes/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import express, { json, urlencoded, Application } from 'express';
import { initDB } from './config/db.js';
import { errorHandler } from './middleware/errorHandler.middleware.js';

const port: number = Number(process.env.PORT) || 8000;
const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(json());
app.use(urlencoded());

app.use('/', routes);

app.use(errorHandler);

async function startServer() {
  try {
    await initDB();
    app.listen(port, () => console.log(`Server is running on ${port} port`));
  } catch (error) {
    console.error('Connecting error:', error);
  }
}

startServer();
