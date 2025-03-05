import React, { useState } from "react";
import style from "./NavBar.module.css";
import NavLogo from "../../assets/NavLogo.png";
import Button from "../Button/Button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
const NavBar = ({ isCustomBackground = false }) => {
  const [navbarVisible, setNavBarVisible] = useState(false);
  const navigate = useNavigate();
  const isMobileNavbar = useMediaQuery("only screen and (max-width:1230px)");
  const handleClick = () => {
    navigate("/my-bookings");
  };
  const handleToggleMobileNav = () => {
    setNavBarVisible(!navbarVisible);
  };
  return (
    <div
      className={style.navbar_container}
      style={isCustomBackground ? { background: isCustomBackground.color } : {}}
    >
      <div className={style.logo_container}>
        <img
          onClick={() => navigate("/")}
          src={NavLogo}
          alt="nav-logo"
          height={"100%"}
          width={"100%"}
        />
      </div>
      <div
        className={style.nav_links}
        style={
          !isMobileNavbar
            ? { display: "flex" }
            : isMobileNavbar && navbarVisible
            ? { display: "flex" }
            : { display: "none" }
        }
      >
        <span onClick={() => navigate("/search")}>Find Doctors</span>
        <span>Hospitals</span>
        <span>Medicines</span>
        <span>Surgeries</span>
        <span>Software for Provider</span>
        <span>Facilities</span>
        <Button onClick={handleClick}>My Bookings</Button>
      </div>
      <div
        className={style.ham_icon}
        style={isMobileNavbar ? { display: "block" } : { display: "none" }}
      >
        <GiHamburgerMenu
          size={24}
          color={"rgba(42, 167, 255, 1)"}
          onClick={handleToggleMobileNav}
        />
      </div>
    </div>
  );
};

export default NavBar;
