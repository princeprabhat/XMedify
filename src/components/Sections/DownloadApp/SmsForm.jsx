import React, { useState } from "react";
import Button from "../../Button/Button";
import style from "./DownloadApp.module.css";
const SmsForm = ({ setPhoneNumber, phoneNumber }) => {
  const [error, setError] = useState(false);
  const handleNumberChange = (e) => {
    setError(false);
    if (!isNaN(Number(e.target.value.at(-1))) || e.target.value == "")
      setPhoneNumber(e.target.value);
    return;
  };
  const submitForm = () => {
    if (!Number(phoneNumber) || phoneNumber.length !== 10) {
      setError(true);
      return;
    }
    // TODO: Send the phone number to the backend
    setPhoneNumber("");
  };

  return (
    <div className={style.sms_form_container}>
      <div>
        <label>+91</label>
        <input
          type="tel"
          placeholder="Enter phone number"
          onChange={handleNumberChange}
          value={phoneNumber}
          maxLength={10}
        />
      </div>

      {error ? (
        <span style={{ color: "red" }}>Invalid Phone</span>
      ) : (
        <Button onClick={submitForm}>Send SMS</Button>
      )}
    </div>
  );
};

export default SmsForm;
