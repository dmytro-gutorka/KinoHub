import { router as movieRouters } from './routes/movies.js'
import { router as userRouters } from './routes/users.js'
import { sequelize } from './models/index.js';

import cors from 'cors';
import express, { json, urlencoded } from 'express';

const port = process.env.PORT || 8000
const app = express()

app.use(cors());
app.use(json())
app.use(urlencoded())

app.use('/movies', movieRouters);
app.use('/users', userRouters);

async function startServer() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false }); // force: true - reset the tables each launch

    app.listen(port, () => console.log(`Server is running on ${port} port`))
  } catch (error) {
    console.error('Connecting error:', error);
  }
}

startServer()