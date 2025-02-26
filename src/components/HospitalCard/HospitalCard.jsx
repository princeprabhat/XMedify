// Hospital Page // Search page hospital card
import React from "react";
import style from "./HospitalCard.module.css";
import HospitaCardIcon from "../../assets/hospitalCard-image.png";
import CheckIcon from "../../assets/check-bg-svg.png";
import { BiSolidLike } from "react-icons/bi";
import Button from "../Button/Button";

const HospitalCard = ({ hospitalData }) => {
  console.log(hospitalData);
  return (
    <div className={style.hospital_card_box}>
      <div className={style.left_section}>
        <div className={style.card_icon_container}>
          <img src={HospitaCardIcon} alt="Card-icon" />
          <div className={style.check_icon}>
            <img src={CheckIcon} alt="check-icon" />
          </div>
        </div>

        <div className={style.hospital_info}>
          <h3>{hospitalData["Hospital Name"]}</h3>
          <p style={{ fontWeight: "700" }}>
            {hospitalData.City}
            {", "}
            {hospitalData.State}
          </p>
          <p>{hospitalData["Hospital Type"]}</p>
          <p>
            <span
              style={{
                fontWeight: "700",

                color: "rgba(2, 164, 1, 1)",
              }}
            >
              FREE
            </span>{" "}
            <span style={{ color: "rgba(120, 120, 135, 1)" }}>
              <s>500</s>
            </span>{" "}
            <span>Consultation fee a clinic</span>
          </p>

          <div className={style.like_container}>
            <BiSolidLike size={16} color="rgba(255, 255, 255, 1)" />
            <span>{hospitalData["Hospital overall rating"]}</span>
          </div>
        </div>
      </div>

      <div className={style.right_section}>
        <div>Available Today</div>
        <Button>Book FREE Center Visit</Button>
      </div>
    </div>
  );
};

export default HospitalCard;
