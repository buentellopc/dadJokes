import React, { Component } from "react";
import "./JokesList.css";
import Joke from "./Joke";
import axios from "axios";

const config = { headers: { Accept: "application/json" } };

interface JokesListProps {
  numJokesToGet: number;
}

interface JokesListState {
  jokes: any[];
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

    this.handleVote = this.handleVote.bind(this);
  }

  async componentDidMount() {
    let jokes = [];
    while (jokes.length < this.props.numJokesToGet) {
      let res = await axios.get<{ joke: string; id: string }>(
        "https://icanhazdadjoke.com/",
        config
      );

      jokes.push({ text: res.data.joke, id: res.data.id, votes: 0 });
    }

    this.setState({ jokes });
  }

  handleVote(id: string, delta: number) {
    console.log("hjljl");

    this.setState((st) => ({
      jokes: st.jokes.map((j) => {
        if (j.id === id) {
          return { ...j, votes: j.votes + delta };
        }
        return { ...j };
      }),
    }));
  }
  render() {
    return (
      <div className="JokesList">
        <div className="JokesList-sidebar">
          <h1 className="JokesList-title">
            <span>Dad</span> Jokes
          </h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
          <button className="JokesList-getmore">Fetch Jokes</button>
        </div>

        <div className="JokesList-jokes">
          {this.state.jokes.map((j) => (
            <Joke
              key={j.id}
              text={j.text}
              votes={j.votes}
              upvote={() => this.handleVote(j.id, 1)}
              downvote={() => this.handleVote(j.id, -1)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default JokesList;
