import { Button } from '@mui/material';
import { UserListItemDTO } from '@kinohub/schemas';
import useDeleteFriend from '@features/people/hooks/useDeleteFriend';
import useCreateFriendRequest from '@features/people/hooks/useCreateFriendRequest';
import useCancelFriendRequest from '@features/people/hooks/useCancelFriendRequest';
import useRejectFriendRequest from '@features/people/hooks/useRejectFriendRequest';
import useAcceptFriendRequest from '@features/people/hooks/useAcceptFriendRequest';

export default function RenderFriendButtonConditionally({ person }: { person: UserListItemDTO }) {
  const { mutate: deleteFriend } = useDeleteFriend();
  const { mutate: createFriendRequest } = useCreateFriendRequest();
  const { mutate: cancelFriendRequest } = useCancelFriendRequest();
  const { mutate: acceptFriendRequest } = useAcceptFriendRequest();

  if (!person.isFriend) {
    if (person.isPendingIncoming)
      return (
        <Button
          onClick={() => acceptFriendRequest(person.id)}
          variant="outlined"
          sx={{ minHeight: 35, padding: 2, fontSize: 10 }}
        >
          Accept request
        </Button>
      );

    if (person.isPendingOutgoing)
      return (
        <Button
          onClick={() => cancelFriendRequest(person.id)}
          variant="outlined"
          sx={{ minHeight: 35, padding: 2, fontSize: 10 }}
        >
          Cancel request
        </Button>
      );

    if (!person.isPendingOutgoing && !person.isPendingIncoming)
      return (
        <Button
          onClick={() => createFriendRequest(person.id)}
          variant="outlined"
          sx={{ minHeight: 35, padding: 2, fontSize: 10 }}
        >
          Add friend
        </Button>
      );
  }

  if (person.isFriend)
    return (
      <Button
        onClick={() => deleteFriend(person.id)}
        variant="outlined"
        sx={{ minHeight: 35, padding: 2, fontSize: 10 }}
      >
        Delete friend
      </Button>
    );
}
