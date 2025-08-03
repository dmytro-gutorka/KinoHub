import { MediaType, MediaUserActions } from '@shared/types/generalTypes';
import { MediaHeaderProps } from '@features/media/model/types/mediaTypes';
import { TmdbMovieDetails, TmdbTvShowDetails } from '@entities/types/tmdbEntities';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LanguageIcon from '@mui/icons-material/Language';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material';

import getPosterUrl from '@shared/helpers/getPosterUrl';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import useUpdateMediaAction from '@widgets/MediaHeader/hooks/useUpdateMediaAction';
import BackgroundBanner from '@shared/ui/BackgroundBanner';
import GenreChipList from '@shared/ui/GenreChipList';
import ButtonList from '@shared/ui/ButtonList';
import LabelList from '@shared/ui/LabeList/LabelList';

export default function MediaHeader<T extends MediaType>({
  tmdbMediaData,
  mediaAction,
  mediaType,
}: MediaHeaderProps<T>) {
  const {
    genres,
    id: mediaId,
    poster_path: posterPath,
    vote_average: voteAverage,
    original_language: language,
  } = tmdbMediaData;

  const imgUrl = getPosterUrl(posterPath) || '';

  let numberOfSeasons: number = 0;
  let numberOfEpisodes: number = 0;
  let episodeRunTime: number | string = 'N/A';
  let runtime: number | string = 'N/A';
  let releaseDate: string = 'Unknown';
  let title: string = 'Unknown';

  if (mediaType === 'tv') {
    numberOfSeasons = (tmdbMediaData as TmdbTvShowDetails).number_of_seasons;
    numberOfEpisodes = (tmdbMediaData as TmdbTvShowDetails).number_of_episodes;
    episodeRunTime = (tmdbMediaData as TmdbTvShowDetails).episode_run_time[0];
    releaseDate = (tmdbMediaData as TmdbTvShowDetails).first_air_date;
    title = (tmdbMediaData as TmdbTvShowDetails).name;
    runtime = (tmdbMediaData as TmdbTvShowDetails).first_air_date?.[0];
  }

  if (mediaType === 'movie') {
    releaseDate = (tmdbMediaData as TmdbMovieDetails).release_date;
    title = (tmdbMediaData as TmdbMovieDetails).title;
    runtime = (tmdbMediaData as TmdbMovieDetails).runtime || 'N/A';
  }

  const theme = useTheme();

  const { isLiked, isWatched, watchStatus } = mediaAction;
  const { mutate: updateAction } = useUpdateMediaAction(mediaId, mediaType);

  const handleMediaAction = (action: Partial<MediaUserActions>) => updateAction(action);

  const movieLabels = [
    {
      icon: <StarBorderIcon />,
      data: voteAverage?.toFixed(2) + '/10',
    },
    {
      icon: <CalendarTodayOutlinedIcon fontSize="small" />,
      data: getYearFromDate(releaseDate),
    },
    {
      icon: <AccessTimeIcon />,
      data: runtime ? runtime + 'm' : 'N/A',
    },
    { icon: <LanguageIcon />, data: language.toUpperCase() },
  ];

  const tvLabels = [
    {
      icon: <StarBorderIcon />,
      data: voteAverage?.toFixed(2) + '/10',
    },
    {
      icon: <LiveTvOutlinedIcon fontSize="small" />,
      data: numberOfSeasons,
    },
    {
      icon: <PlayCircleOutlineOutlinedIcon fontSize="small" />,
      data: numberOfEpisodes,
    },
    {
      icon: <AccessTimeIcon />,
      data: `~${episodeRunTime}m per episode`,
    },
  ];

  const buttons = [
    {
      icon: <PlayCircleOutlineOutlinedIcon />,
      data: 'Watch trailer',
      onClick: null,
    },
    {
      icon: isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />,
      data: 'Add to Favorites',
      onClick: () => handleMediaAction({ isLiked: !isLiked }),
    },
    {
      icon: watchStatus ? <BookmarkAddedIcon /> : <BookmarkAddOutlinedIcon />,
      data: 'Add to MovieBoard',
      onClick: () => handleMediaAction({ watchStatus: watchStatus ? null : 'toWatch' }),
    },
  ];

  return (
    <Stack position="relative">
      <BackgroundBanner imgURL={imgUrl} />
      <Container maxWidth="lg">
        <Stack direction="row" pt={14} pb={6} gap={4} alignItems="end">
          <Box
            component="img"
            src={imgUrl}
            width="260px"
            height="380px"
            sx={{
              outline: `${theme.palette.transparentGrey} solid 2px`,
              borderRadius: '10px',
            }}
          />

          <Box>
            <Typography variant="h2" component="h1" fontWeight="700" mb={10} lineHeight={1.2}>
              {title}
            </Typography>

            <Stack gap={2}>
              {mediaType === 'movie' && <LabelList items={movieLabels} />}
              {mediaType === 'tv' && <LabelList items={tvLabels} />}

              <GenreChipList genres={genres} />
            </Stack>

            <Stack direction="row" spacing={4} mt={8}>
              <ButtonList items={buttons} />
              <Button onClick={() => handleMediaAction({ isWatched: !isWatched })}>
                {isWatched ? <VisibilityIcon /> : <VisibilityOffOutlinedIcon />}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
}
