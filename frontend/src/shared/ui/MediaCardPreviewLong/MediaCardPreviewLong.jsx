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

        {genreNames?.length > 0 && (
          <Stack direction="row" flexWrap="wrap" gap={1} mb={2}>
            <GenreChipList genres={genreNames} renderLimit={2} size="small" />
          </Stack>
        )}

        <Stack direction="row" gap={2}>
          <LabelWithIcon data={getYearFromDate(releaseDate || airDate)}>
            <CalendarTodayOutlinedIcon fontSize="small" />
          </LabelWithIcon>
          <LabelWithIcon data={avgRating}>
            <StarBorderIcon fontSize="small" />
          </LabelWithIcon>
        </Stack>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {`${overview.split(' ').slice(0, 15).join(' ')}`} ...
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default MediaCardPreviewLong;
