import { MediaType } from '../types/types.js';
import { HttpError } from '../errors/HttpError.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import { mediaRepository } from '../repositories/media.repository.js';
import getTmdbMediaDetails from '../utils/api/getTmdbMediaDetails.js';

export class MediaService {
  async getOneBy(mediaId: number, mediaType: MediaType): Promise<MediaInfo> {
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

export const mediaService = new MediaService();
