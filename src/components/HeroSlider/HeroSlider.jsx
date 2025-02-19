import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
const HeroSlider = ({ data, isCustom = false }) => {
  return (
    <Swiper
      centeredSlides={isCustom ? true : false}
      loop={true}
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={3}
      pagination={{ clickable: true }}
      breakpoints={{
        1024: { slidesPerView: isCustom ? 4 : 3 },
        768: { slidesPerView: 2 },
        640: { slidesPerView: 1 },
      }}

      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      {data &&
        data.map((el, idx) => {
          return <SwiperSlide key={idx}>{el}</SwiperSlide>;
        })}
    </Swiper>
  );
};

export default HeroSlider;
