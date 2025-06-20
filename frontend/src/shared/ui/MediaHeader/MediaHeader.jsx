import { Box, Button, Chip, Container, IconButton, Stack, Typography } from '@mui/material';

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
import LanguageIcon from '@mui/icons-material/Language';
import FavoriteIcon from '@mui/icons-material/Favorite';
import getYearFromDate from '../../helpers/getYearFromDate';
import LabelWithIcon from '../LabelWithIcon';
import getPosterURL from '../../helpers/getPosterURL';
import getMediaAction from '../../../features/movies/api/getMediaAction';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const MEDIA_ACTIONS = {
  isWatched: "watch-state",
  isLiked: "like",
  rating: "rating"
}

const MediaHeader = ({mediaData , mediaType, mediaActionData}) => {

  const {
    id,
    genres,
    title,
    runtime,
    poster_path: posterPath,
    vote_average: voteAverage,
    original_language: language,
    release_date: releaseDate,
    episode_run_time: runtimeEpisode,
    number_of_episodes: numberOfEpisodes,
    number_of_seasons: numberOfSeasons,
  } = mediaData

  const {
    isWatched,
    isLiked
  } = mediaActionData

  const queryClient = useQueryClient()

  const likeMutation = useMutation({
    mutationFn: ({id, isLiked}) =>  getMediaAction(id, { isLiked }, MEDIA_ACTIONS.isLiked),
    onMutate: async ({ id, isLiked }) => {
      const queryKey = ['actionData', id]
      await queryClient.cancelQueries(queryKey)
      const prevData = queryClient.getQueryData(queryKey)

      queryClient.setQueryData(queryKey, old => ({ ...old, isLiked }))

      return { prevData }
    },
    onSettled: () =>
      queryClient.invalidateQueries(['actionData', id]),
    onError: (err,_ , context) =>
      queryClient.setQueryData(['actionData', id], context.prevData)
  })

  const imgURL = getPosterURL(posterPath);

  return (
    <Stack position='relative'>

      <Box sx={{
        backgroundImage: `url(${imgURL})`,
        position: 'absolute',
        inset: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(8px)',
        zIndex: '-1'
      }}>
      </Box>

      <Container maxWidth="lg">
      <Stack direction="row" pt={14} pb={7}>

        <Box
          component="img"
          src={imgURL}
          width="256px"
          height="384x"
          sx={{outline: 'lightgrey solid 2px', borderRadius: '10px',}}/>
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
              <LabelWithIcon label={runtime + 'm'}>
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
              <LabelWithIcon label={`~${runtimeEpisode[0]}m per episode`}>
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
            <Button onClick={() => likeMutation.mutate(
              { id, isLiked: !isLiked })}
            >
              <LabelWithIcon label="Add to Favorites">
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
              </LabelWithIcon>
            </Button>
            <Button>
              <LabelWithIcon label="Add to Watchlist">
                {isWatched ? <BookmarkAddedIcon /> : <BookmarkAddOutlinedIcon />}
              </LabelWithIcon>
            </Button>
            <IconButton>
              <VisibilityOffOutlinedIcon/>
            </IconButton>
          </Stack>

        </Box>
      </Stack>
    </Container>

  </Stack>
)
};

export default MediaHeader;