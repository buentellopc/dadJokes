import React, { Component } from "react";
import "./JokesList.css";
import Joke from "./Joke";
import axios from "axios";

const config = { headers: { Accept: "application/json" } };

interface JokesListProps {
  numJokesToGet: number;
}

interface JokesListState {
  jokes: string[];
}

class JokesList extends Component<JokesListProps, JokesListState> {
  static defaultProps = {
    numJokesToGet: 10,
  };

  constructor(props: JokesListProps) {
    super(props);

    this.state = {
      jokes: [],
    };
  }

  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get<{ joke: string; id: string }>(
        "https://icanhazdadjoke.com/",
        config
      );

      jokes.push(res.data.joke);
    }

    this.setState({ jokes });
  }
  render() {
    return (
      <div className="JokesList">
        <div className="JokesList-jokes">
          {this.state.jokes.map((j) => (
            <Joke text={j} />
          ))}
        </div>
      </div>
    );
  }
}

export default JokesList;
