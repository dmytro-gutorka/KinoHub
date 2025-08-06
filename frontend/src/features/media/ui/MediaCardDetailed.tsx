import { Stack, Typography } from '@mui/material';

import MediaCardHoverableWrapper from '@features/media/ui/MediaCardHoverableWrapper';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import GenreChipList from '@shared/ui/GenreChipList';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import cutText from '@shared/helpers/cutText';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CardContent from '@mui/material/CardContent';
import {
  TmdbGenre,
  TmdbMovieSearchedFilteredList,
  TmdbTvShowSearchedFilteredList,
} from '@entities/types/tmdbEntities';
import { MediaType } from '@shared/types/generalTypes';

interface MediaCardDetailedProps {
  mediaItem: TmdbMovieSearchedFilteredList | TmdbTvShowSearchedFilteredList;
  relevantPoster: string;
  genreNames: Array<TmdbGenre | undefined>;
  mediaType: MediaType;
}

const MediaCardDetailed = ({
  mediaItem,
  relevantPoster,
  genreNames,
  mediaType,
}: MediaCardDetailedProps) => {
  const {
    vote_average: avgRating,
    release_date: releaseDate,
    first_air_date: airDate,
    overview,
    title,
    name,
    id,
  } = mediaItem;

  const navTo = `/${mediaType}/${String(id)}`;

  return (
    <MediaCardHoverableWrapper width={276} height={400} imgURL={relevantPoster} navTo={navTo}>
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
