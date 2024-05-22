import { Component } from "react";
import Navbar from './Navbar';

class App extends Component {
  constructor() {
    super();

    this.state = {
      callbacks: [],
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

  render() {
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
              onChange={(event) => {
                const searchString = event.target.value.toLocaleLowerCase();
                const filteredCallbacks = this.state.callbacks.filter((callback) => {
                  return callback.name.toLocaleLowerCase().includes(searchString);
                });

                this.setState(() => {
                  return { callbacks: filteredCallbacks };
                });
              }}
            />
          </div>
          <div>
            {
              this.state.callbacks.map((callback) => {
                return (
                  <div key={callback.id}>
                    <h3>
                      {callback.name}
                    </h3>
                  </div>
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