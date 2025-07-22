import { CLIENT_URL } from '@app/constants';

async function getMediaActionBySeason(id, season) {
  const res = await fetch(`${CLIENT_URL}movies/${id}/actions?season=${season}`);
  return await res.json();
}

export default getMediaActionBySeason;
