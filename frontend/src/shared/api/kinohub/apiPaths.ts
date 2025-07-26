import { API_URL } from '@app/constants';

const getMediaActionUrl = (movieId: number) => `${API_URL}/actions/${movieId}`;

export const api = {
  media: {},
  auth: {
    login: () => `${API_URL}/auth/login`,
    logout: () => `${API_URL}/auth/logout`,
    register: () => `${API_URL}/auth/register`,
    refresh: () => `${API_URL}/auth/refresh`,
  },
  actions: {
    getMediaAction: (movieId: number) => getMediaActionUrl(movieId),
    updateMediaAction: (movieId: number) => getMediaActionUrl(movieId),
    createMediaAction: (movieId: number) => getMediaActionUrl(movieId),
  },
  episode: {},
};
