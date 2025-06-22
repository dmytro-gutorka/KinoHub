import { LOCAL_URL } from '../../../config/constants';

async function getMediaActionBySeason(id, season) {
  const res = await fetch(`${LOCAL_URL}movies/${id}/actions?season=${season}`);
  return await res.json();
}

export default getMediaActionBySeason;
