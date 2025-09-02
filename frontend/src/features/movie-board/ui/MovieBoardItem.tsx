import { MediaInfoEntity } from '@entities/types/kinohubEntities';
import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { useDraggable } from '@dnd-kit/core';

import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelWithIcon from '@shared/ui/LabelWithIcon';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import getYearFromDate from '@shared/helpers/getYearFromDate';
import theme from '@app/theme/theme';

const MovieBoardItem = ({ mediaInfo }: { mediaInfo: MediaInfoEntity }) => {
  const { mediaId, title, runtime, posterPath, voteAverage, releaseDate, mediaType } = mediaInfo;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: mediaId,
    data: { mediaType },
  });

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
          image={getPosterUrl(posterPath)}
          component="img"
          alt="Movie cover"
          sx={{ width: '60px', height: '90px', borderRadius: theme.spacing(1.5) }}
        />
        <CardContent>
          <Typography component="div" variant="subtitle1" fontWeight="800">
            {title}
          </Typography>
          <Stack direction="row">
            <LabelWithIcon label={getYearFromDate(releaseDate)}>
              <CalendarTodayOutlinedIcon />
            </LabelWithIcon>
            <LabelWithIcon label={voteAverage}>
              <StarBorderIcon />
            </LabelWithIcon>
          </Stack>
        </CardContent>
      </Stack>
    </Card>
  );
};

export default MovieBoardItem;
