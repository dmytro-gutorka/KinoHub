import { UserListItemDTO } from '@kinohub/schemas';
import { Button, Stack, Typography } from '@mui/material';
import useAutoPagination from '@shared/hooks/useAutoPagination';
import Friend from '@features/friends/ui/Friend';
import useFriends from '@features/friends/hooks/useFriends';
import { useEffect } from 'react';

interface FriendsTabProps {
  search: string;
  page: number;
  setPage: (v: number) => void;
  setTotalPages: (v: number) => void;
}

export default function FriendsTab({ search, page, setPage, setTotalPages }: FriendsTabProps) {
  const { data: friends, isSuccess } = useFriends(search, page);
  const friendsList = friends?.data;

  useAutoPagination(page, setPage, friendsList?.length);

  useEffect(() => {
    if (friends?.totalPages) setTotalPages(friends?.totalPages);
  }, [friends?.totalPages]);

  if (!isSuccess) return null;

  console.log(friendsList);

  return (
    <Stack gap={4}>
      {(!friendsList || friendsList?.length === 0) && <NoFriendsPlug />}
      {friendsList?.map((friend: UserListItemDTO) => <Friend key={friend.id} friend={friend} />)}
    </Stack>
  );
}

function NoFriendsPlug() {
  return (
    <Stack
      gap={4}
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100%"
      p={5}
    >
      <Typography variant="h5" fontWeight={900}>
        No friends yet
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Start connecting with other movie enthusiasts!
      </Typography>
      <Button>Add Friends</Button>
    </Stack>
  );
}
