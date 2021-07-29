import React, { Component } from "react";
import "./JokesList.css";
import Joke from "./Joke";
import axios from "axios";

const config = { headers: { Accept: "application/json" } };
let requests = Array.from({ length: 10 }).map((i) =>
  axios.get<{ joke: string; id: string }>("https://icanhazdadjoke.com/", config)
);

interface JokeData {
  text: string;
  upVote: number;
  downVote: number;
  id: string;
}

interface JokesListProps {}

interface JokesListState {
  jokes: JokeData[];
}

class JokesList extends Component<JokesListProps, JokesListState> {
  constructor(props: JokesListProps) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  async componentDidMount() {
    try {
      //   const joke = await axios.get("https://icanhazdadjoke.com/", config);
      //   console.log(joke);
      //   const requests = this.state.jokes.map((j) => request);
      //   let r1 = await axios.get("https://icanhazdadjoke.com/", config);
      //   let r2 = await axios.get("https://icanhazdadjoke.com/", config);
      //   console.log(r1, r2);

      //   use a reduce method to check if all ids are unique
      const JokesRes = await Promise.all(requests);
      console.log(JokesRes);

      let jokeData: JokeData[] = JokesRes.map((e) => {
        return { text: e.data.joke, upVote: 0, downVote: 0, id: e.data.id };
      });
      console.log(jokeData);

      this.setState((st) => ({ jokes: jokeData }));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
  render() {
    let allJokes: JSX.Element[] = [];

    if (this.state.jokes.length > 0) {
      allJokes = this.state.jokes.map((j) => <Joke key={j.id} data={j} />);
    }
    return <div className="JokesList">{allJokes}</div>;
  }
}

export default JokesList;
