import "./App.scss";
import SignInPad from "./components/SignInPad/SignInPad";
import Button from "./components/Button/Button";
import { useState } from "react";

function App() {
  const [state, setState] = useState("Sign in");

  const handleStateChange = () => {
    state === "Sign in" ? setState("Sign up") : setState("Sign in");
    moveBackground();
  };
  //TODO: change to toggle
  const moveBackground = () => {
    if (state === "Sign in") {
      let background = document.getElementsByClassName("background");
      let textOnBG = document.getElementsByClassName("bg-wrapper-left");
      let rightPad = document.getElementById("rightpad");
      let textOnBGRight = document.getElementsByClassName("hide-right");
      let leftPad = document.getElementById("leftpad");

      rightPad.classList.add("hide");
      background[0].classList.add("move-bg");
      textOnBG[0].classList.add("hide-left");

      textOnBGRight[0].classList.remove("hide-right");
      leftPad.classList.remove("hide");
    } else {
      let background = document.getElementsByClassName("background");
      let textOnBG = document.getElementsByClassName("bg-wrapper-left");
      let rightPad = document.getElementById("rightpad");
      let textOnBGRight = document.getElementsByClassName("bg-wrapper-rigth");
      let leftPad = document.getElementById("leftpad");

      rightPad.classList.remove("hide");
      background[0].classList.remove("move-bg");
      textOnBG[0].classList.remove("hide-left");

      textOnBGRight[0].classList.add("hide-right");
      leftPad.classList.add("hide");
    }
  };

  return (
    <div className="App">
      <div className="background"></div>

      <div className="left">
        <div id="leftpad" className="hide">
          <SignInPad parentState={state} />
        </div>

        {/*     copy to right     */}
        <div className="bg-wrapper-left">
          <h2 className="bg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <Button
            btnClass="outlined"
            onClick={handleStateChange}
            btnText={state === "Sign in" ? "Sign up" : "Sign in"}
          />
        </div>
        {/*          */}
      </div>
      <div className="right">
        {/*   copy to left     */}
        <div id="rightpad">
          <SignInPad parentState={state} />
        </div>
        {/*        */}

        <div className="bg-wrapper-rigth hide-right">
          <h2 className="bg-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
          <Button
            btnClass="outlined"
            onClick={handleStateChange}
            btnText={state === "Sign in" ? "Sign up" : "Sign in"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
