import { Routes, Route } from 'react-router-dom';

import Homepage from "./routes/home/home.component";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
  );
};

export default App;