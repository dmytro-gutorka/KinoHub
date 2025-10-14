import { UserListItemDTO } from '@kinohub/schemas';
import BlockWrapper from '@shared/ui/BlockWrapper';
import { Button, Stack, Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import fullNameToInitials from '@shared/helpers/fullNameToInitials';
import useDeleteFriend from '@shared/hooks/useDeleteFriend';
import UserAvatarWithConfirmationIcon from '@shared/ui/UserAvatarWithConfirmationIcon/UserAvatarWithConfirmationIcon';

export default function Friend({ friend }: { friend: UserListItemDTO }) {
  const fullName = `${friend.firstName} ${friend.lastName}`;
  const fulNameInitials = fullNameToInitials(`${friend.firstName} ${friend.lastName}`);

  const { mutate: deleteFriend } = useDeleteFriend();

  return (
    <BlockWrapper isBoxShadow={false} padding={5}>
      <Stack direction="row" alignItems="start" gap={5} p={2}>
        <UserAvatarWithConfirmationIcon
          fullName={fullName}
          fulNameInitials={fulNameInitials}
          isEmailConfirmed={friend.isEmailConfirmed}
        />

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexGrow={1}
          gap={2}
        >
          <Stack direction="column">
            <Typography variant="body2" fontWeight={900}>
              {fullName}
            </Typography>
            <Typography mb={2}>@{friend.username}</Typography>
            <Stack direction="row" gap={2}>
              <Typography display="flex" alignItems="center" gap={1}>
                <PeopleAltOutlinedIcon fontSize="small" />
                {friend.mutualFriendsCount} mutual
              </Typography>
              ·
              <Typography display="flex" alignItems="center" gap={1}>
                <SlideshowOutlinedIcon fontSize="small" />
                {friend.watchedMediaCount} watched
              </Typography>
              ·
              <Typography display="flex" alignItems="center" gap={1}>
                <AccessTimeOutlinedIcon fontSize="small" />2 days ago
              </Typography>
            </Stack>
          </Stack>
          <Button variant="outlined" onClick={() => deleteFriend(friend.id)}>
            Delete Friend
          </Button>
        </Stack>
      </Stack>
    </BlockWrapper>
  );
}
