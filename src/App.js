import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/Button/Button";
import SignInPad from "./components/SignInPad/SignInPad";
import { useState } from "react";

function App() {
  const [state, setState] = useState("Sign in");

  const handleStateChange = () => {
    state === "Sign in" ? setState("Sign up") : setState("Sign in");
  };

  return (
    <div className="App">
      <div className="left">
        <button onClick={handleStateChange}>CHANGE STATE</button>
      </div>
      <div className="right">
        <SignInPad parentState={state} />
      </div>
    </div>
  );
}

export default App;
