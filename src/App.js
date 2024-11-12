import { Component } from "react";
import CardList from './components/card-list/card-list.component';
import Searchbox from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      callbacks: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => 
      this.setState(
        () => {
          return { callbacks: users }
        }
      )
    );
  } 

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {

    const { callbacks, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredCallbacks = callbacks.filter((callback) => {
      return callback.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <h1>Salesbuddy</h1>
        <Searchbox
          onChangeHandler={onSearchChange}
          placeholder='search callbacks'
          className={'search-box'}
        />
        <CardList callbacks={ filteredCallbacks }/>
      </div>
    );
  }
}

export default App;