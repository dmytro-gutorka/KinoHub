import { TmdbEpisodeInfo, TmdbSeasonInfo } from '@entities/types/tmdbEntities';

export type SeasonDataWithEpisodes = TmdbSeasonInfo & { episodes: Array<TmdbEpisodeInfo> };

export interface SeasonListProps {
  seasonList: Array<SeasonDataWithEpisodes>;
  tvSeason: number;
  onSetTvSeason: (tvSeason: number) => void;
}

export interface SeasonItemProps {
  seasonData: SeasonDataWithEpisodes;
  tvSeason: number;
  onSetTvSeason: (tvSeason: number) => void;
}

export interface EpisodeListProps {
  episodeList: Array<TmdbEpisodeInfo>;
}

export interface EpisodeItemProps {
  episodeData: TmdbEpisodeInfo;
}
