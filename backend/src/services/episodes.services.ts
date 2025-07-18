import { episodesRepository } from '../repositories/episodes.repository.js';
import { MediaEpisode } from '../entity/MediaEpisode.js';
import { HttpError } from '../errors/HttpError.js';

export class EpisodesServices {
  async read(mediaId: number, userId: number | undefined, season: number): Promise<MediaEpisode[]> {
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

  async update(
    mediaId: number,
    season: number,
    userId: number | undefined,
    episode: number,
    action: object
  ): Promise<void> {
    const isEpisodeExists: MediaEpisode | null = await episodesRepository.findOneBy({
      mediaId,
      season,
      episode,
      userId,
    });

    if (!isEpisodeExists) throw HttpError.Conflict('Episode does not exist');

    await episodesRepository.update({ mediaId, season, episode, userId }, action);
  }
}

export const episodesServices = new EpisodesServices();
