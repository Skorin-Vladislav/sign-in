import React from "react";
import "./SignInPad.scss";

import Button from "../Button/Button";
import Input from "../Input/Input";
import SignUpMedia from "../sign-social-media/SignUpMedia";
function SignInPad() {
  return (
    <div>
      <h1>Sign In</h1>
      <Input />
      <Input />
      <Button  />
      <SignUpMedia />
    </div>
  );
}

export default SignInPad;
