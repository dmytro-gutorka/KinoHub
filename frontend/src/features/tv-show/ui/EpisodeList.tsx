import { TmdbEpisodeInfo } from '@entities/types/tmdbEntities';
import { Stack } from '@mui/material';
import EpisodeItem from './EpisodeItem';

export interface EpisodeListProps {
  episodes: Array<TmdbEpisodeInfo> & { isWatched: boolean };
}

const EpisodeList = ({ episodes }: EpisodeListProps) => {
  // TODO: Replace slice with some kind of lazy loading/pagination for seasons that have 40-50+ episode

  if (episodes?.length > 0) {
    return (
      <Stack spacing={2}>
        {episodes
          ?.slice(0, 40)
          ?.map((episode) => <EpisodeItem episode={episode} key={episode.id} />)}
      </Stack>
    );
  }
};

export default EpisodeList;
