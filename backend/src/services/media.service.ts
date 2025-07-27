import { MediaType } from '../types/types.js';
import { mediaRepository } from '../repositories/media.repository.js';
import { HttpError } from '../errors/HttpError.js';
import { MediaInfo } from '../entity/MediaInfo.js';
import axios from 'axios';
import { TMDB_BASE_URL, TMDB_OPTIONS } from '../utils/constants/TMDB.js';

export class MediaService {
  async read(mediaId: number): Promise<MediaInfo> {
    const media: MediaInfo | null = await mediaRepository.findOneBy({ mediaId });

    if (!media) throw HttpError.NotFound('Media not found');

    return media;
  }

  async create(mediaId: number, mediaType: MediaType): Promise<MediaInfo> {
    const isMediaExists: MediaInfo | null = await mediaRepository.findOneBy({ mediaId });

    if (isMediaExists) throw HttpError.Conflict('Media already exists');

    const data = await axios.get(`${TMDB_BASE_URL}/${mediaType}/${mediaId}`, TMDB_OPTIONS);
    console.log(data.data);

    const media: MediaInfo = mediaRepository.create({ mediaId, mediaType });
    await mediaRepository.save(media);

    return media;
  }

  async update(mediaId: number): Promise<MediaInfo> {
    // fetch data from TMDB
    const fetchedData = {
      runtime: mediaId,
      title: `Title ${mediaId}`,
    };

    const media: MediaInfo | null = await mediaRepository.findOneBy({ mediaId });

    if (!media) throw HttpError.NotFound('Media not found');

    await mediaRepository.update({ mediaId }, fetchedData);

    return media;
  }
}

export const mediaService = new MediaService();
