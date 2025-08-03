export default function getAvgRuntime(mediaAction: [any]) {
  const recordsWithRuntime = mediaAction.map((mediaAction) => mediaAction.runtime);
  return recordsWithRuntime.reduce((acc, curVal) => acc + curVal, 0);
}
