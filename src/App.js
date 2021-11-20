import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

import awsconfig from "./aws-exports";
import logo from "./logo.svg";
import "./App.css";

Amplify.configure(awsconfig);

function App() {
  const signOut = (e) => {
    Auth.signOut({ global });
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={signOut}>Sign Out</button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Nir Kahana Demo App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
