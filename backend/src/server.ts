import { connectDB } from './config/db.ts';
import express, {
  json,
  urlencoded,
  Application,
  Request,
  Response,
  NextFunction,
} from 'express';
import cors from 'cors';
// import router from './routes/index.ts'

const port: number = Number(process.env.PORT) || 8000;
const app: Application = express();

app.use(cors());
app.use(json());
app.use(urlencoded());

// app.use('/', router);

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => console.log(`Server is running on ${port} port`));
  } catch (error) {
    console.error('Connecting error:', error);
  }
}

startServer();
