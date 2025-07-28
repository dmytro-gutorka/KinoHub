import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import cookieParser from 'cookie-parser';
import { json, urlencoded, Application } from 'express';
import { privateRoutes, publicRoutes } from './routes/index.js';
import { errorHandler } from './middleware/error-handler.middleware.js';
import { initDB } from './config/db.js';

const port: number = Number(process.env.PORT) || 8000;
const app: Application = express();

app.use(
  cors({ origin: process.env.CLIENT_URL, credentials: true }),
  cookieParser(),
  json(),
  urlencoded({ extended: true })
);

app.use('/api/v1', publicRoutes);
app.use('/api/v1', privateRoutes);

app.use(errorHandler);

async function startServer() {
  try {
    await initDB();
    app.listen(port, () => console.log(`Server is running on ${port} port`));
  } catch (error) {
    console.error('Failed to start server:', error);
    throw error;
  }
}

startServer();
