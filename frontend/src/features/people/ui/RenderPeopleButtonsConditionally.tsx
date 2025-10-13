import { Button, Stack } from '@mui/material';
import { UserListItemDTO } from '@kinohub/schemas';
import useDeleteFriend from '@shared/hooks/useDeleteFriend';
import useCreateFriendRequest from '@shared/hooks/useCreateFriendRequest';
import useCancelFriendRequest from '@shared/hooks/useCancelFriendRequest';
import useAcceptFriendRequest from '@shared/hooks/useAcceptFriendRequest';
import useRejectFriendRequest from '@shared/hooks/useRejectFriendRequest';

export default function RenderPeopleButtonsConditionally({ person }: { person: UserListItemDTO }) {
  const { mutate: deleteFriend } = useDeleteFriend();
  const { mutate: createFriendRequest } = useCreateFriendRequest();
  const { mutate: cancelFriendRequest } = useCancelFriendRequest();
  const { mutate: acceptFriendRequest } = useAcceptFriendRequest();
  const { mutate: rejectFriendRequest } = useRejectFriendRequest();

  if (!person.isFriend) {
    if (person.isPendingIncoming)
      return (
        <Stack direction="row" gap={2}>
          <Button onClick={() => rejectFriendRequest(person.friendRequestId!)} variant="outlined">
            Reject request
          </Button>
          <Button onClick={() => acceptFriendRequest(person.friendRequestId!)} variant="outlined">
            Accept request
          </Button>
        </Stack>
      );

    if (person.isPendingOutgoing)
      return (
        <Button onClick={() => cancelFriendRequest(person.friendRequestId!)} variant="outlined">
          Cancel request
        </Button>
      );

    if (!person.isPendingOutgoing && !person.isPendingIncoming)
      return (
        <Button onClick={() => createFriendRequest(person.id)} variant="outlined">
          Add friend
        </Button>
      );
  }

  if (person.isFriend)
    return (
      <Button onClick={() => deleteFriend(person.id)} variant="outlined">
        Delete friend
      </Button>
    );
}
