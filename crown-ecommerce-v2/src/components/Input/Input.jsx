import React from "react";
import "./input.scss";

const Input = ({ type, title, required = false, className, name, onChange, value }) => {

  const capitalize = (text) => {
    return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();
  }

  title = title.toLowerCase();
  const titleId = title.replaceAll(" ", "");
  return (
    <div className={`inputlabel ${className}`}>
      <label htmlFor={titleId}>
        {capitalize(title)}
      </label>
      <input type={type} id={titleId} name={name} onChange={onChange} value={value}  />
    </div>
  );
};

export default Input;
