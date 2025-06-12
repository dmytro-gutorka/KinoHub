import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import MoviePreviewCard from '../../../features/movies/components/MoviesPreview';

import 'swiper/css';
import './styles.css';
import { Paper } from '@mui/material';

const MovieSlider = ({ movieData }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
      >
        {movieData.map((movie) => (
          <SwiperSlide>
            <MoviePreviewCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MovieSlider;
