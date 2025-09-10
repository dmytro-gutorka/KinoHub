import { TmdbCast } from '@entities/types/tmdbEntities';
import { Stack } from '@mui/material';
import { Navigation, Pagination } from 'swiper/modules';
import MediaPersonCard from '@features/media/ui/MediaPersonCard';
import BlockWrapper from '@shared/ui/BlockWrapper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface MediaCastProps {
  cast: Array<TmdbCast>;
}

export default function MediaCast({ cast }: MediaCastProps) {
  return (
    <BlockWrapper blockTitle="Cast & Crew" isBoxShadow={false}>
      <Stack direction="row" gap={2}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={5}
          slidesPerView={5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cast.map((castMember: TmdbCast) => (
            <SwiperSlide style={{ maxWidth: 180 }}>
              <MediaPersonCard person={castMember} width={180} height={275} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/*  {cast.map((castMember: TmdbCast) => (*/}
        {/*    <MediaPersonCard person={castMember} width={180} height={275} />*/}
        {/*  ))}*/}
      </Stack>
    </BlockWrapper>
  );
}
