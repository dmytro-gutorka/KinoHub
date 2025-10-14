import { Avatar, SvgIcon, Typography } from '@mui/material';
import stringToColor from '@shared/helpers/stringToColor';
import CheckOutlinedIcon from '@shared/icons/CheckOutlinedIcon';

interface UserAvatarWithConfirmationIconProps {
  fullName: string;
  isEmailConfirmed: boolean;
  fulNameInitials: string;
}

export default function UserAvatarWithConfirmationIcon({
  fullName,
  fulNameInitials,
  isEmailConfirmed,
}: UserAvatarWithConfirmationIconProps) {
  return (
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
      {isEmailConfirmed && (
        <SvgIcon sx={{ position: 'absolute', bottom: -6, right: -6 }} fontSize="small">
          <CheckOutlinedIcon />
        </SvgIcon>
      )}
    </Avatar>
  );
}
