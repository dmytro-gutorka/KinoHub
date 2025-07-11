import { DataSource } from 'typeorm';
import { MediaUserActions, WatchStatus } from '../entity/MediaUserActions.js';
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
    .then(async () => {
      console.log('SQLite is initialized');

      const mediaActions = new MediaUserActions();

      mediaActions.isLiked = false;
      mediaActions.isWatched = false;
      mediaActions.watchStatus = WatchStatus.ToWatch;

      await AppDataSource.manager.save(mediaActions);

      console.log('mediaActions is saved');
    })
    .catch((error) => console.error('Connection error:', error));
}
