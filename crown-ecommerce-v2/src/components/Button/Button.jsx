import React from "react";
import "./button.scss";

const Button = ({ title, className, mainColor, ...options }) => {
  const style = { "--first-btn-color": mainColor }
  return (
    <button style={style} className={`button ${className || ""}`} {...options}>
      {title}
    </button>
  );
};

export default Button;
