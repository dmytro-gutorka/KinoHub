export default function getDateFromISO(isoString: string) {
  const dateObj = new Date(isoString);
  return dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
