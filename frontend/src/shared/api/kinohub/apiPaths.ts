import { API_URL } from '@app/constants';

export const api = {
  media: {},
  auth: {
    login: () => `${API_URL}/auth/login`,
    logout: () => `${API_URL}/auth/logout`,
    register: () => `${API_URL}/auth/register`,
    refresh: () => `${API_URL}/auth/refresh`,
  },
  actions: {
    getMediaAction: (movieId: number) => `${API_URL}/actions/${movieId}`,
    updateMediaAction: (movieId: number) => `${API_URL}/actions/${movieId}`,
    createMediaAction: (movieId: number) => `${API_URL}/actions/${movieId}`,
  },
  episode: {},
};
