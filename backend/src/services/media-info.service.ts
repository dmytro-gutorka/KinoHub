import { MediaType } from '../types/types.js';
import { HttpError } from '../errors/HttpError.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import getTmdbMediaDetails from '../utils/api/getTmdbMediaDetails.js';
import { mediaGenresRepository, mediaRepository } from '../config/repositories.js';

export class MediaInfoService {
  async getOneBy(mediaId: number, mediaType: MediaType): Promise<MediaInfo> {
    const media: MediaInfo | null = await mediaRepository.findOneBy({ mediaId, mediaType });

    if (!media) throw HttpError.NotFound('Media not found');

    return media;
  }

  async create(mediaId: number, mediaType: MediaType): Promise<MediaInfo> {
    const mediaItem: MediaInfo | null = await mediaRepository.findOneBy({ mediaId, mediaType });

    if (mediaItem) throw HttpError.Conflict('Media already exists');

    const mappedMediaData = await getTmdbMediaDetails(mediaId, mediaType);
    const { genres: genreIds, ...mediaData } = mappedMediaData;

    const media: MediaInfo = mediaRepository.create({ mediaId, mediaType, ...mediaData });
    await mediaRepository.save(media);

    await this.addGenresToMedia(media.id, genreIds, mediaType);

    return media;
  }

  async update(mediaId: number, mediaType: MediaType): Promise<MediaInfo> {
    const mediaItem: MediaInfo | null = await mediaRepository.findOneBy({ mediaId, mediaType });

    if (!mediaItem) throw HttpError.NotFound('Media not found');

    const mappedMediaData = await getTmdbMediaDetails(mediaId, mediaType);
    const { genres: genreIds, ...mediaData } = mappedMediaData;

    const rows = await mediaRepository
      .createQueryBuilder()
      .update()
      .set(mediaData)
      .where({ mediaId, mediaType })
      .returning('*')
      .execute();

    const updatedMediaItem = rows?.raw[0];
    await this.addGenresToMedia(updatedMediaItem.id, genreIds, mediaType);

    return updatedMediaItem;
  }

  async addGenresToMedia(mediaId: number, genreIds: number[], mediaType: MediaType): Promise<void> {
    if (genreIds.length === 0) return;

    await mediaGenresRepository.upsert(
      genreIds.map((genreId: number) => ({
        mediaItemId: mediaId,
        genreId,
        mediaType,
      })),
      ['mediaItemId', 'genreId', 'mediaType']
    );
  }
}

export const mediaService = new MediaInfoService();
