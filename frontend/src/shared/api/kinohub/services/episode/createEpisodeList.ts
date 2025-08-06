import { apiPath } from '@shared/api/kinohub/apiPaths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohubAxios';
import { EpisodeEntity } from '@entities/types/kinohubEntities';

export default async function createEpisodeList(
  tvShowId: number,
  season: number,
  episodesNumber: number
) {
  const url: string = apiPath.episode.createList(tvShowId, season, episodesNumber);
  const response = await axiosWithAuth.post<Array<EpisodeEntity>>(url);

  return response?.data;
}
