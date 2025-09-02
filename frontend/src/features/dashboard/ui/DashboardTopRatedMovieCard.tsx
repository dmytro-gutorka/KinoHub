import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import theme from '@app/theme/theme';
import StarIcon from '@mui/icons-material/Star';

export default function DashboardTopRatedMovieCard({ movieItem, number }) {
  const { posterPath, rating, releaseDate, title } = movieItem;

  return (
    <Stack direction="row" width={{ sm: '100%', lg: '50%' }} spacing={3} position="relative">
      <Box
        borderRadius={theme.shape.borderRadiusScale.md}
        component="img"
        height={100}
        width={65}
        src={getPosterUrl(posterPath)}
      ></Box>
      <Stack
        top={-12}
        left={-25}
        position="absolute"
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
        width={28}
        height={28}
        sx={{ background: theme.palette.gradientOrange }}
      >
        <Typography fontWeight={900}>{number}</Typography>
      </Stack>
      <Stack>
        <Typography fontWeight={900} variant="h6">
          {title}
        </Typography>
        <Typography>{getYearFromDate(releaseDate)}</Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <StarIcon sx={{ color: theme.palette.starColor }} />
          <Typography lineHeight={1}>{rating}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
