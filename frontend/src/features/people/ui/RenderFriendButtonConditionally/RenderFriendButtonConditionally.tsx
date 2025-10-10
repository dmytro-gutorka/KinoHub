import { Button } from '@mui/material';
import { UserListItemDTO } from '@kinohub/schemas';
import useDeleteFriend from '@features/people/hooks/useDeleteFriend';

export default function RenderFriendButtonConditionally({ person }: { person: UserListItemDTO }) {
  const { mutate: deleteFriend } = useDeleteFriend();

  if (!person.isFriend) {
    if (person.isPendingIncoming)
      return (
        <Button variant="outlined" sx={{ minHeight: 35, padding: 2, fontSize: 10 }}>
          Accept request
        </Button>
      );

    if (person.isPendingOutgoing)
      return (
        <Button variant="outlined" sx={{ minHeight: 35, padding: 2, fontSize: 10 }}>
          Cancel request
        </Button>
      );

    if (!person.isPendingOutgoing && !person.isPendingIncoming)
      return (
        <Button variant="outlined" sx={{ minHeight: 35, padding: 2, fontSize: 10 }}>
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
