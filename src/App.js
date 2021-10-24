import React, {Component} from 'react';
import {CardsList} from './cardsList/CardsList.component';
import {SearchField} from './searchField/searchField.component.jsx';

class App extends Component {
constructor(){
  super();
  this.state ={
    monsters:[],
    searchField:""
  }
  // this.handleChange = this.handleChange.bind(this);
  // this.handleClick = this.handleClick.bind(this);
}
componentDidMount(){
  // fetch data from json placeholder API
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(data=>this.setState({monsters:data}))
}

handleChange=(e)=>{
  this.setState({searchField:e.target.value})
}
  render(){
    // filters monsters according search inputs from users
    let filteredMonsters = this.state.monsters.filter(monster=>
      monster.name.toLowerCase().includes(this.state.searchField.toLowerCase()))

    return(
      <div>
        <h1>Monsters rolodex</h1>
        <SearchField handleChange={this.handleChange} placeholder="search for monsters" />
        <CardsList filteredMonsters ={filteredMonsters} />
      </div>
    )
  }
}

export default App;