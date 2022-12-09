import React from "react";
import "./Button.scss";

function Button(props) {
  return (
    <button onClick={props.onClick} className={`btn ${props.btnClass}`}>
      {props.btnText}
    </button>
  );
}

export default Button;
