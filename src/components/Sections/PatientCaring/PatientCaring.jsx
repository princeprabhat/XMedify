import React from "react";
import style from "./PatientCaring.module.css";
import Image1 from "../../../assets/patient-caring-1.png";
import Image2 from "../../../assets/patient-caring-2.png";
import tickSvg from "../../../assets/check-svg.png";
import phoneIcon from "../../../assets/phone-icon.png";
const PatientCaring = () => {
  return (
    <div className={style.patient_caring_container}>
      <div className={style.left_section}>
        <div className={style.free_consultation}>
          <div>
            <img src={phoneIcon} alt="Calling-icon" />
            <span>Free Consultation</span>
          </div>

          <div>Consultation with the best</div>
        </div>

        <img src={Image1} alt="patient-caring-img" className={style.img1} />
        <img src={Image2} alt="patient-caring-img-2" className={style.img2} />
      </div>
      <div className={style.right_section}>
        <div className={style.heading_top}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </div>
        <div className={style.heading_span}>
          <span>Patient </span>{" "}
          <span style={{ color: "rgba(42, 167, 255, 1)" }}>Caring</span>
        </div>
        <p className={style.heading_para}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div className={style.checked_section}>
          <p>
            {" "}
            <img src={tickSvg} alt="arrow-check" />
            <span>Stay Updated About Your Health</span>
          </p>
          <p>
            <img src={tickSvg} alt="arrow-check" />
            <span>Check Your Results Online</span>
          </p>
          <p>
            <img src={tickSvg} alt="arrow-check" />
            <span>Manage Your Appointments</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
