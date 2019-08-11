import React from 'react';
import { Component } from 'react';
import { SquadList } from './components/squad-list/squad-list.component';
import { SearchField } from './components/search-field/search-field.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      players: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/karthickram286/chelsea-players-json/squad')
      .then(response => response.json())
      .then(squad => {
        this.setState( { players: squad } )
      });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { players, searchField } = this.state;

    const searchedPlayers = players.filter(player => 
      player.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Chelsea Squad</h1>
        <SearchField placeholder='search players' handleChange = { this.handleChange }/>
        <SquadList players={ searchedPlayers }/>
      </div>
    );
  }
}

export default App;
