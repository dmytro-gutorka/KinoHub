import { TmdbCast, TmdbCrew } from '@entities/types/tmdbEntities';
import { Stack, Typography } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import MediaPersonCard from '@features/media/ui/MediaPersonCard';
import BaseSwiper from '@shared/ui/BaseSwiper';

interface MediaCastProps {
  people: (TmdbCast | TmdbCrew)[];
  personType: 'Crew' | 'Cast';
}

export default function MediaPeopleSlider({ people, personType }: MediaCastProps) {
  const cardWidth = 180;
  const imageHeight = 275;

  const data = personType === 'Crew' ? (people as TmdbCrew[]) : (people as TmdbCast[]);

  return (
    <Stack>
      <Typography variant="h5">{personType}</Typography>

      <BaseSwiper>
        <>
          {data.map((person) => (
            <SwiperSlide style={{ display: 'flex', maxWidth: cardWidth }}>
              <MediaPersonCard
                personType={personType}
                person={person}
                width={cardWidth}
                height={imageHeight}
              />
            </SwiperSlide>
          ))}
        </>
      </BaseSwiper>
    </Stack>
  );
}
