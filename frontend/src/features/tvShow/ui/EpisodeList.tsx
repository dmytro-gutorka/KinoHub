import { EpisodeListProps } from '@features/tvShow/model/types/tvShowTypes';
import { Stack } from '@mui/material';
import EpisodeItem from './EpisodeItem';

const EpisodeList = ({ episodeList }: EpisodeListProps) => {
  // TODO: Replace slice with some kind of lazy loading/pagination for seasons that have 40-50+ episode

  return (
    <Stack spacing={2}>
      {episodeList &&
        episodeList
          ?.slice(0, 40)
          ?.map((episodeData) => <EpisodeItem episodeData={episodeData} key={episodeData.id} />)}
    </Stack>
  );
};

export default EpisodeList;
