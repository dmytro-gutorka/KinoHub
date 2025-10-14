import { Stack } from '@mui/material';
import useOutcomingFriendRequests from '@features/friends/hooks/useOutcomingFriendRequests';
import OutcomingFriendRequestCard from '@features/friends/ui/OutcomingFriendRequestCard';

interface OutcomingFriendRequestsTabProps {
  search: string;
}

export default function OutcomingFriendRequestsTab({ search }: OutcomingFriendRequestsTabProps) {
  const { data: friendRequests, isSuccess } = useOutcomingFriendRequests(search);

  if (!isSuccess) return null;

  return (
    <Stack gap={4}>
      {friendRequests.map((friendRequest) => (
        <OutcomingFriendRequestCard key={friendRequest.id} friendRequest={friendRequest} />
      ))}
    </Stack>
  );
}
