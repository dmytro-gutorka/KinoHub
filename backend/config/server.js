import { connectDB } from "./db.js";
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import router from '../routes/index.js'


const port = process.env.PORT || 8000
const app = express()

app.use(cors());
app.use(json())
app.use(urlencoded())

app.use('/', router);


async function startServer() {
  try {
    await connectDB()
    app.listen(port, () => console.log(`Server is running on ${port} port`))

  } catch (error) {
    console.error('Connecting error:', error);
  }
}

startServer()