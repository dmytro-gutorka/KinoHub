import { apiPath } from '@shared/api/kinohub/api-paths';
import { axiosWithAuth } from '@shared/api/kinohub/kinohub-axios';
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
