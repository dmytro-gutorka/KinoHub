import { MediaType } from '@shared/types/generalTypes';
import { API_URL } from '@app/constants';

const getUserMediaActionUrl = (mediaId: number, mediaType: MediaType) =>
  `${API_URL}/actions/${mediaId}?media_type=${mediaType}`;
const getMediaUrl = (mediaId: number, mediaType: MediaType) =>
  `${API_URL}/media/${mediaId}?media_type=${mediaType}`;

export const apiPath = {
  media: {
    getOneBy: (mediaId: number, mediaType: MediaType) => getMediaUrl(mediaId, mediaType),
    post: (mediaId: number, mediaType: MediaType) => getMediaUrl(mediaId, mediaType),
    put: (mediaId: number, mediaType: MediaType) => getMediaUrl(mediaId, mediaType),
  },
  auth: {
    login: () => `${API_URL}/auth/login`,
    logout: () => `${API_URL}/auth/logout`,
    register: () => `${API_URL}/auth/register`,
    refresh: () => `${API_URL}/auth/refresh`,
  },
  userMediaActions: {
    getOneBy: (mediaId: number, mediaType: MediaType) => getUserMediaActionUrl(mediaId, mediaType),
    create: (mediaId: number, mediaType: MediaType) => getUserMediaActionUrl(mediaId, mediaType),
    update: (mediaId: number, mediaType: MediaType) => getUserMediaActionUrl(mediaId, mediaType),
  },
  movieBoardItems: {
    getList: () => `${API_URL}/actions/movie-board`,
  },
  episode: {
    getList: (tvShowId: number, season: number) =>
      `${API_URL}/episodes/${tvShowId}/season/${season}`,
    createList: (tvShowId: number, season: number, episodesNumber: number) =>
      `${API_URL}/episodes/${tvShowId}/season/${season}?episodes_number=${episodesNumber}`,
    update: (tvShowId: number, season: number, episode: number) =>
      `${API_URL}/episodes/${tvShowId}/season/${season}/episode/${episode}`,
  },

  comments: {
    getList: (mediaId: number, mediaType: MediaType) =>
      `${API_URL}/media/${mediaId}/comments?media_type=${mediaType}`,
    create: (mediaId: number, mediaType: MediaType, parentId?: number) =>
      `${API_URL}/media/${mediaId}/comments?media_type=${mediaType}${parentId ? `&parent_id=${parentId}` : ''}`,
    update: (commentId: number) => `${API_URL}/media/comments/${commentId}`,
    delete: (commentId: number) => `${API_URL}/media/comments/${commentId}`,
  },

  commentsVote: {
    create: (commentId: number) => `${API_URL}/media/comments/${commentId}/vote`,
    update: (commentId: number) => `${API_URL}/media/comments/${commentId}/vote`,
  },

  userStats: {
    getOneBy: (userId: number) => `${API_URL}/users/${userId}/stats`,
  },
};
