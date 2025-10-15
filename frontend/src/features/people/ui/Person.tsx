import { UserListItemDTO } from '@kinohub/schemas';
import { Stack, Typography } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import RenderPeopleButtonsConditionally from '@features/people/ui/RenderPeopleButtonsConditionally';
import UserAvatarWithConfirmationIcon from '@shared/ui/UserAvatarWithConfirmationIcon';
import fullNameToInitials from '@shared/helpers/fullNameToInitials';
import BlockWrapper from '@shared/ui/BlockWrapper';

interface PersonProps {
  person: UserListItemDTO;
}

export default function Person({ person }: PersonProps) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const fulNameInitials = fullNameToInitials(`${person.firstName} ${person.lastName}`);

  return (
    <Stack flexGrow={1}>
      <BlockWrapper isBoxShadow={false} padding={5}>
        <Stack direction="row" alignItems="start" gap={5} p={2}>
          <UserAvatarWithConfirmationIcon
            fullName={fullName}
            fulNameInitials={fulNameInitials}
            isEmailConfirmed={person.isEmailConfirmed}
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
              <Typography mb={2}>@{person.username}</Typography>
              <Stack direction="row" gap={2} flexWrap="wrap">
                <Typography display="flex" alignItems="center" gap={1}>
                  <PeopleAltOutlinedIcon fontSize="small" />
                  {person.mutualFriendsCount} mutual
                </Typography>

                <Typography display="flex" alignItems="center" gap={1}>
                  <SlideshowOutlinedIcon fontSize="small" />
                  {person.watchedMediaCount} watched
                </Typography>
                <Typography display="flex" alignItems="center" gap={1}>
                  <AccessTimeOutlinedIcon fontSize="small" />2 days ago
                </Typography>
              </Stack>
            </Stack>

            <RenderPeopleButtonsConditionally person={person} />
          </Stack>
        </Stack>
      </BlockWrapper>
    </Stack>
  );
}
