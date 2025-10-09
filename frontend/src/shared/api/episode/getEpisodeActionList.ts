import { apiPath } from '@shared/api/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub-axios';
import { EpisodeEntity } from '@entities/types/kinohubEntities';

export default async function getEpisodeListActions(tvShowId: number, season: number) {
  const url: string = apiPath.episode.getList(tvShowId, season);
  const response = await axiosWithAuth.get<Array<EpisodeEntity>>(url);

  return response?.data;
}
