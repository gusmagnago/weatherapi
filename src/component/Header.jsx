import React, { Component } from "react";

import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link className="button button-shadow" to={"/lisboa"}>
          Lisboa
        </Link>
        <Link className="button button-shadow" to={"/london"}>
          London
        </Link>
        <Link className="button button-shadow" to={"/newyork"}>
          New York
        </Link>
        <Link className="button button-shadow" to={"/saopaulo"}>
          São Paulo
        </Link>
      </div>
    );
  }
}
