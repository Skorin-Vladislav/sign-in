import React from "react";
import "./Input.scss";

import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";
//props: hide ? ; icon ; placeholder;
function Input(props) {
  return (
    <div
      className={`input-container ${
        props.ParentState === "Sign in" ? "hide" : ""
      }`}
    >
      {props.inuptText === "Password" ? (
        <FaLock className="icon-input" />
      ) : props.inuptText === "Username" ? (
        <FaUserCircle className="icon-input" />
      ) : (
        <FaEnvelope className="icon-input" />
      )}
      <input className="input" placeholder={props.inuptText}></input>
    </div>
  );
}

export default Input;
