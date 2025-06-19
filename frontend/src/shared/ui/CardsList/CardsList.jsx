import { BASE_POSTER_URL } from '../../../config/constants';
import { Box, Chip, Stack } from '@mui/material';
import { NavLink } from 'react-router';

import getYearFromDate from '../../helpers/getYearFromDate';
import LabelWithIcon from '../LabelWithIcon';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const CardsList = ({ mediaData, mediaGenres, mediaType }) => {
  return (
    <Stack direction="row" flexWrap="wrap" gap={10} justifyContent="center">
      {mediaData.map((movie) => {
        const {
          release_date: releaseDate,
          poster_path: posterPath,
          vote_average: avgRating,
          genre_ids: genres,
          overview,
          title,
          adult,
          id,
        } = movie;
        const imgURL = `${BASE_POSTER_URL}${posterPath}`;

        return (
          <Card
            key={id}
            sx={{
              position: 'relative',
              width: 276,
              border: '1px solid grey',
              transition: '0.3s',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          >
            <Box component={NavLink} to={`${id}`}>
            <CardMedia
              sx={{
                height: 400,
                backgroundSize: 'cover',
                filter: adult ? 'blur(16px)' : '',
              }}
              image={imgURL}
              title="Movie card"
            />
            </Box>
            {adult && (
              <Typography
                textAlign="center"
                gutterBottom
                variant="h6"
                component="div"
                position="absolute"
                top="50%"
                left="50%"
                sx={{ transform: 'translate(-50%, -50%)' }}
                color="lightgrey"
              >
                Content 18+ <br />
                Verify your age
              </Typography>
            )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Stack direction="row" spacing={1}>
                {genres.map((genreId, index) => {
                  const genreName = mediaGenres.find((movie) => movie.id === genreId)?.name;
                  const numberOfGenres = genres.length;
                  const hideFrom = 2;

                  if (index <= 1) return <Chip key={genreId} label={genreName} />;
                  if (index === numberOfGenres - 1 && numberOfGenres > hideFrom)
                    return <Chip key={genreId} label={`+${numberOfGenres - hideFrom}`} />;
                })}
              </Stack>

              <Stack direction="row" gap={2}>
                {releaseDate && (
                  <LabelWithIcon label={getYearFromDate(releaseDate)}>
                    <CalendarTodayOutlinedIcon fontSize="small" />
                  </LabelWithIcon>
                )}
                <LabelWithIcon label={avgRating}>
                  <StarBorderIcon fontSize="small" />
                </LabelWithIcon>
                {adult && (
                  <LabelWithIcon label="18+">
                    <ReportGmailerrorredIcon fontSize="small" />
                  </LabelWithIcon>
                )}
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

export default CardsList;
