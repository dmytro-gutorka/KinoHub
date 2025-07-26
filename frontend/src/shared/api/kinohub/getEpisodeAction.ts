import { CLIENT_URL } from '@app/constants';

async function getEpisodeListActions(id: number, season: number) {
  const res = await fetch(`${CLIENT_URL}movies/${id}/actions?season=${season}`);
  return await res.json();
}

export default getEpisodeListActions;
