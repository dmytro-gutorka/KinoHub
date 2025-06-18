import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import LabelWithIcon from '../LabelWithIcon';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LanguageIcon from '@mui/icons-material/Language';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';


const MediaHeader = () => {
  return (
    <Stack  sx={{
      backgroundImage: 'url(/../../../test.webp)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: "no-repeat",
      position: "fixed",
      top: '0px',
      left: '0px',
      width: '100%',
      height: '50vh',
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
          <Typography variant="h2" component="h2">The Godfather</Typography>

          <Stack direction="row" spacing={4}>
            <LabelWithIcon label="2025">
              <CalendarTodayOutlinedIcon fontSize="small" />
            </LabelWithIcon>

            <LabelWithIcon label="7.5">
              <StarBorderIcon fontSize="small" />
            </LabelWithIcon>

            <LabelWithIcon label="152m">
              <AccessTimeIcon />
            </LabelWithIcon>

            <LabelWithIcon label="English">
              <LanguageIcon />
            </LabelWithIcon>
          </Stack>

          <Stack direction="row">
            <Chip label="Crime"/>
            <Chip label="Thriller"/>
            <Chip label="Action"/>
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