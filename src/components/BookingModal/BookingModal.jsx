import React, { useState } from "react";
import style from "./BookingModal.module.css";
import DaySelector from "../Calendar/DaySelector/DaySelector";
import TimeSlotPicker from "../Calendar/TimeSlotPicker/TimeSlotPicker";

import Button from "../Button/Button";
import { AutohideSnackbar } from "../AutohideSnackbar/AutohideSnackbar";
import { useNavigate } from "react-router-dom";

const BookingModal = ({ hospitalData }) => {
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleFinalBooking = () => {
    const data = {
      bookingDate: selectedDate,
      bookingTime: selectedTime,
      ["Hospital Name"]: hospitalData["Hospital Name"],
      City: hospitalData["City"],
      State: hospitalData["State"],
      ["Hospital Type"]: hospitalData["Hospital Type"],
      ["Hospital overall rating"]: hospitalData["Hospital overall rating"],
    };
    const items = JSON.parse(localStorage.getItem("bookings")) || [];
    localStorage.setItem("bookings", JSON.stringify([...items, data]));
    AutohideSnackbar(
      `Booking confirmed for ${selectedDate} at ${selectedTime}`,
      "success"
    );

    setSelectedTime(null);
    navigate("/my-bookings");
  };
  const handleResetBooking = () => {
    setSelectedTime(null);
  };

  return (
    <div className={style.booking_modal_container}>
      <DaySelector setSelectedDate={setSelectedDate} />
      <TimeSlotPicker setSelectedTime={setSelectedTime} />
      {selectedDate && selectedTime && (
        <>
          <p style={{ textAlign: "center", fontFamily: "Poppins" }}>
            Book appointment on <b>{selectedDate}</b> at <b>{selectedTime}</b>
          </p>
          <div className={style.booking_button_container}>
            <Button onClick={handleFinalBooking}>Confirm Booking</Button>
            <Button onClick={handleResetBooking}>Reset</Button>
          </div>
        </>
      )}
    </div>
  );
};

export default BookingModal;
