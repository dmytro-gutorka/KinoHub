export default function convertToUDS(number) {
  const formated = number.toLocaleString('en-US')
  return '$' + formated
}