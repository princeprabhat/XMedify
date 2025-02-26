import React, { useEffect, useState } from "react";
import style from "./Specialization.module.css";
import Button from "../../Button/Button";

import { CARD_DATA } from "./cardData";

const Specialization = () => {
  const [toggleView, setToggleView] = useState(false);

  const handleToggle = () => {
    setToggleView(!toggleView);
  };

  return (
    <div className={style.specialization_container}>
      <div className={style.container_heading}>Find By Specialisation</div>

      <div className={style.card_container}>
        {CARD_DATA.slice(0, toggleView ? CARD_DATA.length : 8).map(
          (el, idx) => {
            return (
              <div className={style.card_box} key={idx}>
                <img src={el.icon} alt="card-icon" />

                <div className={style.card_title}>{el.title}</div>
              </div>
            );
          }
        )}
      </div>
      <Button onClick={handleToggle}>View All</Button>
    </div>
  );
};

export default Specialization;
