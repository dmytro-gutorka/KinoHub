import { TmdbEpisodeInfo } from '@entities/types/tmdbEntities';
import { Stack } from '@mui/material';
import EpisodeItem from './EpisodeItem';

export interface EpisodeListProps {
  episodeList: Array<TmdbEpisodeInfo>;
}

const EpisodeList = ({ episodeList }: EpisodeListProps) => {
  // TODO: Replace slice with some kind of lazy loading/pagination for seasons that have 40-50+ episode

  if (!episodeList) return <div>Loading...</div>;
  return (
    <Stack spacing={2}>
      {episodeList &&
        episodeList
          ?.slice(0, 40)
          ?.map((episodeItem) => <EpisodeItem episodeItem={episodeItem} key={episodeItem.id} />)}
    </Stack>
  );
};

export default EpisodeList;
