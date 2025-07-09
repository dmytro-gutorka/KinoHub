import { DataSource } from 'typeorm';
import { User } from '../entity/User.js';

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  synchronize: true,
  logging: true,
  entities: [User], // for compiled version - ['dist/entity/**/*.js']
});
