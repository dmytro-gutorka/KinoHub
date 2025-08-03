export default function convertToUSD(sum: number) {
  const formated = sum.toLocaleString('en-US');
  return '$' + formated;
}
