import { TmdbCast } from '@entities/types/tmdbEntities';
import { Stack, Typography } from '@mui/material';
import MediaPersonCard from '@features/media/ui/MediaPersonCard';
import { SwiperSlide } from 'swiper/react';
import BaseSwiper from '@shared/ui/BaseSwiper';

interface MediaCastProps {
  cast: Array<TmdbCast>;
}

export default function MediaCast({ cast }: MediaCastProps) {
  const cardWidth = 180;
  const imageHeight = 275;

  return (
    <Stack>
      <Typography variant="h5">Cast</Typography>

      <BaseSwiper>
        <>
          {cast.map((castMember: TmdbCast) => (
            <SwiperSlide style={{ display: 'flex', maxWidth: cardWidth }}>
              <MediaPersonCard person={castMember} width={cardWidth} height={imageHeight} />
            </SwiperSlide>
          ))}
        </>
      </BaseSwiper>
    </Stack>
  );
}
