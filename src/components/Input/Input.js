import React from "react";
import "./Input.scss";

import { FaUserCircle, FaLock, FaEnvelope } from "react-icons/fa";
//props: hide ? ; icon ; placeholder;
function Input(props) {
  return (
    <div className="input-container">
      <FaEnvelope className="icon-input" />
      <input className="input" placeholder="Password"></input>
    </div>
  );
}

export default Input;
