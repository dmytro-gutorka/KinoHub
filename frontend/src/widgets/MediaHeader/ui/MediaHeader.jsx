import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { Box, Button, Container, Stack, Typography, useTheme } from '@mui/material';

import getPosterURL from '@shared/helpers/getPosterURL';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import useMediaAction from '@widgets/MediaHeader/hooks/useMediaAction';
import BackgroundBanner from '@shared/ui/BackgroundBanner';
import GenreChipList from '@shared/ui/GenreChipList';
import ButtonList from '@shared/ui/ButtonList';
import LabelList from '@shared/ui/LabeList/LabelList';

const MediaHeader = ({ tmdbMediaData, mediaAction, mediaType }) => {
  const {
    title,
    genres,
    runtime,
    id: mediaId,
    poster_path: posterPath,
    vote_average: voteAverage,
    original_language: language,
    number_of_seasons: numberOfSeasons,
    number_of_episodes: numberOfEpisodes,
  } = tmdbMediaData;

  const { isLiked, isWatched, watchStatus } = mediaAction;
  const { mutate: updateAction } = useMediaAction(String(mediaId), mediaType);

  const theme = useTheme();
  const imgURL = getPosterURL(posterPath);

  const handleMediaAction = (action) => updateAction(action);

  const movieLabels = [
    { icon: <StarBorderIcon />, data: voteAverage?.toFixed(2) + '/10' },
    {
      icon: <CalendarTodayOutlinedIcon fontSize="small" />,
      data: getYearFromDate(runtime),
    },
    {
      icon: <AccessTimeIcon />,
      data: runtime ? runtime + 'm' : 'N/A',
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
    { icon: <AccessTimeIcon />, data: `~${runtime}m per episode` },
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
      <BackgroundBanner imgURL={imgURL} />
      <Container maxWidth="lg">
        <Stack direction="row" pt={14} pb={6} gap={4} alignItems="end">
          <Box
            component="img"
            src={imgURL}
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
};

export default MediaHeader;
