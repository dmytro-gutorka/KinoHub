import { Stack } from '@mui/material';
import { useEffect } from 'react';
import useIncomingFriendRequests from '@features/friends/hooks/useIncomingFriendRequests';
import IncomingFriendRequestCard from '@features/friends/ui/IncomingFriendRequestCard';
import useAutoPagination from '@shared/hooks/useAutoPagination';

interface IncomingFriendRequestsTabProps {
  search: string;
  page: number;
  setPage: (v: number) => void;
  setTotalPages: (v: number) => void;
}

export default function IncomingFriendRequestsTab({
  search,
  page,
  setPage,
  setTotalPages,
}: IncomingFriendRequestsTabProps) {
  const { data: friendRequests, isSuccess } = useIncomingFriendRequests(search, page);
  const friendRequestsList = friendRequests?.data;

  useAutoPagination(page, setPage, friendRequestsList?.length);

  useEffect(() => {
    if (friendRequests?.totalPages) setTotalPages(friendRequests?.totalPages);
  }, [friendRequests?.totalPages]);

  if (!isSuccess) return null;

  return (
    <Stack gap={4}>
      {friendRequestsList?.map((friendRequest) => (
        <IncomingFriendRequestCard key={friendRequest.id} friendRequest={friendRequest} />
      ))}
    </Stack>
  );
}
