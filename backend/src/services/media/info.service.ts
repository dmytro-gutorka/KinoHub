import { mediaInfoRepository } from '../../repositories/mediaInfoRepository.js';
import { getMediaDetailsFromTMDB } from '../../utils/api/getMediaDetailsFromTMDB.js';
import { formatMediaDetailsData } from '../../utils/helpers/formatMediaDetailsData.js';

export class MediaInfoService {
  async create(mediaId: number, mediaType: 'tv' | 'movie') {
    const isMediaInfo = await mediaInfoRepository.existsBy({ mediaId });
    const mediaDataFromTMDB = await getMediaDetailsFromTMDB(mediaId, mediaType);
    const formatedData = formatMediaDetailsData(mediaDataFromTMDB);

    console.log(mediaDataFromTMDB);
    console.log(formatedData);
    //
    // if (!isMediaInfo) {
    //   const mediaInfoEntity = mediaInfoRepository.create({ mediaId, mediaType, ...formatedData });
    //   await mediaInfoRepository.save(mediaInfoEntity);
    // }
  }
}
