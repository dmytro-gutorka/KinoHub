import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import { BASE_POSTER_URL } from '../../../config/constants';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

import getYearFromDate from '../../helpers/getYearFromDate';
import LabelWithIcon from '../LabelWithIcon';


const MediaHeader = ({mediaData , mediaType}) => {
  const {
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

  console.log(mediaData)
  const imgURL = `${BASE_POSTER_URL}${posterPath}`;

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
      }}></Box>

      <Container maxWidth="lg">

      <Stack direction="row" pt={14} pb={7}>
        <Box
          component="img"
          src={imgURL}
          width="256px"
          height="384x"
          sx={{outline: 'lightgrey solid 2px', borderRadius: '10px',}}/>

        <Box >
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
            <Button>
              <LabelWithIcon label="Add to Favorites">
                <FavoriteBorderOutlinedIcon />
              </LabelWithIcon>
            </Button>
            <Button>
              <LabelWithIcon label="Add to Watchlist">
                <BookmarkAddOutlinedIcon />
              </LabelWithIcon>
            </Button>
          </Stack>

        </Box>
      </Stack>
    </Container>

  </Stack>
)
};

export default MediaHeader;