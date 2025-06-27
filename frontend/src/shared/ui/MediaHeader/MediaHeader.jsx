import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useActionDataCreation from '../../hooks/useActionDataCreation';
import BackgroundBanner from '../BackgroundBanner';
import getYearFromDate from '../../helpers/getYearFromDate';
import useMediaAction from '../../hooks/useMediaAction';
import GenreChipList from '../GenreChipList';
import getPosterURL from '../../helpers/getPosterURL';
import ButtonList from '../ButtonList';
import LabelList from '../LabelList';

const MediaHeader = ({ mediaData, mediaType }) => {
  const {
    id,
    name,
    title,
    genres,
    runtime,
    poster_path: posterPath,
    first_air_date: airDate,
    vote_average: voteAverage,
    release_date: releaseDate,
    original_language: language,
    episode_run_time: runtimeEpisode,
    number_of_seasons: numberOfSeasons,
    number_of_episodes: numberOfEpisodes,
  } = mediaData;

  const theme = useTheme();
  const actionMutation = useMediaAction('mediaActionData', id);

  const relevantRuntime = runtime || runtimeEpisode?.at(0) || 0;
  const relevantReleaseDate = airDate || releaseDate;
  const relevantTitle = name || title;

  const imgURL = getPosterURL(posterPath);

  const { data: mediaActionData, isLoading } = useActionDataCreation(
    'mediaActionData',
    id,
    {
      mediaType,
      runtime: relevantRuntime,
    }
  );

  if (isLoading) return <div>Loading...</div>;

  const { isWatched, isLiked, watchStatus } = mediaActionData ?? {};

  const extraMediaData = {
    releaseDate: relevantReleaseDate,
    title: relevantTitle,
    posterPath,
    voteAverage,
  };

  const handleLike = () =>
    actionMutation.mutate({ isLiked: !isLiked, ...extraMediaData });
  const handleIsWatched = () =>
    actionMutation.mutate({ isWatched: !isWatched, ...extraMediaData });
  const handleWatchStatus = () =>
    actionMutation.mutate({
      watchStatus: watchStatus ? null : 'toWatch',
      ...extraMediaData,
    });

  const movieLabels = [
    { icon: <StarBorderIcon />, data: voteAverage?.toFixed(2) + '/10' },
    {
      icon: <CalendarTodayOutlinedIcon fontSize="small" />,
      data: getYearFromDate(relevantReleaseDate),
    },
    {
      icon: <AccessTimeIcon />,
      data: relevantRuntime ? relevantRuntime + 'm' : 'N/A',
    },
    { icon: <LanguageIcon />, data: language.toUpperCase() },
  ];

  const tvLabels = [
    { icon: <StarBorderIcon />, data: voteAverage?.toFixed(2) + '/10' },
    { icon: <LiveTvOutlinedIcon fontSize="small" />, data: numberOfSeasons },
    {
      icon: <PlayCircleOutlineOutlinedIcon fontSize="small" />,
      data: numberOfEpisodes,
    },
    { icon: <AccessTimeIcon />, data: `~${relevantRuntime}m per episode` },
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
      onClick: () => handleLike(),
    },
    {
      icon: watchStatus ? <BookmarkAddedIcon /> : <BookmarkAddOutlinedIcon />,
      data: 'Add to MovieBoard',
      onClick: () => handleWatchStatus(),
    },
  ];

  return (
    <Stack position="relative">
      <BackgroundBanner imgURL={imgURL} />
      <Container maxWidth="lg">
        <Stack direction="row" pt={14} pb={6} gap={4} alignItems="end">
          <Box
            component="img"
            src={imgURL}
            width="256px"
            height="384px"
            sx={{
              outline: `${theme.palette.transparentGrey} solid 2px`,
              borderRadius: '10px',
            }}
          />

          <Box>
            <Typography
              variant="h2"
              component="h1"
              fontWeight="700"
              mb={10}
              lineHeight={1.2}
            >
              {relevantTitle}
            </Typography>

            <Stack gap={2}>
              {mediaType === 'movie' && <LabelList items={movieLabels} />}
              {mediaType === 'tv' && <LabelList items={tvLabels} />}

              <GenreChipList genres={genres} />
            </Stack>

            <Stack direction="row" spacing={4} mt={8}>
              <ButtonList items={buttons} />
              <Button onClick={handleIsWatched}>
                {isWatched ? <VisibilityIcon /> : <VisibilityOffOutlinedIcon />}
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Stack>
  );
};

export default MediaHeader;
