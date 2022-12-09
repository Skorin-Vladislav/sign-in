import React from "react";
import "./SignInPad.scss";

import Button from "../Button/Button";
import Input from "../Input/Input";
import SignUpMedia from "../sign-social-media/SignUpMedia";
function SignInPad(props) {
  return (
    <div className="pad">
      {props.parentState}
      <h1 className="changable-heading">
        {props.parentState === "Sign up" ? "Sign up" : "Sign in"}
      </h1>
      <Input inuptText="Username" />
      <Input inuptText="Password" />
      <Input inuptText="Email" ParentState={props.parentState} />

      <Button btnClass="filled" btnText={props.parentState} />
      <SignUpMedia />
    </div>
  );
}

export default SignInPad;
