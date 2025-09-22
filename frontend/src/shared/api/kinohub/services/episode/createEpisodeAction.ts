import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { Action } from '@shared/types/generalTypes';

export default async function createEpisodeAction(
  tvShowId: number,
  season: number,
  episode: number,
  action: Action
) {
  const url: string = apiPath.episode.createOne(tvShowId, season);
  const response = await axiosWithAuth.post(url, { episode, action });

  return response?.data;
}
