import { UserMediaStats } from '@shared/types/generalTypes';
import { Chip, Stack, useTheme } from '@mui/material';

interface ProfileFavoriteGenresProps {
  userMediaStats: UserMediaStats;
}

type BgColors =
  | 'gradientGrey'
  | 'gradientBlue'
  | 'gradientGreen'
  | 'gradientOrange'
  | 'gradientRed';

const bgColors: BgColors[] = [
  'gradientGrey',
  'gradientBlue',
  'gradientGreen',
  'gradientOrange',
  'gradientRed',
];

export default function ProfileFavoriteGenres({ userMediaStats }: ProfileFavoriteGenresProps) {
  const theme = useTheme();
  const { favoriteGenres } = userMediaStats;

  return (
    <Stack display="inline-flex" direction="row" gap={0.5}>
      {favoriteGenres.map(({ name }, index) => {
        const bgColor = bgColors[index];
        return (
          <Chip
            label={name}
            size="small"
            slotProps={{ label: { sx: { fontWeight: 600 } } }}
            sx={{ background: theme.palette[bgColor], fontWeigh: 900 }}
          />
        );
      })}
    </Stack>
  );
}
