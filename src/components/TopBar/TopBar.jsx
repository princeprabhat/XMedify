import React from "react";
const bar_style = {
  backgroundColor: "rgba(42, 167, 255, 1)",
  textAlign: "center",
  fontFamily: "Poppins",
  fontWeight: "400",
  fontSize: "14px",
  lineHeight: "21px",
  letterSpacing: "0%",
  color: "rgba(255, 255, 255, 1)",
  padding: "10px",
};
const TopBar = () => {
  return (
    <div style={bar_style}>
      {" "}
      The health and well-being of our patients and their health care team will
      always be our priority, so we follow the best practices for cleanliness.
    </div>
  );
};

export default TopBar;
