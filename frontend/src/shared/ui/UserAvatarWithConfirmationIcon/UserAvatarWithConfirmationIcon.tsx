import { Avatar, SvgIcon, Typography } from '@mui/material';
import stringToColor from '@shared/helpers/stringToColor';
import CheckOutlinedIcon from '@shared/icons/CheckOutlinedIcon';

interface UserAvatarWithConfirmationIconProps {
  fullName: string;
  isEmailConfirmed: boolean;
  fulNameInitials: string;
  marginTop?: number;
  size?: number;
}

export default function UserAvatarWithConfirmationIcon({
  fullName,
  fulNameInitials,
  isEmailConfirmed,
  marginTop = 2,
  size = 55,
}: UserAvatarWithConfirmationIconProps) {
  return (
    <Avatar
      sx={{
        marginTop: marginTop,
        width: size,
        height: size,
        bgcolor: stringToColor(fullName),
        position: 'relative',
        overflow: 'visible',
        outline: '2px solid white',
      }}
    >
      <Typography color="white">{fulNameInitials.toUpperCase()}</Typography>
      {isEmailConfirmed && (
        <SvgIcon sx={{ position: 'absolute', bottom: -6, right: -6 }} fontSize="medium">
          <CheckOutlinedIcon />
        </SvgIcon>
      )}
    </Avatar>
  );
}
