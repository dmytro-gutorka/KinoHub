export default function getNumberOfWatchedMedia(mediaActionList, mediaType = 'movie') {
    const numberOfRecords =  mediaActionList.filter((mediaAction, index) => {
        if (mediaAction.mediaType === mediaType && mediaAction.isWatched)
        return 1
    })

    return numberOfRecords.length
}