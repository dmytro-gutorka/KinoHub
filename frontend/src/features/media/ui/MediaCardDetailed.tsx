import { Stack, Typography } from '@mui/material';

import MediaCardHoverableWrapper from '@features/media/ui/MediaCardHoverableWrapper';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import GenreChipList from '@shared/ui/GenreChipList';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import cutText from '@shared/helpers/cutText';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CardContent from '@mui/material/CardContent';

const MediaCardDetailed = ({ mediaData, relevantPoster, genreNames }) => {
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
    <MediaCardHoverableWrapper width={276} height={400} imgURL={relevantPoster} navTo={id}>
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
    </MediaCardHoverableWrapper>
  );
};

export default MediaCardDetailed;
