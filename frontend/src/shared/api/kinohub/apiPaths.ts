import { API_URL } from '@app/constants';
import { MediaType } from '@shared/types/generalTypes';

const getMediaActionUrl = (mediaId: number) => `${API_URL}/actions/${mediaId}`;

export const api = {
  media: {
    getMedia: (mediaId: number) => `${API_URL}/media/${mediaId}`,
    updateMedia: (mediaId: number) => `${API_URL}/media/${mediaId}`,
    createMedia: (mediaId: number, mediaType: MediaType) =>
      `${API_URL}/media/${mediaId}?media_type=${mediaType}`,
  },
  auth: {
    login: () => `${API_URL}/auth/login`,
    logout: () => `${API_URL}/auth/logout`,
    register: () => `${API_URL}/auth/register`,
    refresh: () => `${API_URL}/auth/refresh`,
  },
  actions: {
    getMediaAction: (mediaId: number) => getMediaActionUrl(mediaId),
    updateMediaAction: (mediaId: number) => getMediaActionUrl(mediaId),
    createMediaAction: (mediaId: number) => getMediaActionUrl(mediaId),
  },
  episode: {},
};
