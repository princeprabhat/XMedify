import React from "react";
import style from "./Home.module.css";
import HeroImg from "../assets/hero_image.png";
import Button from "../components/Button/Button";

const Home = () => {
  return (
    <div className={style.hero_container}>
      <div className={style.left_hero}>
        <div className={style.para_heading}>Skip the travel! Find Online </div>
        <div>
          <span className={style.spanStyle}>Medical </span>{" "}
          <span
            className={style.spanStyle}
            style={{ color: "rgba(42, 167, 255, 1)" }}
          >
            Centers
          </span>
        </div>

        <p className={style.para_hero}>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.{" "}
        </p>
        <Button>Find Centers</Button>
      </div>
      <div className={style.right_hero}>
        <img src={HeroImg} alt="hero-image" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
};

export default Home;
