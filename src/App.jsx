import React, { Component /* Fragment */ } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Header from "./component/Header";

import LisboaWeather from "./views/Lisbon";
import LondonWeather from "./views/London";
import NewYorkWeather from "./views/NewYork";
import SaoPauloWeather from "./views/SaoPaulo";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/lisboa" component={LisboaWeather} />
          <Route path="/london" component={LondonWeather} />
          <Route path="/newyork" component={NewYorkWeather} />
          <Route path="/saopaulo" component={SaoPauloWeather} />
        </Switch>
      </div>
    );
  }
}
