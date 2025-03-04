import React from "react";
import style from "./Home.module.css";
import HeroImg from "../assets/hero_image.png";

import TopBar from "../components/TopBar/TopBar";
import NavBar from "../components/NavBar/NavBar";
import HeroServices from "../components/IconLayout/HeroServices";
import Offers from "../components/Sections/Offers/Offers";
import Specialization from "../components/Sections/Specialization/Specialization";
import Specialists from "../components/Sections/Specialists/Specialists";
import PatientCaring from "../components/Sections/PatientCaring/PatientCaring";
import Blogs from "../components/Sections/Blogs/Blogs";
import OurFamilies from "../components/Sections/OurFamilies/OurFamilies";
import FAQs from "../components/Sections/FAQs/FAQs";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

const HeroContainer = ({ handleNavigate }) => {
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

        <Button onClick={handleNavigate}>Find Centers</Button>
        {/* <Button onClick={() => console.log("Hello brtn")}>Hello</Button> */}
      </div>
      <div className={style.right_hero}>
        <img src={HeroImg} alt="hero-image" height={"100%"} width={"100%"} />
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/search");
  };
  return (
    <>
      <TopBar />
      <NavBar
        isCustomBackground={{
          color:
            "linear-gradient(to left,rgba(231, 240, 255, 1),rgba(232, 241, 255, 0.47))",
        }}
      />
      <HeroContainer handleNavigate={handleNavigate} />
      <HeroServices />
      <Offers />
      <Specialization />
      <Specialists />
      <PatientCaring />
      <Blogs />
      <OurFamilies />
      <FAQs />
    </>
  );
};

export default Home;
