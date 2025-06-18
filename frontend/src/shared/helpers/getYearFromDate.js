export default function getYearFromDate(dateStr) {
  const date = new Date(dateStr);
  return date.getFullYear();
}