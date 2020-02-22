import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchWord: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(body => this.setState({ monsters: body }));
  }

  search = event => {
    this.setState({ searchWord: event.target.value });
  };

  render() {
    const { monsters, searchWord } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().match(searchWord.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox placeholder="Search monsters" handleSearch={this.search} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

  verwerk() {
    const searchField = document.getElementsByTagName("input")[0].value;
    this.setState({ searchWord: searchField });
    console.log(`DATA: ${this.state.searchWord}`);
  }
}

export default App;
