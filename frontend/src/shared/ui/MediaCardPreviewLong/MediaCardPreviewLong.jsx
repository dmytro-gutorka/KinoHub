import { Box, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router';

import StyledCard from '../StyledCard';
import getYearFromDate from '../../helpers/getYearFromDate';
import GenreChipList from '../GenreChipList';
import LabelWithIcon from '../LabelWithIcon';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import cutText from '@shared/helpers/cutText';

const MediaCardPreviewLong = ({ mediaData, relevantPoster, genreNames }) => {
  const {
    release_date: releaseDate,
    vote_average: avgRating,
    first_air_date: airDate,
    overview,
    title,
    name,
    id,
  } = mediaData;

  return (
    <StyledCard key={id} width={276}>
      <Box component={NavLink} to={`${id}`}>
        <CardMedia
          image={relevantPoster}
          title="Movie card"
          sx={{ height: 400, backgroundSize: 'cover' }}
        />
      </Box>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title || name}
        </Typography>
        <GenreChipList genres={genreNames} renderLimit={2} size="small" />

        <Stack direction="row" gap={2}>
          <LabelWithIcon label={getYearFromDate(releaseDate || airDate)}>
            <CalendarTodayOutlinedIcon fontSize="small" />
          </LabelWithIcon>
          <LabelWithIcon label={avgRating}>
            <StarBorderIcon fontSize="small" />
          </LabelWithIcon>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {cutText(overview, 15)}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default MediaCardPreviewLong;
