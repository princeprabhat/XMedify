import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
const HeroSlider = ({ data, slidesCount }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      slidesPerView={slidesCount == "auto" ? "auto" : 3}
      pagination={{ clickable: true }}
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
