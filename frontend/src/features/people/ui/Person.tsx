import { UserListItemDTO } from '@kinohub/schemas';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import UserAvatarWithConfirmationIcon from '@shared/ui/UserAvatarWithConfirmationIcon';
import fullNameToInitials from '@shared/helpers/fullNameToInitials';
import cutText from '@shared/helpers/cutText';
import RenderPeopleButtonsConditionally from '@features/people/ui/RenderPeopleButtonsConditionally';

interface PersonProps {
  person: UserListItemDTO;
  arrIndex: number;
}

export default function Person({ person, arrIndex }: PersonProps) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const fulNameInitials = fullNameToInitials(`${person.firstName} ${person.lastName}`);

  const theme = useTheme();
  const plugBio = `${fullName} hasn’t told us anything about themselves yet — but we’re sure they’re a great person!`;
  const randomImage = arrIndex % 2 === 0 ? 1 : 2;
  const cutBio = person.biography ? cutText(person.biography, 170) : plugBio;

  return (
    <Stack flexGrow={1} flexBasis={0.5} maxWidth="700px" border={theme.border} borderRadius="12px">
      <Box
        height={100}
        minWidth={500}
        width="100%"
        sx={{
          backgroundImage: `url("./profile-backgrounds/profile-background-plug-${randomImage}.jpg")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderTopLeftRadius: theme.shape.borderRadiusScale.xl,
          borderTopRightRadius: theme.shape.borderRadiusScale.xl,
        }}
      />
      <Stack direction="row" gap={6} padding={4} bgcolor={theme.palette.accentBgBlack}>
        <UserAvatarWithConfirmationIcon
          fulNameInitials={fulNameInitials}
          isEmailConfirmed={person.isEmailConfirmed}
          marginTop={-12}
          fullName={fullName}
          size={75}
        />
        <Stack direction="column">
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction="row"
            flexWrap="wrap"
            gap={2}
          >
            <Typography variant="body2" fontWeight={900}>
              {fullName}
            </Typography>
            <RenderPeopleButtonsConditionally person={person} />
          </Stack>
          <Typography fontSize={14} color={theme.palette.grey.A400} mb={2}>
            @{person.username}
          </Typography>

          <Typography mb={3}>{cutBio}</Typography>
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
      </Stack>
    </Stack>
  );
}
