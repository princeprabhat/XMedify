import React, { useState } from "react";
import style from "./DownloadApp.module.css";
import SmsForm from "./SmsForm";
import GooglePlayBanner from "../../../assets/google_play.png";
import AppleStoreBanner from "../../../assets/apple_store.png";
import MobileSkeleton from "../../../assets/MobileSkeleton.png";
import MobileScreenImg from "../../../assets/MobileScreen.png";
import MobileScreenClip from "../../../assets/MobileScreenClliped.png";
import curveArrow from "../../../assets/arrow-Vector.png";

const DownloadApp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className={style.download_app_container}>
      <div className={style.left_section}>
        <div
          className={style.mobileSkeleton}
          style={{
            backgroundImage: `url(${MobileSkeleton})`,
            marginRight: "-7rem",
            zIndex: 100,
            marginTop: "5rem",
            height: "21rem",
          }}
        >
          <img
            className={style.mobile_screen1}
            src={MobileScreenClip}
            alt="Mobile-Screen"
          />
        </div>

        <div
          className={style.mobileSkeleton}
          style={{
            backgroundImage: `url(${MobileSkeleton})`,
          }}
        >
          <img
            className={style.mobile_screen2}
            src={MobileScreenImg}
            alt="Mobile-Screen"
          />
        </div>
      </div>

      <div className={style.right_section}>
        <img src={curveArrow} alt="curve-arrow" />
        <div className={style.heading_title}>Download the</div>
        <div className={style.heading_title}>
          <span style={{ color: "rgba(42, 167, 255, 1)" }}>Medify </span>
          App
        </div>
        <div className={style.sms_form_heading}>
          Get the link to download the app
        </div>
        <SmsForm phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
        <div className={style.store_icon_banner}>
          <img src={GooglePlayBanner} alt="Google Play" />
          <img src={AppleStoreBanner} alt="Apple Store" />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
