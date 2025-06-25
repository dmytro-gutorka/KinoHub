export default function getAvgRuntime(mediaActionList) {
    const recordsWithRuntime = mediaActionList.map(mediaAction => mediaAction.runtime)
    return recordsWithRuntime.reduce((acc, curVal) => acc + curVal, 0)
}