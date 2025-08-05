export default function getYearFromDate(dateStr: string) {
  if (!dateStr) return 'N/A';
  return new Date(dateStr)?.getFullYear();
}
