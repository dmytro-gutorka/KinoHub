import { Stack } from '@mui/material';
import useIncomingFriendRequests from '@features/friends/hooks/useIncomingFriendRequests';
import IncomingFriendRequestCard from '@features/friends/ui/IncomingFriendRequestCard';

interface IncomingFriendRequestsTabProps {
  search: string;
}

export default function IncomingFriendRequestsTab({ search }: IncomingFriendRequestsTabProps) {
  const { data: friendRequests, isSuccess } = useIncomingFriendRequests(search);

  if (!isSuccess) return null;

  return (
    <Stack gap={4}>
      {friendRequests.map((friendRequest) => (
        <IncomingFriendRequestCard key={friendRequest.id} friendRequest={friendRequest} />
      ))}
    </Stack>
  );
}
