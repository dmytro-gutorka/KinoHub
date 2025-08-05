export default function cutText(text: string, length: number) {
  const cutString = text.split(' ').slice(0, length).join(' ');
  return cutString + '...';
}
