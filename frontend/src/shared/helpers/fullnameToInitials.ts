import stringToColor from '@shared/helpers/stringToColor';

export default function fullnameToInitials(fullname: string) {
  return {
    sx: {
      bgcolor: stringToColor(fullname),
    },
    children: `${fullname.split(' ')[0][0]}${fullname.split(' ')[1][0]}`,
  };
}
