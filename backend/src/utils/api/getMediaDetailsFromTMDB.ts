import axios from 'axios';
import { TMDB_BASE_URL, TMDB_OPTIONS } from '../constants/TMDB.js';
import { MediaType } from '../../types/types';

export async function getMediaDetailsFromTMDB(mediaId: number, mediaType: MediaType) {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/${mediaType}/${mediaId}`, TMDB_OPTIONS);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
