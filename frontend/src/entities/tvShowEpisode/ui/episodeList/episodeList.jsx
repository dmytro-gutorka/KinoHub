import EpisodeItem from '../episodeItem';
import { Stack } from '@mui/material';

const EpisodeList = ({ episodesData }) => {
  //Replace slice with some kind of lazy loading/pagination for seasons that have 40-50+ episode

  return (
    <Stack spacing={2}>
      {episodesData &&
        episodesData
          ?.slice(0, 40)
          ?.map((episodeData) => <EpisodeItem episodeData={episodeData} key={episodeData.id} />)}
    </Stack>
  );
};

export default EpisodeList;
