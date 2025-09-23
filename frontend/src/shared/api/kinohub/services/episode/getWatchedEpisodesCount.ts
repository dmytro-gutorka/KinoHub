import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { WatchedEpisodesPerSeason } from '@shared/types/generalTypes';
import { AxiosResponse } from 'axios';

export default async function getWatchedEpisodesCount(tvShowId: number) {
  const url = apiPath.episode.getWatchedEpisodes(tvShowId);
  const watchedEpisodes: AxiosResponse<WatchedEpisodesPerSeason[]> = await axiosWithAuth.get(url);
  return watchedEpisodes?.data;
}
