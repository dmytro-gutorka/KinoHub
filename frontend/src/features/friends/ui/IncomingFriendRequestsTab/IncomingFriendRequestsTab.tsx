import { Stack } from '@mui/material';
import { useEffect } from 'react';
import useIncomingFriendRequests from '@features/friends/hooks/useIncomingFriendRequests';
import IncomingFriendRequestCard from '@features/friends/ui/IncomingFriendRequestCard';
import useAutoPagination from '@shared/hooks/useAutoPagination';
import NoIncomingRequests from '@shared/ui/plugs/NoIncomingRequests';

interface IncomingFriendRequestsTabProps {
  search: string;
  page: number;
  setPage: (v: number) => void;
  setTotalPages: (v: number | null) => void;
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
    setTotalPages(friendRequests?.totalPages ? friendRequests?.totalPages : null);
  }, [friendRequests?.totalPages]);

  if (!isSuccess) return null;

  return (
    <Stack gap={4}>
      {(!friendRequestsList || friendRequestsList?.length === 0) && <NoIncomingRequests />}

      {friendRequestsList?.map((friendRequest) => (
        <IncomingFriendRequestCard key={friendRequest.id} friendRequest={friendRequest} />
      ))}
    </Stack>
  );
}
