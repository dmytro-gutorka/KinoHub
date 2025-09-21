import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { EpisodeEntity } from '@entities/types/kinohubEntities';
import { MediaUserActions } from '@shared/types/generalTypes';

export default async function createEpisodeAction(
  tvShowId: number,
  season: number,
  episode: number,
  action: Partial<MediaUserActions>
) {
  const url: string = apiPath.episode.createOne(tvShowId, season);
  const response = await axiosWithAuth.post<Array<EpisodeEntity>>(url, { episode, action });

  return response?.data;
}
