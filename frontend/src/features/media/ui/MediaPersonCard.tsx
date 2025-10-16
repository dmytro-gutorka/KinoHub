import { TmdbCast, TmdbCrew } from '@entities/types/tmdbEntities';
import { CardContent, CardMedia, Typography } from '@mui/material';
import getPosterUrl from '@shared/helpers/getPosterUrl';
import HoverableCardWrapper from '@shared/ui/HoverableCardWrapper';

interface MediaPersonCardProps {
  person: TmdbCast | TmdbCrew;
  width?: number | string;
  height?: number | string;
  personType: 'Crew' | 'Cast';
}

export default function MediaPersonCard({
  person,
  personType,
  width,
  height,
}: MediaPersonCardProps) {
  let personData;
  let imgUrl;

  if (personType === 'Cast') {
    const { character, name, profile_path: imagePath } = person as TmdbCast;
    imgUrl = getPosterUrl(imagePath);

    personData = (
      <>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {character}
        </Typography>
      </>
    );
  }

  if (personType === 'Crew') {
    const { job, name, profile_path: imagePath } = person as TmdbCrew;
    imgUrl = getPosterUrl(imagePath);

    personData = (
      <>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {job}
        </Typography>
      </>
    );
  }

  return (
    <HoverableCardWrapper cardWidth={width} flexGrow={1}>
      {/*<img loading="lazy" src={imgUrl} alt="" height={height} />*/}
      <CardMedia
        component="img"
        image={imgUrl}
        title="Card"
        loading="lazy"
        sx={{ height: height, backgroundSize: 'cover' }}
      />
      <CardContent>{personData}</CardContent>
    </HoverableCardWrapper>
  );
}
