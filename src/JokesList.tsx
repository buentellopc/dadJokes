import React, { Component } from "react";
import "./JokesList.css";
import Joke from "./Joke";

class JokesList extends Component {
  render() {
    return (
      <div className="JokesList">
        <Joke />
      </div>
    );
  }
}

export default JokesList;
