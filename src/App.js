import { Component } from "react";
import Navbar from './Navbar';
import CardList from './card-list.component';

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
        },
        () => {
          console.log(this.state);
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
      <div>
        <div>
          <Navbar />
        </div>
        <div className='ba fl w-90 mt7 ml5 pb5 tc br4'>
          <h1>
            CallBacks
          </h1>
          <div>
            <input 
              className="bg-black-80 mt3 br3 dim h2"
              type="search" 
              placeholder="search callbacks" 
              onChange={onSearchChange}
            />
          </div>
          <div>
            {
              filteredCallbacks.map((callback) => {
                return (
                  <CardList />
                );  
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;