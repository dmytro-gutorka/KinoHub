import { ReactElement } from 'react';
import { Stack } from '@mui/material';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@shared/styles/swiper.css';

interface MediaCastProps {
  children: ReactElement;
}

export default function BaseSwiper({ children }: MediaCastProps) {
  return (
    <Stack direction="row" className="swiper-relative-container">
      <Swiper
        style={{ marginBottom: 30 }}
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        loop={true}
        slidesPerView="auto"
        slidesPerGroup={4}
      >
        {children}
      </Swiper>
    </Stack>
  );
}
