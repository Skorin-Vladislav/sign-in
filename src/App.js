import logo from "./logo.svg";
import "./App.scss";
import Button from "./components/Button/Button";
import SignUpMedia from "./components/sign-social-media/SignUpMedia";
import Input from "./components/Input/Input";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Input />
      
    </div>
  );
}

export default App;
