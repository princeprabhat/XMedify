import React from "react";
import style from "./Specialization.module.css";
const GenerateCard = ({ icon, title }) => {
  return (
    <div className={style.card_box}>
      <img src={icon} alt="card-icon" />

      <div className={style.card_title}>{title}</div>
    </div>
  );
};

export default GenerateCard;
