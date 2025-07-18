import { MediaEpisode } from '../entity/MediaEpisode.js';
import { HttpError } from '../errors/HttpError.js';
import { episodesRepository } from '../repositories/episodes.repository.js';

export class EpisodesServices {
  async read(mediaId: number, season: number, userId: number): Promise<MediaEpisode[]> {
    const episodes: MediaEpisode[] = await MediaEpisode.findBy({ mediaId, season, userId });

    if (episodes.length === 0) throw HttpError.NotFound('Episodes not found');

    return episodes;
  }

  async create(
    mediaId: number,
    userId: number | undefined,
    season: number,
    episodesNumber: number
  ): Promise<MediaEpisode[]> {
    const isEpisodesExist: MediaEpisode[] = await MediaEpisode.findBy({
      mediaId,
      userId,
      season,
    });

    if (isEpisodesExist.length > 0) throw HttpError.Conflict('Episodes already exists');

    const episodes: MediaEpisode[] = new Array(episodesNumber).fill(1).map(
      (_, i): MediaEpisode =>
        episodesRepository.create({
          mediaId,
          userId,
          season,
          episode: i + 1,
          isWatched: false,
        })
    );

    await episodesRepository.save(episodes);

    return episodes;
  }

  // async update(
  //   mediaId: number,
  //   season: number,
  //   userId: number,
  //   episode: number
  // ): Promise<MediaEpisodes> {}
}

export const episodesServices = new EpisodesServices();
