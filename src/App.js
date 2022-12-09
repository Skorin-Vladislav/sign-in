import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/Button/Button";
import SignInPad from "./components/SignInPad/SignInPad";
import { useState } from "react";

function App() {
  return (
    <div className="App">
        <SignInPad />
    </div>
  );
}

export default App;
