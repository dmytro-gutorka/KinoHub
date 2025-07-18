import { MediaType } from '../types/types.js';
import { mediaRepository } from '../repositories/media.repository.js';
import { HttpError } from '../errors/HttpError.js';
import { MediaInfo } from '../entity/MediaInfo.js';

export class MediaService {
  async read(mediaId: number): Promise<MediaInfo> {
    const media: MediaInfo | null = await mediaRepository.findOneBy({ mediaId });

    if (!media) throw HttpError.NotFound('Media not found');

    return media;
  }

  async create(mediaId: number, mediaType: MediaType): Promise<MediaInfo> {
    const media: MediaInfo = mediaRepository.create({ mediaId, mediaType });

    await mediaRepository.save(media);

    return media;
  }

  async update(mediaId: number) {
    // fetch data from TMDB
    const fetchedData = {
      runtime: mediaId,
      title: `Title ${mediaId}`,
    };

    const updatedMedia = await mediaRepository.update({ mediaId }, fetchedData);

    console.log(updatedMedia);
  }
}

export const mediaService = new MediaService();
