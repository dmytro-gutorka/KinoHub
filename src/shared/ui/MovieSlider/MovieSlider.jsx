import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import MoviePreviewCard from '../../../features/movies/components/MoviesPreview';

import 'swiper/css';
import './styles.css';

const MovieSlider = ({ movieData }) => {
  return (
    <>
      <Swiper
        slidesPerView={2}
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
