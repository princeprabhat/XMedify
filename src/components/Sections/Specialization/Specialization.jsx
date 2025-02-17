import React, { useEffect, useState } from "react";
import style from "./Specialization.module.css";
import Button from "../../Button/Button";
import GenerateCard from "./GenerateCard";

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
            return <GenerateCard key={idx} title={el.title} icon={el.icon} />;
          }
        )}
        {/* <GenerateCard title="Blood Sample" icon={BloodSample} /> */}
      </div>
      <Button onClick={handleToggle}>View All</Button>
    </div>
  );
};

export default Specialization;
