export default function calcPercentage(value: number, total: number, toFixed: number = 1): number {
  return Number(((value / total) * 100).toFixed(toFixed));
}
