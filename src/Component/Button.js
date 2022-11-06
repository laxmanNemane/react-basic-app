import React from "react";

const Button = ({ text, oK }) => {
  return <button onClick={() => oK()}>{text}</button>;
};

export default Button;
