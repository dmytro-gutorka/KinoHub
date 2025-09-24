import { UserMediaStats } from '@shared/types/generalTypes';
import { Chip, Stack, useTheme } from '@mui/material';
import BlockWrapper from '@shared/ui/BlockWrapper';

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
    <BlockWrapper title="Favorite Genres" titleSizeVariant="body2">
      <Stack display="inline-flex" direction="row" gap={0.5}>
        {favoriteGenres.map(({ name }, index) => {
          const bgColor = bgColors[index];
          return (
            <Chip
              key={name}
              label={name}
              size="small"
              slotProps={{ label: { sx: { fontWeight: 600 } } }}
              sx={{ background: theme.palette[bgColor], fontWeigh: 900 }}
            />
          );
        })}
      </Stack>
    </BlockWrapper>
  );
}
