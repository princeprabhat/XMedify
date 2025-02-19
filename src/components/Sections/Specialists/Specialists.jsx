// import React, { useCallback, useState } from "react";
import HeroSlider from "../../HeroSlider/HeroSlider";
import SpecialistCard from "./SpecialistCard";
import style from "./Specialists.module.css";
import DrSam from "../../../assets/dr-sam.png";
import DrHenry from "../../../assets/dr-henry.png";
import DrHeena from "../../../assets/dr-heena.png";
import DrAnkur from "../../../assets/dr-ankur.png";
import DrAhmad from "../../../assets/dr-ahmad.png";

const cardData = [
  { image: DrAhmad, title: "Dr. Ahmad Khan", position: "Neurologist" },
  { image: DrHeena, title: "Dr. Heena Sachdeva", position: "Orthopadics" },
  { image: DrAnkur, title: "Dr. Ankur Sharma", position: "Medicine" },
  { image: DrHenry, title: "Dr. Henry Mathon", position: "Cardiologist" },
  { image: DrSam, title: "Dr. Sam Altman", position: "Medicine" },
  { image: DrAnkur, title: "Dr. Ankur Sharma", position: "Medicine" },
  { image: DrHenry, title: "Dr. Henry Mathon", position: "Cardiologist" },
];
const generateCards = () => {
  const arr = [];
  cardData.forEach((val) => {
    arr.push(
      <SpecialistCard
        image={val.image}
        title={val.title}
        position={val.position}
      />
    );
  });
  return arr;
};

const Specialists = () => {
  return (
    <div className={style.specialist_container}>
      <div className={style.container_heading}>Our Medical Specialist</div>
      <HeroSlider data={generateCards()} isCustom={true} />
    </div>
  );
};

export default Specialists;
