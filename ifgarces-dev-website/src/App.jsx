import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>WIP</h2>
        </div>
        <p className="App-intro text-monospace py-3">
          Welcome. This is about to be <strong className="text-danger">ifgarces</strong>’s
          portfolio website.
        </p>
      </div>
    );
  }
}
