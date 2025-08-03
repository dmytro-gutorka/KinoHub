export default function getYearFromDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.getFullYear();
}
