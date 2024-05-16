import React from "react";
import Navbar from './Navbar';
import Callstats from './Callstats';
import Searchbox from "./Searchbox";

const App = () => {
  return (
    <div>
      <Navbar />
      <Searchbox />
      <Callstats />
    </div>
  );
}

export default App;