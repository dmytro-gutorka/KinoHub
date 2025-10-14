import { UserListItemDTO } from '@kinohub/schemas';
import { Stack } from '@mui/material';
import useAutoPagination from '@shared/hooks/useAutoPagination';
import Friend from '@features/friends/ui/Friend';
import useFriends from '@features/friends/hooks/useFriends';

interface FriendsTabProps {
  search: string;
  page: number;
  setPage: (v: number) => void;
}

export default function FriendsTab({ search, page, setPage }: FriendsTabProps) {
  const { data: friends, isSuccess } = useFriends(search, page);
  const friendsList = friends?.data;

  useAutoPagination(page, setPage, friendsList?.length);

  if (!isSuccess) return null;

  return (
    <Stack gap={4}>
      {friendsList?.map((friend: UserListItemDTO) => <Friend key={friend.id} friend={friend} />)}
    </Stack>
  );
}
