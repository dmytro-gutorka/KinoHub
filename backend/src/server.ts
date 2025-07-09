import 'reflect-metadata';

import express, { json, urlencoded, Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { User } from './entity/User.js';
// import { AppDataSource } from './config/db.ts';
// import router from './routes/index.ts'

import { AppDataSource } from './config/db.js';

const port: number = Number(process.env.PORT) || 8000;
const app: Application = express();

app.use(cors());
app.use(json());
app.use(urlencoded());

// app.use('/', router);

async function startServer() {
  try {
    AppDataSource.initialize()
      .then(async () => {
        console.log('📦 SQLite БД инициализирована');

        const user = new User();
        user.name = 'Alice';

        await AppDataSource.manager.save(user);
        console.log('✅ Пользователь сохранён');

        const users = await AppDataSource.manager.find(User);
        console.log('📄 Все пользователи:', users);
      })
      .catch((error) => console.error('Ошибка подключения:', error));

    app.listen(port, () => console.log(`Server is running on ${port} port`));
  } catch (error) {
    console.error('Connecting error:', error);
  }
}

startServer();
