import { DataTypes } from 'sequelize'

export const MovieBoardModel = (sequelize) => {
  return sequelize.define('MovieBoard', {
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'toWatch' //toWatch, inWatching, onHold, watched, archived(?)
    },
  });
};
