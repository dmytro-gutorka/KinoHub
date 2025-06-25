import {LOCALHOST_URL} from "../../app/constants";

async function getMovieBoardMediaItems() {
    const res = await fetch(`${LOCALHOST_URL}movies/watch-status?userid=1`);
    return await res.json();
}

export default getMovieBoardMediaItems;
