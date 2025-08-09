import { fileURLToPath } from 'node:url';
import { DataSource } from 'typeorm';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  schema: 'public',
  synchronize: true,
  logging: false,
  dropSchema: false,
  entities: [__dirname + '/../entity/**/*.js'],
  migrations: [__dirname + '/../migration/**/*.js'],
});

export async function initDB() {
  try {
    await AppDataSource.initialize();
    console.log(`Database "${process.env.DB_DATABASE}" is initialized`);
    return true;
  } catch (error) {
    console.error('Connection error:', error);
    throw error;
  }
}
