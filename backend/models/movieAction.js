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
      allowNull: false,
      defaultValue: false
    },
    mediaType: {
      type: DataTypes.STRING, // tvShow, movie
      allowNull: false,
    },
    runtime: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
    },
    ratings: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: null
    },
    season: {
      type: DataTypes.INTEGER, // only for tvShows
      allowNull: true,
      defaultValue: null,
      unique: 'user_media_unique'
    },
    episode: {
      type: DataTypes.INTEGER,  // only for tvShows
      allowNull: true,
      defaultValue: null,
      unique: 'user_media_unique'
    },
  });
};
