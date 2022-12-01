import React from "react";

const Button = ({ text, oK, styleClass }) => {
  return (
    <button className={`${styleClass}`} onClick={() => oK()}>
      {text}
    </button>
  );
};

export default Button;
