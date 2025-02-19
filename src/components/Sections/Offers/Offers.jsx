import React from "react";
import Banner1 from "../../../assets/offer-banner-1.png";
import Banner2 from "../../../assets/offer-banner-2.png";
import Banner3 from "../../../assets/offer-banner-3.png";
import HeroSlider from "../../HeroSlider/HeroSlider";
import style from "./Offers.module.css";

const imgData = [
  <img
    src={Banner1}
    alt="banner-img"
    style={{ marginBottom: "4rem", width: "100%" }}
  />,
  <img
    src={Banner2}
    alt="banner-img"
    style={{ marginBottom: "4rem", width: "100%" }}
  />,
  <img
    src={Banner3}
    alt="banner-img"
    style={{ marginBottom: "4rem", width: "100%" }}
  />,
  <img
    src={Banner1}
    alt="banner-img"
    style={{ marginBottom: "4rem", width: "100%" }}
  />,
  <img
    src={Banner2}
    alt="banner-img"
    style={{ marginBottom: "4rem", width: "100%" }}
  />,
];

const Offers = () => {
  return (
    <div className={style.offers_container}>
      <HeroSlider data={imgData} />
    </div>
  );
};

export default Offers;
