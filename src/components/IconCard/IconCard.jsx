import React from "react";
import style from "./IconCard.module.css";
const IconCard = ({ icon, title }) => {
  return (
    <div className={style.icon_card_box}>
      <img src={icon} alt="card-icon" />

      <div className={style.icon_card_title}>{title}</div>
    </div>
  );
};

export default IconCard;
