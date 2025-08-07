import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { MediaUserActions } from '@shared/types/generalTypes';

export default async function updateEpisodeAction(
  tvShowId: number,
  season: number,
  episode: number,
  action: MediaUserActions
) {
  const url: string = apiPath.episode.update(tvShowId, season, episode);
  const response = await axiosWithAuth.patch<EpisodeEntity>(url, action);

  return response?.data;
}
