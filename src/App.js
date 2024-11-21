import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import Calls from "./components/calls/calls.components";
import Callbacks from "./components/callbacks/callbacks.component"

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='calls' element={<Calls />} />
        <Route path='callbacks' element={<Callbacks />} />
      </Route>
    </Routes>
  );
};

export default App;