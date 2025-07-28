import { MediaType } from '../types/types.js';
import { TMDB_BASE_URL, TMDB_OPTIONS } from '../utils/constants/TMDB.js';
import { HttpError } from '../errors/HttpError.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import { mediaRepository } from '../repositories/media.repository.js';
import axios from 'axios';

export class MediaService {
  async read(mediaId: number, mediaType: MediaType): Promise<MediaInfo> {
    const media: MediaInfo | null = await mediaRepository.findOneBy({ mediaId, mediaType });

    if (!media) throw HttpError.NotFound('Media not found');

    return media;
  }

  async create(mediaId: number, mediaType: MediaType): Promise<MediaInfo> {
    const isMediaExists: MediaInfo | null = await mediaRepository.findOneBy({ mediaId, mediaType });

    if (isMediaExists) throw HttpError.Conflict('Media already exists');

    const mappedMediaData = await getTmdbMediaDetails(mediaId, mediaType);
    const media: MediaInfo = mediaRepository.create({ mediaId, mediaType, ...mappedMediaData });
    await mediaRepository.save(media);

    return media;
  }

  async update(mediaId: number, mediaType: MediaType): Promise<MediaInfo> {
    const media: MediaInfo | null = await mediaRepository.findOneBy({ mediaId, mediaType });

    if (!media) throw HttpError.NotFound('Media not found');

    const mappedMediaData = await getTmdbMediaDetails(mediaId, mediaType);

    await mediaRepository.update({ mediaId }, mappedMediaData);

    return media;
  }
}

// move to another folder
async function getTmdbMediaDetails(mediaId: number, mediaType: MediaType) {
  const response = await axios.get(`${TMDB_BASE_URL}/${mediaType}/${mediaId}`, TMDB_OPTIONS);

  if (!response?.data) throw HttpError.InternalServerError('Could not fetch media data from TMDB');

  return mapMediaData(response?.data);
}

// move to another folder
function mapMediaData(data: any) {
  return {
    runtime: data?.runtime ?? data?.episode_run_time?.[0] ?? 0,
    releaseDate: data?.release_date ?? data?.first_air_date ?? 'N/A',
    title: data?.title ?? data?.name ?? 'No title',
    posterPath: data?.poster_path,
    voteAverage: data?.vote_average ?? 0,
  };
}

export const mediaService = new MediaService();
