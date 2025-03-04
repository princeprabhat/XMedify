import React from "react";
import style from "./Button.module.css";
const Button = ({ children, onClick }) => {
  return (
    <button className={style.button_container} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
