import React from "react";
import style from "./Specialists.module.css";

const SpecialistCard = ({ image, title, position }) => {
  return (
    <div className={style.spec_card_container}>
      <div className={style.image_box}>
        <img src={image} alt="card-image" />
      </div>
      <div className={style.text_box}>
        <div className={style.card_title}>{title}</div>
        <div className={style.card_position_text}>{position}</div>
      </div>
    </div>
  );
};

export default SpecialistCard;
