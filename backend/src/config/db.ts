import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: true,
  entities: ['dist/entity/**/*.js'],
});

export async function initDB() {
  AppDataSource.initialize()
    .then(async () => {
      console.log('SQLite is initialized');

      const user = new User();
      user.name = 'Alice';

      await AppDataSource.manager.save(user);

      console.log('User is saved');
    })
    .catch((error) => console.error('Connection error:', error));
}
