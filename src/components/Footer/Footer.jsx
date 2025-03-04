import React from "react";
import style from "./Footer.module.css";
import NavLogo from "../../assets/NavLogo.png";
import FbIcon from "../../assets/fb-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";
import YoutubeIcon from "../../assets/youtube-icon.png";
import PintrestIcon from "../../assets/pintrest-icon.png";
import FooterLink from "./FooterLink";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className={style.footer_container}>
      <div className={style.footer_section}>
        <div className={style.footer_left}>
          <img
            src={NavLogo}
            alt="footer-logo"
            height={"36px"}
            width={"126px"}
            onClick={() => navigate("/")}
          />

          <div className={style.social_links}>
            <img src={FbIcon} alt="facebook-icon" />
            <img src={TwitterIcon} alt="twitter-icon" />
            <img src={YoutubeIcon} alt="youtube-icon" />
            <img src={PintrestIcon} alt="pintrest-icon" />
          </div>
        </div>

        <FooterLink />
      </div>
      <div className={style.footer_copyright}>
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
