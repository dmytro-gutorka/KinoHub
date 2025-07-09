import { UserModel } from './user.js';
import { MovieActionModel } from './movieAction.js';
import {sequelize} from "../config/db.js";


export const User = UserModel(sequelize);
export const MovieAction = MovieActionModel(sequelize);

User.hasMany(MovieAction, { foreignKey: 'userId' });
MovieAction.belongsTo(User, { foreignKey: 'userId' });
