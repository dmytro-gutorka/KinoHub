import useFriends from '@features/friends/hooks/useFriends';

export default function FriendsTab({ search }: { search: string }) {
  const { data, isSuccess } = useFriends(search);

  if (!isSuccess) return null;
  console.log(data);

  return <div>Friend tab</div>;
}
