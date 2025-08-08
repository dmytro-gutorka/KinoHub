import { MediaType } from '../../types/types.js';
import { TMDB_BASE_URL, TMDB_OPTIONS } from '../constants/TMDB.js';
import { HttpError } from '../../errors/HttpError.js';
import axios from 'axios';
import mapTmdbMediaData from '../helpers/mapTmdbMediaData.js';

export default async function getTmdbMediaDetails(mediaId: number, mediaType: MediaType) {
  const response = await axios.get(`${TMDB_BASE_URL}/${mediaType}/${mediaId}`, TMDB_OPTIONS);

  if (!response?.data) throw HttpError.InternalServerError('Could not fetch media data from TMDB');

  return mapTmdbMediaData(response?.data);
}
