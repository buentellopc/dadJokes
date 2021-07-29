import React, { Component } from "react";
import "./Joke.css";

interface JokeProps {
  text: string;
}

class Joke extends Component<JokeProps> {
  render() {
    return <div className="Joke">{this.props.text}</div>;
  }
}

export default Joke;
