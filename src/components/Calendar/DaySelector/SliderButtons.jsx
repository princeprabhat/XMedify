import LeftNavIcon from "../../../assets/prev-arrow-icon.png";
import RightNavIcon from "../../../assets/next-arrow-icon.png";
import style from "./DaySelector.module.css";
import React from "react";

const SliderButtons = ({ swiper, setActiveSlide, activeSlide }) => {
  return (
    <>
      <div
        className={style.left_btn}
        onClick={() => {
          activeSlide > 0 && setActiveSlide((prev) => prev - 1);
          swiper.slidePrev();
        }}
      >
        <img src={LeftNavIcon} alt="left-arrow" />
      </div>
      <div className={style.right_btn} onClick={() => swiper.slideNext()}>
        <img src={RightNavIcon} alt="right-arrow" />
      </div>
    </>
  );
};

export default SliderButtons;
