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

  const moveBackground = () => {
    if (state === "Sign in") {
      let background = document.getElementsByClassName("background");
      let textOnBG = document.getElementsByClassName("bg-wrapper-left");
      let rightPad = document.getElementById("rightpad");
      rightPad.classList.add("hide");
      background[0].classList.add("move-bg");
      textOnBG[0].classList.add("hide-left");
    }
    let textOnBGRight = document.getElementsByClassName("hide-right");

    textOnBGRight[0].classList.remove("hide-right");
  };

  return (
    <div className="App">
      <div className="background"></div>

      <div className="left">
        {/* <div id="leftpad">
          <SignInPad parentState={state} />
        </div> */}

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
