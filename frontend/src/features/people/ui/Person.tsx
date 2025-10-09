import { UserListItemDTO } from '@kinohub/schemas';
import { Avatar, Stack, SvgIcon, Typography } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';
import CheckOutlinedIcon from '@shared/icons/CheckOutlinedIcon';
import fullNameToInitials from '@shared/helpers/fullNameToInitials';
import stringToColor from '@shared/helpers/stringToColor';

interface PersonProps {
  person: UserListItemDTO;
}

export default function Person({ person }: PersonProps) {
  const fullName = `${person.firstName} ${person.lastName}`;
  const fulNameInitials = fullNameToInitials(`${person.firstName} ${person.lastName}`);

  return (
    <BlockWrapper isBoxShadow={false}>
      <Stack direction="row" alignItems="center" gap={5} p={2}>
        <Avatar
          sx={{
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
        <Stack direction="column">
          <Typography variant="body2" fontWeight={600}>
            {fullName}
          </Typography>
          <Typography>@{person.username}</Typography>
        </Stack>
      </Stack>
    </BlockWrapper>
  );
}
