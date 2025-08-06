import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { EpisodeEntity } from '@entities/types/kinohubEntities';

async function getEpisodeListActions(tvShowId: number, season: number) {
  const url: string = apiPath.episode.getList(tvShowId, season);
  const response = await axiosWithAuth.get<Array<EpisodeEntity>>(url);

  return response?.data;
}

export default getEpisodeListActions;
