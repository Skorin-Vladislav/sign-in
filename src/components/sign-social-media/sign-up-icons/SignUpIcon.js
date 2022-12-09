import React from "react";
import "./SignUpIcon.scss";

import {
  FaTwitter,
  FaGoogle,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function SignUpIcon() {
  let icons = [
    <FaTwitter />,
    <FaGoogle />,
    <FaFacebookF />,
    <FaLinkedinIn />,
    <FaGithub />,
  ];

  return (
    <div>
      <div className="mapped-icons-container">
        {icons.map((value, index) => (
          <div className="icons-mapped">{value}</div>
        ))}
      </div>
    </div>
  );
}

export default SignUpIcon;
