import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { WatchedEpisodesPerSeason } from '@shared/types/generalTypes';
import { AxiosResponse } from 'axios';

export default async function getWatchedEpisodesCount(tvShowId: number) {
  const url = apiPath.episode.getWatchedEpisodes(tvShowId);
  const watchedEpisodes: AxiosResponse<WatchedEpisodesPerSeason[]> = await axiosWithAuth.get(url);
  return watchedEpisodes?.data;
}
