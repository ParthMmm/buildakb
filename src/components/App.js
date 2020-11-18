import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <div>
      {" "}
      <h1>header</h1>
      <p className="text">pog</p>
    </div>
  );
}

function Landing() {
  return <h1>welcome home</h1>;
}

export default class App extends Component {
  render() {
    return (
      <div className="bg">
        <Router>
          <div className="bg">
            <Header />
            <Route exact path="/" component={Landing} />
          </div>
        </Router>
      </div>
    );
  }
}
