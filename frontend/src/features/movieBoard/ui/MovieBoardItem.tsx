import { Card, CardContent, CardMedia, Stack, Typography, useTheme } from '@mui/material';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import { useDraggable } from '@dnd-kit/core';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import getPosterURL from '@shared/helpers/getPosterURL';
import getYearFromDate from '@shared/helpers/getYearFromDate';

const MovieBoardItem = ({ mediaData }) => {
  const { mediaId, title, runtime, posterPath, voteAverage, releaseDate, mediaType } = mediaData;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: mediaId,
    data: { mediaType },
  });

  const imgURL = getPosterURL(posterPath);
  const theme = useTheme();

  return (
    <Card
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      sx={{
        width: '270px',
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : 'none',
        cursor: 'grab',
        userSelect: 'none',
        display: 'flex',
        padding: theme.spacing(2.5),
        background: 'transparent',
        border: theme.customStyles.border,
      }}
    >
      <Stack direction="row" gap={2}>
        <CardMedia
          image={imgURL}
          component="img"
          alt="Movie cover"
          sx={{ width: '60px', height: '90px', borderRadius: theme.spacing(1.5) }}
        />
        <CardContent>
          <Typography component="div" variant="subtitle1" fontWeight="800">
            {title}
          </Typography>
          <Stack direction="row">
            <LabelWithIcon data={getYearFromDate(releaseDate)}>
              <CalendarTodayOutlinedIcon />
            </LabelWithIcon>
            <LabelWithIcon data={voteAverage}>
              <StarBorderIcon />
            </LabelWithIcon>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default MovieBoardItem;
