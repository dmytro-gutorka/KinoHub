import { Stack } from '@mui/material';
import useOutcomingFriendRequests from '@features/friends/hooks/useOutcomingFriendRequests';
import OutcomingFriendRequestCard from '@features/friends/ui/OutcomingFriendRequestCard';
import useAutoPagination from '@shared/hooks/useAutoPagination';

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
  const friendRequestsList = friendRequests?.data;

  useAutoPagination(page, setPage, friendRequestsList?.length);

  if (!isSuccess) return null;

  return (
    <Stack gap={4}>
      {friendRequestsList?.map((friendRequest) => (
        <OutcomingFriendRequestCard key={friendRequest.id} friendRequest={friendRequest} />
      ))}
    </Stack>
  );
}
