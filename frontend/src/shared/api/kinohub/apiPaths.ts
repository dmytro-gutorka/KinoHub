import { API_URL } from '@app/constants';
import { MediaType } from '@shared/types/generalTypes';

const getMediaActionUrl = (mediaId: number, mediaType: MediaType) =>
  `${API_URL}/actions/${mediaId}?media_type=${mediaType}`;
const getMediaUrl = (mediaId: number, mediaType: MediaType) =>
  `${API_URL}/media/${mediaId}?media_type=${mediaType}`;

export const api = {
  media: {
    getMedia: (mediaId: number, mediaType: MediaType) => getMediaUrl(mediaId, mediaType),
    updateMedia: (mediaId: number, mediaType: MediaType) => getMediaUrl(mediaId, mediaType),
    createMedia: (mediaId: number, mediaType: MediaType) => getMediaUrl(mediaId, mediaType),
  },
  auth: {
    login: () => `${API_URL}/auth/login`,
    logout: () => `${API_URL}/auth/logout`,
    register: () => `${API_URL}/auth/register`,
    refresh: () => `${API_URL}/auth/refresh`,
  },
  actions: {
    getMediaAction: (mediaId: number, mediaType: MediaType) =>
      getMediaActionUrl(mediaId, mediaType),
    updateMediaAction: (mediaId: number, mediaType: MediaType) =>
      getMediaActionUrl(mediaId, mediaType),
    createMediaAction: (mediaId: number, mediaType: MediaType) =>
      getMediaActionUrl(mediaId, mediaType),
  },
  episode: {},
};
