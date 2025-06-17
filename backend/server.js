import { router as movieRouters } from './routes/movies.js'
import { Sequelize } from 'sequelize';
import { UserModel } from './models/user.js'
import express from 'express'

const PORT = process.env.PORT || 8000

const app = express()

app.use('/movies', movieRouters)

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});

const User = UserModel(sequelize);

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('DB Connected !');

    await sequelize.sync({ force: true }); // force: true - reset the tables each launch

    await User.create({ name: 'Dmytro', email: 'dmytro@bini.games' });
    await User.create({ name: 'Dmytro1', email: 'dmytro@bini.games1' });

    const users = await User.findAll();

    console.log('All users:', users.map(u => u.toJSON()));

    app.listen(PORT, () => console.log(`Server is running on ${PORT} port`))
  } catch (error) {
    console.error('Connecting error:', error);
  }
}

startServer()