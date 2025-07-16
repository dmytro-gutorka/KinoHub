import { getMediaDetailsFromTMDB } from '../utils/api/getMediaDetailsFromTMDB.js';
import { formatMediaDetailsData } from '../utils/helpers/formatMediaDetailsData.js';
import { mediaRepository } from '../repositories/media.repository.js';
import { MediaType } from '../types/types.js';

export class MediaService {
  async create(mediaId: number, mediaType: MediaType) {
    const isMediaInfo = await mediaRepository.existsBy({ mediaId });
    const mediaDataFromTMDB = await getMediaDetailsFromTMDB(mediaId, mediaType);
    const formatedData = formatMediaDetailsData(mediaDataFromTMDB);

    if (!isMediaInfo) {
      const mediaInfoEntity = mediaRepository.create({ mediaId, mediaType, ...formatedData });
      await mediaRepository.save(mediaInfoEntity);
    }
  }
}
