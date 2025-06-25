import { LOCALHOST_URL } from '../../../app/constants';

async function getUserStats() {
    const res = await fetch(`${LOCALHOST_URL}movies/user-stats?userid=1`);
    return await res.json();
}

export default getUserStats;
