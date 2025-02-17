import React from "react";
import style from "./OurFamilies.module.css";
import CounterCard from "./CounterCard";
import DrugIcon from "../../../assets/Drugstore-icon.png";
import hospitalIcon from "../../../assets/hospital-icon.png";
import heartIcon from "../../../assets/heart-care.png";
import doctorIcon from "../../../assets/green-doctor-icon.png";

const OurFamilies = () => {
  return (
    <div className={style.our_families_container}>
      <div className={style.left_text_box}>
        <div className={style.heading_text}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </div>
        <div className={style.heading_title}>Our Families</div>
        <div className={style.heading_para}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </div>
      </div>
      <div className={style.right_card_box}>
        <div>
          <CounterCard icon={heartIcon} count="5000+" text="Happy Patients" />
          <CounterCard icon={DrugIcon} count="1000+" text="Laboratories" />
        </div>
        <div style={{ marginTop: "2rem" }}>
          <CounterCard icon={hospitalIcon} count="200+" text="Hospitals" />
          <CounterCard icon={doctorIcon} count="700+" text="Expert Doctors" />
        </div>
      </div>
    </div>
  );
};

export default OurFamilies;
