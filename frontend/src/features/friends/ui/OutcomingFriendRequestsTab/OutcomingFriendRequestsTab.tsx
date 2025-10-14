import { Stack } from '@mui/material';
import useOutcomingFriendRequests from '@features/friends/hooks/useOutcomingFriendRequests';
import OutcomingFriendRequestCard from '@features/friends/ui/OutcomingFriendRequestCard';
import { useEffect } from 'react';

interface OutcomingFriendRequestsTabProps {
  search: string;
  page: number;
  setPage: (v: number) => void;
}

export default function OutcomingFriendRequestsTab({
  search,
  page,
  setPage,
}: OutcomingFriendRequestsTabProps) {
  const { data: friendRequests, isSuccess } = useOutcomingFriendRequests(search, page);

  useEffect(() => {
    if (friendRequests?.length === 0 && page > 1) setPage(page - 1);
  }, [friendRequests?.length]);

  if (!isSuccess) return null;

  return (
    <Stack gap={4}>
      {friendRequests.map((friendRequest) => (
        <OutcomingFriendRequestCard key={friendRequest.id} friendRequest={friendRequest} />
      ))}
    </Stack>
  );
}
