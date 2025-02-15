import React from "react";
import style from "./Home.module.css";
import HeroImg from "../assets/hero_image.png";
import Button from "../components/Button/Button";
const Home = () => {
  return (
    <div className={style.hero_container}>
      <div className={style.left_hero}>
        <div>Skip the travel! Find Online</div>
        <h1>
          Medical <span>Centers</span>
        </h1>
        <p>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.{" "}
        </p>
        <Button>Find Centers</Button>
      </div>
      <div className={style.right_hero}>
        <img src={HeroImg} alt="hero-image" />
      </div>
    </div>
  );
};

export default Home;
