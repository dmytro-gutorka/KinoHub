import { UserListItemDTO } from '@kinohub/schemas';
import { Stack } from '@mui/material';
import useFriends from '@features/friends/hooks/useFriends';
import Friend from '@features/friends/ui/Friend';

export default function FriendsTab({ search }: { search: string }) {
  const { data: friends, isSuccess } = useFriends(search);

  if (!isSuccess) return null;

  return (
    <Stack gap={2}>
      {friends.map((friend: UserListItemDTO) => (
        <Friend key={friend.id} friend={friend} />
      ))}
    </Stack>
  );
}
