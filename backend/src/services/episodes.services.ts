import { MediaEpisodes } from '../entity/MediaEpisodes.js';
import { HttpError } from '../errors/HttpError.js';
import { episodesRepository } from '../repositories/episodes.repository.js';

export class EpisodesServices {
  async read(mediaId: number, season: number, userId: number): Promise<MediaEpisodes[]> {
    const episodes: MediaEpisodes[] = await MediaEpisodes.findBy({ mediaId, season, userId });

    if (episodes.length === 0) throw HttpError.NotFound('Episodes not found');

    return episodes;
  }

  async create(
    mediaId: number,
    season: number,
    userId: number,
    episodesNumber: number
  ): Promise<MediaEpisodes[]> {
    const isEpisodesExist: MediaEpisodes[] = await MediaEpisodes.findBy({
      mediaId,
      season,
      userId,
    });

    if (isEpisodesExist.length > 0) throw HttpError.Conflict('Episodes already exists');

    const episodes: MediaEpisodes[] = new Array(episodesNumber).map(
      (_, i): MediaEpisodes =>
        episodesRepository.create({
          mediaId,
          userId,
          season,
          episode: i,
          isWatched: false,
        })
    );

    await episodesRepository.save(episodes);

    return episodes;
  }

  async update(
    mediaId: number,
    season: number,
    userId: number,
    episode: number
  ): Promise<MediaEpisodes> {}
}

export const episodesServices = new EpisodesServices();
