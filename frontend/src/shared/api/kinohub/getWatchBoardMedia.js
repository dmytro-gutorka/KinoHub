import { CLIENT_URL } from '@app/constants';

async function getWatchBoardMedia() {
  const res = await fetch(`${CLIENT_URL}movies/watch-status?userid=1`);
  return await res.json();
}

export default getWatchBoardMedia;
