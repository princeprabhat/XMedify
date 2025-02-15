import React from "react";
import style from "./Navbar.module.css";
import NavLogo from "../../assets/NavLogo.png";
import Button from "../Button/Button";
const NavBar = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };
  return (
    <div className={style.navbar_container}>
      <div className={style.logo_container}>
        <img src={NavLogo} alt="nav-logo" height={"100%"} width={"100%"} />
      </div>
      <div className={style.nav_links}>
        <span>Find Doctors</span>
        <span>Hospitals</span>
        <span>Medicines</span>
        <span>Surgeries</span>
        <span>Software for Provider</span>
        <span>Facilities</span>
        <Button onClick={handleClick}>My Bookings</Button>
      </div>
    </div>
  );
};

export default NavBar;
