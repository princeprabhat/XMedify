import React, { useRef } from "react";
import style from "./TimeSlotPicker.module.css";

const TimeSlotPicker = ({ setSelectedTime }) => {
  const handleTime = (e) => {
    if (e.target.tagName !== "SPAN") {
      return;
    }

    setSelectedTime(e.target.innerText);
  };
  return (
    <div className={style.slot_picker_container} onClick={handleTime}>
      <div className={style.day_row_box}>
        <p>Morning</p>

        <div>
          <span>10:00 AM</span>
        </div>
      </div>
      <div className={style.day_row_box}>
        <p>Afternoon</p>

        <div>
          <span>12:00 PM</span>
          <span>12:30 PM</span>
          <span>01:30 PM</span>
          <span>02:00 PM</span>
        </div>
      </div>
      <div className={style.day_row_box}>
        <p>Evening</p>

        <div>
          <span>06:00 PM</span>
          <span>06:30 PM</span>
          <span>07:00 PM</span>
          <span>07:30 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TimeSlotPicker;
