import { Component } from "react";
import Navbar from './Navbar';
import CallBacks from './CallBacks';

class App extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <CallBacks />
      </div>
    );
  }
}

export default App;