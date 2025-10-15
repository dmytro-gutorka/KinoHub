import { Stack } from '@mui/material';
import { useEffect } from 'react';
import useOutcomingFriendRequests from '@features/friends/hooks/useOutcomingFriendRequests';
import OutcomingFriendRequestCard from '@features/friends/ui/OutcomingFriendRequestCard';
import useAutoPagination from '@shared/hooks/useAutoPagination';
import NoOutcomingRequests from '@shared/ui/plugs/NoOutcomingRequests';

interface OutcomingFriendRequestsTabProps {
  search: string;
  page: number;
  setPage: (v: number) => void;
  setTotalPages: (v: number) => void;
}

export default function OutcomingFriendRequestsTab({
  search,
  page,
  setPage,
  setTotalPages,
}: OutcomingFriendRequestsTabProps) {
  const { data: friendRequests, isSuccess } = useOutcomingFriendRequests(search, page);
  const friendRequestsList = friendRequests?.data;

  useAutoPagination(page, setPage, friendRequestsList?.length);

  useEffect(() => {
    if (friendRequests?.totalPages) setTotalPages(friendRequests?.totalPages);
  }, [friendRequests?.totalPages]);

  if (!isSuccess) return null;

  return (
    <Stack gap={4}>
      {(!friendRequestsList || friendRequestsList?.length === 0) && <NoOutcomingRequests />}

      {friendRequestsList?.map((friendRequest) => (
        <OutcomingFriendRequestCard key={friendRequest.id} friendRequest={friendRequest} />
      ))}
    </Stack>
  );
}
