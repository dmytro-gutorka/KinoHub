import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import MoviePreviewCard from '../../ui/MediaCardPreviewShort';

import 'swiper/css';
import './styles.css';

const MovieSlider = ({ movieData }: { movieData: any }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={20}
      >
        {movieData.map((movie: any) => (
          <SwiperSlide>{/*<MoviePreviewCard movie={movie} />*/}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MovieSlider;
