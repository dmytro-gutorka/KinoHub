import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { Action } from '@shared/types/generalTypes';

export default async function updateEpisodeAction(
  tvShowId: number,
  season: number,
  episode: number,
  action: Action
) {
  const url: string = apiPath.episode.update(tvShowId, season, episode);
  const response = await axiosWithAuth.patch<EpisodeEntity>(url, { action });

  return response?.data;
}
