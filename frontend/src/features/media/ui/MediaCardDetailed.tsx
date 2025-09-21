import { MediaType } from '@shared/types/generalTypes';
import {
  TmdbGenre,
  TmdbMovieSearchedFilteredList,
  TmdbTvShowSearchedFilteredList,
} from '@entities/types/tmdbEntities';
import { CardMedia, Stack, Typography } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CardContent from '@mui/material/CardContent';
import HoverableCardWrapper from '@shared/ui/HoverableCardWrapper';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import GenreChipList from '@shared/ui/GenreChipList';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import cutText from '@shared/helpers/cutText';

interface MediaCardDetailedProps {
  mediaItem: TmdbMovieSearchedFilteredList | TmdbTvShowSearchedFilteredList;
  imgUrl: string;
  genreList: Array<TmdbGenre | undefined>;
  mediaType: MediaType;
}

const MediaCardDetailed = ({ mediaItem, imgUrl, genreList, mediaType }: MediaCardDetailedProps) => {
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
  const cardWidth = 275;
  const imgHeight = 400;

  return (
    <HoverableCardWrapper cardWidth={cardWidth} navTo={navTo}>
      <CardMedia image={imgUrl} title="Card" sx={{ height: imgHeight, backgroundSize: 'cover' }} />

      <CardContent>
        <Typography variant="h5" children={title || name} />
        <GenreChipList genres={genreList} renderLimit={2} size="small" />

        <Stack direction="row" gap={2} mt={2}>
          <LabelWithIcon label={getYearFromDate(releaseDate || airDate)}>
            <CalendarTodayOutlinedIcon fontSize="small" />
          </LabelWithIcon>
          <LabelWithIcon label={avgRating}>
            <StarBorderIcon fontSize="medium" />
          </LabelWithIcon>
        </Stack>

        <Typography variant="body1" children={cutText(overview, 15)} />
      </CardContent>
    </HoverableCardWrapper>
  );
};

export default MediaCardDetailed;
