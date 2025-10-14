import { Stack } from '@mui/material';
import useIncomingFriendRequests from '@features/friends/hooks/useIncomingFriendRequests';
import IncomingFriendRequestCard from '@features/friends/ui/IncomingFriendRequestCard';

interface IncomingFriendRequestsTabProps {
  search: string;
  page: number;
}

export default function IncomingFriendRequestsTab({
  search,
  page,
}: IncomingFriendRequestsTabProps) {
  const { data: friendRequests, isSuccess } = useIncomingFriendRequests(search, page);

  if (!isSuccess) return null;

  return (
    <Stack gap={4}>
      {friendRequests.map((friendRequest) => (
        <IncomingFriendRequestCard key={friendRequest.id} friendRequest={friendRequest} />
      ))}
    </Stack>
  );
}
