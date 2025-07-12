import { mediaInfoRepository } from '../../repositories/mediaInfoRepository.js';

export class MediaInfoService {
  async create(mediaId: number) {
    const mediaInfoExists = await mediaInfoRepository.existsBy({ mediaId });

    if (!mediaInfoExists) {
      const mediaInfoEntity = mediaInfoRepository.create({
        mediaId,
        runtime: 1,
        releaseDate: '',
        title: '',
        posterPath: '',
        voteAverage: 1,
        mediaType: 'tv',
      });
      await mediaInfoRepository.save(mediaInfoEntity);
    }
  }
}
