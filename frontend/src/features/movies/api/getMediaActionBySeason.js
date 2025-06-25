import { LOCALHOST_URL } from '../../../app/constants';

async function getMediaActionBySeason(id, season) {
  const res = await fetch(`${LOCALHOST_URL}movies/${id}/actions?season=${season}`);
  return await res.json();
}

export default getMediaActionBySeason;
