import { Box, Chip, Stack, useTheme } from '@mui/material';
import { NavLink } from 'react-router';

import getYearFromDate from '../../helpers/getYearFromDate';
import LabelWithIcon from '../LabelWithIcon';
import getPosterURL from '../../helpers/getPosterURL';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

const MediaCardList = ({ mediaData, mediaGenres }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" flexWrap="wrap" gap={10} justifyContent="center">
      {mediaData.map((movie) => {
        const {
          release_date: releaseDate,
          poster_path: posterPath,
          vote_average: avgRating,
          first_air_date: airDate,
          genre_ids: genres,
          overview,
          title,
          name,
          id,
        } = movie;

        const imgURL = getPosterURL(posterPath);

        return (
          <Card
            key={id}
            sx={(theme) => ({
              background: 'transparent',
              position: 'relative',
              width: 276,
              border: `1px solid ${theme.palette.transparentGrey}`,
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)' },
            })}
          >
            <Box component={NavLink} to={`${id}`}>
              <CardMedia
                sx={{
                  height: 400,
                  backgroundSize: 'cover',
                }}
                image={imgURL}
                title="Movie card"
              />
            </Box>
            <CardContent
              sx={{
                padding: theme.spacing(4),
                '&.MuiCardContent-root': {
                  paddingBottom: theme.spacing(4),
                },
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {title || name}
              </Typography>

              <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
                {genres.map((genreId, index) => {
                  const genreName = mediaGenres.find((movie) => movie.id === genreId)?.name;
                  const numberOfGenres = genres.length;
                  const hideFrom = 2;

                  if (index <= 1) return <Chip key={genreId} label={genreName} size="small" />;
                  if (index === numberOfGenres - 1 && numberOfGenres > hideFrom)
                    return <Chip key={genreId} label={`+${numberOfGenres - hideFrom}`} size="small" />;
                })}
              </Stack>

              <Stack direction="row" gap={2}>
                <LabelWithIcon label={getYearFromDate(releaseDate || airDate)}>
                  <CalendarTodayOutlinedIcon fontSize="small" />
                </LabelWithIcon>
                <LabelWithIcon label={avgRating}>
                  <StarBorderIcon fontSize="small" />
                </LabelWithIcon>
              </Stack>

              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`${overview.split(' ').slice(0, 15).join(' ')}`} ...
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default MediaCardList;
