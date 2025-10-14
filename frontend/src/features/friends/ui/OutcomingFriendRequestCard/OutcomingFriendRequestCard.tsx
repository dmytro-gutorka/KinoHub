import { UserListItemDTO } from '@kinohub/schemas';
import { Button, Stack, Typography } from '@mui/material';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import BlockWrapper from '@shared/ui/BlockWrapper';
import UserAvatarWithConfirmationIcon from '@shared/ui/UserAvatarWithConfirmationIcon';
import fullNameToInitials from '@shared/helpers/fullNameToInitials';
import useAcceptFriendRequest from '@shared/hooks/useAcceptFriendRequest';
import useCancelFriendRequest from '@shared/hooks/useCancelFriendRequest';

interface OutcomingFriendRequestCardProps {
  friendRequest: UserListItemDTO;
}

export default function OutcomingFriendRequestCard({
  friendRequest,
}: OutcomingFriendRequestCardProps) {
  const fullName = `${friendRequest.firstName} ${friendRequest.lastName}`;
  const fulNameInitials = fullNameToInitials(
    `${friendRequest.firstName} ${friendRequest.lastName}`
  );

  const { mutate: acceptFriendRequest } = useCancelFriendRequest();

  return (
    <BlockWrapper isBoxShadow={false} padding={5}>
      <Stack direction="row" alignItems="start" gap={5} p={2}>
        <UserAvatarWithConfirmationIcon
          fullName={fullName}
          fulNameInitials={fulNameInitials}
          isEmailConfirmed={friendRequest.isEmailConfirmed}
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
            <Typography mb={2}>@{friendRequest.username}</Typography>
            <Stack direction="row" gap={2}>
              <Typography display="flex" alignItems="center" gap={1}>
                <PeopleAltOutlinedIcon fontSize="small" />
                {friendRequest.mutualFriendsCount} mutual
              </Typography>
            </Stack>
          </Stack>
          <Button
            variant="outlined"
            onClick={() => acceptFriendRequest(friendRequest.friendRequestId!)}
          >
            Cancel Request
          </Button>
        </Stack>
      </Stack>
    </BlockWrapper>
  );
}
