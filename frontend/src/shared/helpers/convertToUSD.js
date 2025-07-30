export default function convertToUSD(number) {
  const formated = number.toLocaleString('en-US');
  return '$' + formated;
}
