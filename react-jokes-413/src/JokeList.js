import React from "react";
import axios from "axios";
import Joke from "./Joke";
import "./JokeList.css";

class JokeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      jokes: [],
      jokesLimit: 10
    }
    
    this.getJokes = this.getJokes.bind(this)
    this.generateNewJokes = this.generateNewJokes.bind(this)
    this.vote = this.vote.bind(this)
  }

  componentDidMount() {
    if (this.state.jokes.length < this.state.jokesLimit) this.getJokes();
  }

  componentDidUpdate() {
    if (this.state.jokes.length < this.state.jokesLimit) this.getJokes();
  }

  vote(id, change) {
    const joke = this.state.jokes.find(j => j.id === id)
    joke.votes = joke.votes + change
    this.setState(s => (s.jokes))
  }

  generateNewJokes() {
    this.setState(s => (s.jokes = []))
    this.getJokes()
  }

  async getJokes() {
    try {
      let newJokes = []
      for (let i=0 ; i < this.state.jokesLimit ; i++) {
        let res = await axios.get("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" }
          })
          newJokes.push({...res.data, 'votes': 0})
      }
      this.setState(s => (s.jokes = newJokes))
    } catch(e) {
      console.log('error ', e)
    }
  }
    render() {
    return (
        <div className="JokeList">
          <button className="JokeList-getmore" onClick={this.generateNewJokes}>
            Get New Jokes
          </button>
    
          {this.state.jokes.map(j => (
            <Joke text={j.joke} key={j.id} id={j.id} votes={j.votes} vote={this.vote} />
          ))}
        </div>
      )
    }

}
  export default JokeList;


