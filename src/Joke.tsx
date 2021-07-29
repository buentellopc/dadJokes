import React, { Component } from "react";
import "./Joke.css";

interface JokeProps {
  data: {
    text?: string;
    upVote?: number;
    downVote?: number;
  };
}

class Joke extends Component<JokeProps> {
  render() {
    return <div className="Joke">{this.props.data.text}</div>;
  }
}

export default Joke;
