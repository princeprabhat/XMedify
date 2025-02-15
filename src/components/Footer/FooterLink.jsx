import React from "react";
import style from "./Footer.module.css";
const FooterLink = () => {
  return (
    <div className={style.footerLink_container}>
      <div className={style.footerLink_item}>
        <p>&gt; About Us</p>
        <p>&gt; Our Pricing</p>
        <p>&gt; Our Gallery</p>
        <p>&gt; Appointment</p>
        <p>&gt; Privacy Policy</p>
      </div>
      <div className={style.footerLink_item}>
        <p>&gt; Orthology</p>
        <p>&gt; Neurology</p>
        <p>&gt; Dental Care</p>
        <p>&gt; Opthalmology</p>
        <p>&gt; Cardiology</p>
      </div>
      <div className={style.footerLink_item}>
        <p>&gt; About Us</p>
        <p>&gt; Our Pricing</p>
        <p>&gt; Our Gallery</p>
        <p>&gt; Appointment</p>
        <p>&gt; Privacy Policy</p>
      </div>
    </div>
  );
};

export default FooterLink;
