import { MediaType } from '@shared/types/generalTypes';
import { API_URL } from '@app/constants';

const getUserMediaActionUrl = (mediaId: number, mediaType: MediaType) =>
  `${API_URL}/actions/${mediaId}?media_type=${mediaType}`;
const getMediaUrl = (mediaId: number, mediaType: MediaType) =>
  `${API_URL}/media/${mediaId}?media_type=${mediaType}`;

export const getApiPaths = {
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
    post: (mediaId: number, mediaType: MediaType) => getUserMediaActionUrl(mediaId, mediaType),
    patch: (mediaId: number, mediaType: MediaType) => getUserMediaActionUrl(mediaId, mediaType),
  },
  movieBoardItems: {
    getList: () => `${API_URL}/actions/movie-board`,
  },
  episode: {},
};
