import { DataTypes } from 'sequelize'

export const MovieActionModel = (sequelize) => {
  return sequelize.define('MovieAction', {
    movieId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'user_media_unique',
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: 'user_media_unique',
    },
    isLiked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    isWatched: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    mediaType: {
      type: DataTypes.STRING, // tv, movie
      allowNull: false,
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    watchStatus: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null //toWatch, isWatching, onHold, favorites, archived
    },
    season: {
      type: DataTypes.INTEGER, // only for tv
      allowNull: true,
      defaultValue: null,
      unique: 'user_media_unique'
    },
    episode: {
      type: DataTypes.INTEGER,  // only for tv
      allowNull: true,
      defaultValue: null,
      unique: 'user_media_unique'
    },
  });
};
