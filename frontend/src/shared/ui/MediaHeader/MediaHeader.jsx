import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import LabelWithIcon from '../LabelWithIcon';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import { BASE_POSTER_URL } from '../../../config/constants';


const MediaHeader = ({mediaData}) => {
  const { genres, title,  poster_path: posterPath,  vote_average: voteAverage, original_language: language, runtime} = mediaData

  const imgURL = `${BASE_POSTER_URL}${posterPath}`;

  return (
    <Stack  sx={{
      backgroundImage: `url(${imgURL})`,
      backgroundSize: 'cover',
      backgroundRepeat: "no-repeat",
      backgroundPosition: 'center',
      top: '0px',
      left: '0px',
      width: '100%',
    }}>

      <Container maxWidth="lg">
      <Stack direction="row">
        <Box
          component="img"
          src={"/../../../test.webp"}
          width="256px"
          height="384x"
          sx={{outline: 'lightgrey solid 2px', borderRadius: '10px'}}/>

        <Box>
          <Typography variant="h2" component="h2">{title}</Typography>

          <Stack direction="row" spacing={4}>
            <LabelWithIcon label="2025">
              <CalendarTodayOutlinedIcon fontSize="small" />
            </LabelWithIcon>

            <LabelWithIcon label={voteAverage.toFixed(2)}>
              <StarBorderIcon fontSize="small" />
            </LabelWithIcon>

            <LabelWithIcon label={runtime + 'm'}>
              <AccessTimeIcon />
            </LabelWithIcon>

            <LabelWithIcon label={language.toUpperCase()}>
              <LanguageIcon />
            </LabelWithIcon>
          </Stack>

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