// Hospital Page // Search page hospital card
import React, { useState } from "react";
import style from "./HospitalCard.module.css";
import HospitaCardIcon from "../../assets/hospitalCard-image.png";
import CheckIcon from "../../assets/check-bg-svg.png";
import { BiSolidLike } from "react-icons/bi";
import Button from "../Button/Button";
import BookingModal from "../BookingModal/BookingModal";

const HospitalCard = ({ hospitalData, isCustomCard = false }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const handleToggle = () => {
    setToggleModal(!toggleModal);
  };
  return (
    <>
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
            {!isCustomCard && (
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
            )}

            {!toggleModal && (
              <div className={style.like_container}>
                <BiSolidLike size={16} color="rgba(255, 255, 255, 1)" />
                <span>{hospitalData["Hospital overall rating"]}</span>
              </div>
            )}
          </div>
        </div>

        <div
          className={style.right_section}
          style={
            isCustomCard
              ? {
                  flexDirection: "row",

                  alignItems: "flex-start",
                  paddingTop: "1rem",
                }
              : {}
          }
        >
          {!isCustomCard ? (
            <>
              <div>Available Today</div>
              <Button onClick={handleToggle}>Book FREE Center Visit</Button>
            </>
          ) : (
            <>
              <span className={style.booking_time}>
                {hospitalData.bookingTime}
              </span>
              <span className={style.booking_date}>
                {hospitalData.bookingDate}
              </span>
            </>
          )}
        </div>
      </div>
      {toggleModal && <BookingModal hospitalData={hospitalData} />}
    </>
  );
};

export default HospitalCard;
