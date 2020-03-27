import React, { Component } from "react";

import { createStore } from 'redux';
import reducers from './reducers'

import User from './User';

import "./App.css";

const initialState = {
  name: "Nikhil Vaidyar",
  description: "Front End Engineer, Painter and FIFA player",
  likes: "Cats 🐈, Mountains ⛰️ and Food 🍲",
  location: "Bangalore, India 🇮🇳"
};

const store = createStore(reducers, initialState);

class App extends Component {
  state = store.getState();

  render() {
    return (
      <div className="App">
        <User
          description={this.state.description}
          name={this.state.name}
          location={this.state.location}
          likes={this.state.likes}
        />
      </div>
    );
  }
}

export default App;
