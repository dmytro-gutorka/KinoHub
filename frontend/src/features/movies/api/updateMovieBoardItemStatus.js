import {LOCALHOST_URL} from "../../../app/constants";

async function updateMovieBoardItemStatus(watchStatus, mediaId) {
    const res = await fetch(`${LOCALHOST_URL}movies/${mediaId}/watch-status?userid=1`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            watchStatus
        })

    });

    return await res.json();
}

export default updateMovieBoardItemStatus;
