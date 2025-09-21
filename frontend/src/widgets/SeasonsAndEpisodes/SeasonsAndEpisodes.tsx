import { TmdbSeasonInfo } from '@entities/types/tmdbEntities';
import { Params, useParams } from 'react-router';
import { Grid } from '@mui/material';
import { useState } from 'react';
import { EpisodeList, SeasonList } from '@features/tv-show';
import useEpisodeList from '@features/tv-show/model/hooks/useEpisodeList';
import useGetOrCreateEpisodeActionList from '@features/tv-show/model/hooks/useGetOrCreateEpisodeActionList';

export interface SeasonsAndEpisodesProps {
  seasons: TmdbSeasonInfo[];
}

const SeasonsAndEpisodes = ({ seasons }: SeasonsAndEpisodesProps) => {
  const [currentSeasonNumber, setSeasonNumber] = useState(1);

  const params: Readonly<Params<string>> = useParams();
  const tvShowId: number = Number(params?.id);

  const { data } = useEpisodeList(tvShowId, currentSeasonNumber);
  // const { episodeActionList } = useGetOrCreateEpisodeActionList(
  //   tvShowId,
  //   currentSeasonNumber,
  //   episodeList
  // );

  if (!data) return <div>Loading...</div>;

  console.log(data);
  return <div>1</div>;
  // <Grid container justifyContent="space-between" mt={6}>
  //   <Grid size={2.5}>
  //     <SeasonList
  //       episodeActionList={episodeActionList}
  //       seasons={seasons}
  //       currentSeasonNumber={currentSeasonNumber}
  //       onSeasonNumber={setSeasonNumber}
  //     />
  //   </Grid>
  //
  //   <Grid size={9}>
  //     <EpisodeList episodeList={episodeList} episodeActionList={episodeActionList} />
  //   </Grid>
  // </Grid>
  // );
};

export default SeasonsAndEpisodes;
