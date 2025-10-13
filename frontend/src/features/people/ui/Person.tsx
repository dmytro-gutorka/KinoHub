import { UserListItemDTO } from '@kinohub/schemas';
import { Avatar, Stack, SvgIcon, Typography } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';
import CheckOutlinedIcon from '@shared/icons/CheckOutlinedIcon';
import fullNameToInitials from '@shared/helpers/fullNameToInitials';
import stringToColor from '@shared/helpers/stringToColor';
import RenderPeopleButtonsConditionally from '@features/people/ui/RenderPeopleButtonsConditionally';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

interface PersonProps {
  person: UserListItemDTO;
}

export default function Person({ person }: PersonProps) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const fulNameInitials = fullNameToInitials(`${person.firstName} ${person.lastName}`);

  return (
    <BlockWrapper isBoxShadow={false} padding={5}>
      <Stack direction="row" alignItems="start" gap={5} p={2}>
        <Avatar
          sx={{
            marginTop: 2,
            width: 55,
            height: 55,
            bgcolor: stringToColor(fullName),
            position: 'relative',
            overflow: 'visible',
            outline: '2px solid white',
          }}
        >
          <Typography color="white">{fulNameInitials.toUpperCase()}</Typography>
          {person.isEmailConfirmed && (
            <SvgIcon sx={{ position: 'absolute', bottom: -6, right: -6 }} fontSize="small">
              <CheckOutlinedIcon />
            </SvgIcon>
          )}
        </Avatar>

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
            <Stack direction="row" gap={2}>
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
  );
}
