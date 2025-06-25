import { Box, Button, Chip, Container, IconButton, Stack, Typography, useTheme } from '@mui/material';

import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';
import getYearFromDate from '../../helpers/getYearFromDate';
import useMediaAction from '../../../features/movies/hooks/useMediaAction';
import LabelWithIcon from '../LabelWithIcon';
import getPosterURL from '../../helpers/getPosterURL';
import useActionDataCreation from "../../../features/movies/hooks/useActionDataCreation";

const MediaHeader = ({mediaData, mediaType}) => {

  const {
    id,
    genres,
    title,
    runtime,
    name,
    poster_path: posterPath,
    vote_average: voteAverage,
    original_language: language,
    release_date: releaseDate,
    episode_run_time: runtimeEpisode,
    number_of_episodes: numberOfEpisodes,
    number_of_seasons: numberOfSeasons,
    first_air_date: airDate
  } = mediaData

  const theme = useTheme()

  const actionMutation = useMediaAction("mediaActionData", id)

  const relevantRuntime = runtime || runtimeEpisode?.at(0) || 0
  const relevantReleaseDate = airDate || releaseDate || '0000-00-00'
  const relevantTitle = name || title


  const imgURL = getPosterURL(posterPath);

  const { data: mediaActionData, isLoading } = useActionDataCreation(
    'mediaActionData', id, {mediaType, runtime: relevantRuntime})

  if (isLoading) return <div>Loading...</div>

  const { isWatched, isLiked, watchStatus } = mediaActionData

  const extraMediaData = {
    releaseDate: relevantReleaseDate,
    title: relevantTitle,
    posterPath,
    voteAverage,
  }

  const handleLike = () => actionMutation.mutate({ isLiked: !isLiked, ...extraMediaData })
  const handleIsWatched = () => actionMutation.mutate({ isWatched: !isWatched, ...extraMediaData })
  const handleWatchStatus = () => actionMutation.mutate({ watchStatus: watchStatus ? null : "toWatch", ...extraMediaData })

  return (
    <Stack position='relative'>
      <Box sx={{
        background: `url(${imgURL})`,
        position: 'absolute',
        inset: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: '-10'
      }}>
      </Box>

      <Container maxWidth="lg">
      <Stack direction="row" pt={14} pb={7}>

        <Box
          component="img"
          src={imgURL}
          width="256px"
          height="384x"
          sx={{outline: `${theme.palette.transparentGrey} solid 2px`, borderRadius: '10px',}}/>
        <Box>

          <Typography variant="h2" component="h2">{title}</Typography>

          {mediaType === 'movie' && (
            <Stack direction="row" spacing={4}>
              <LabelWithIcon label={getYearFromDate(releaseDate)}>
                <CalendarTodayOutlinedIcon fontSize="small" />
              </LabelWithIcon>
              <LabelWithIcon label={voteAverage?.toFixed(2)}>
                <StarBorderIcon fontSize="small" />
              </LabelWithIcon>
              <LabelWithIcon label={relevantRuntime + 'm'}>
                <AccessTimeIcon />
              </LabelWithIcon>
              <LabelWithIcon label={language.toUpperCase()}>
                <LanguageIcon />
              </LabelWithIcon>
            </Stack>
          )}

          {mediaType === 'tv' && (
            <Stack direction="row" spacing={4}>
              <LabelWithIcon label={voteAverage?.toFixed(2) + '/10'}>
                <StarBorderIcon fontSize="small" />
              </LabelWithIcon>
              <LabelWithIcon label={numberOfSeasons}>
                <LiveTvOutlinedIcon fontSize="small" />
              </LabelWithIcon>
              <LabelWithIcon label={numberOfEpisodes}>
                <PlayCircleOutlineOutlinedIcon fontSize="small" />
              </LabelWithIcon>
              <LabelWithIcon label={`~${relevantRuntime}m per episode`}>
                <AccessTimeIcon fontSize="small" />
              </LabelWithIcon>
            </Stack>
          )}

          <Stack direction="row">
            {genres.map(({name, id}) => <Chip label={name} key={id}/>)}
          </Stack>

          <Stack direction="row" spacing={4}>
            <Button>
              <LabelWithIcon label="Watch trailer">
                <PlayArrowOutlinedIcon />
              </LabelWithIcon>
            </Button>
            <Button onClick={handleLike}>
              <LabelWithIcon label="Add to Favorites">
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
              </LabelWithIcon>
            </Button>
            <Button onClick={handleWatchStatus}>
              <LabelWithIcon label="Add to MovieBoard">
                {watchStatus ? <BookmarkAddedIcon /> : <BookmarkAddOutlinedIcon />}
              </LabelWithIcon>
            </Button>
            <IconButton onClick={handleIsWatched}>
              {isWatched ? <VisibilityIcon/> : <VisibilityOffOutlinedIcon/>}
            </IconButton>
          </Stack>

        </Box>
      </Stack>
    </Container>

  </Stack>
)
};

export default MediaHeader;