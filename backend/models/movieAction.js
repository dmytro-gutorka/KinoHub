import { DataTypes } from 'sequelize'

export const MovieActionModel = (sequelize) => {
  return sequelize.define('MovieAction', {
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isLiked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    ratings: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
};
