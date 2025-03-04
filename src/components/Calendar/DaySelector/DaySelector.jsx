import React, { useEffect, useState } from "react";
import style from "./DaySelector.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Calendar } from "../Calendar";
import SliderButtons from "./SliderButtons";
const Dates = Calendar();

const DaySelector = ({ setSelectedDate }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleDateChange = () => {
    setSelectedDate(Dates[activeSlide]);
  };

  useEffect(() => {
    handleDateChange();
  }, [activeSlide]);

  console.log(activeSlide);
  return (
    <div className={style.day_card_container}>
      <SliderButtons
        swiper={swiper}
        // setActiveSlide={setActiveSlide}
        // activeSlide={activeSlide}
      />
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
        onSwiper={setSwiper}
        onSlideChange={() => {
          setActiveSlide(swiper.activeIndex);
          handleDateChange();
        }}
      >
        {Dates &&
          Dates.map((el, idx) => {
            return (
              <SwiperSlide key={idx}>
                <div
                  onClick={() => {
                    setActiveSlide(idx);
                    handleDateChange();
                  }}
                  className={style.day_card_box}
                  style={
                    activeSlide == idx
                      ? {
                          borderBottom: "2px solid green",
                          paddingBottom: "0.5rem",
                        }
                      : {}
                  }
                >
                  {idx == 0 ? (
                    <p>Today</p>
                  ) : (
                    <span>{idx == 1 ? "Tomorrow" : el}</span>
                  )}
                  {/* <p>{idx == 0 ? "Today" : idx == 1 ? "Tomorrow" : el}</p> */}
                  <div>{Math.round(Math.random() * 100)} Slots Available </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default DaySelector;
