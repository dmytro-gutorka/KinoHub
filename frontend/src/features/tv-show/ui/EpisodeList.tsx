import { TmdbEpisodeInfo } from '@entities/types/tmdbEntities';
import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { Stack } from '@mui/material';
import EpisodeItem from './EpisodeItem';

export interface EpisodeListProps {
  episodeList: Array<TmdbEpisodeInfo>;
  episodeActionList: Array<EpisodeEntity>;
}

const EpisodeList = ({ episodeList, episodeActionList }: EpisodeListProps) => {
  // TODO: Replace slice with some kind of lazy loading/pagination for seasons that have 40-50+ episode

  if (episodeList?.length > 0 && episodeActionList?.length > 0) {
    return (
      <Stack spacing={2}>
        {episodeList
          ?.slice(0, 40)
          ?.map((episodeItem, index) => (
            <EpisodeItem
              episodeItem={episodeItem}
              episodeActionItem={episodeActionList?.[index]}
              key={episodeItem.id}
            />
          ))}
      </Stack>
    );
  }
};

export default EpisodeList;
