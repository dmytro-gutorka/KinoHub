import { DataSource } from 'typeorm';
import { fileURLToPath } from 'node:url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(__dirname);

export const AppDataSource = new DataSource({
  type: 'postgres',
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['dist/entity/**/*.js'], // is a path correct ???
  migrations: ['dist/migration/**/*.js'],
  synchronize: true,
  logging: false,
});

export async function initDB() {
  AppDataSource.initialize()
    .then(() => console.log(`Database "${process.env.DB_DATABASE}" is initialized`))
    .catch((error) => console.error('Connection error:', error));
}
