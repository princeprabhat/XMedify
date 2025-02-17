import React from "react";
import style from "./OurFamilies.module.css";
const CounterCard = ({ icon, count, text }) => {
  return (
    <div className={style.counter_card_container}>
      <div className={style.icon_container}>
        <img src={icon} alt="icon-card" />
      </div>
      <div className={style.card_heading}>{count}</div>
      <div className={style.card_text}>{text}</div>
    </div>
  );
};

export default CounterCard;
