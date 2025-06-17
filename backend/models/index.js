import { UserModel } from './user.js';
import { MovieBoardModel } from './movieBoard.js';
import { MovieActionModel } from './movieAction.js';

import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});

export const User = UserModel(sequelize);
export const MovieBoard = MovieBoardModel(sequelize);
export const MovieAction = MovieActionModel(sequelize);

User.hasMany(MovieAction, { foreignKey: 'userId' });
MovieAction.belongsTo(User, { foreignKey: 'userId' });