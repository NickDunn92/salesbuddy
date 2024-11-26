import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from "./routes/home/home.component";
import Calls from "./components/calls/calls.components";
import Callbacks from "./components/callbacks/callbacks.component";
import Leads from './components/leads/leads.component';
import Kpi from './components/kpi/kpi.component';
import Sales from './components/sales/sales.component'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='calls' element={<Calls />} />
        <Route path='callbacks' element={<Callbacks />} />
        <Route path='leads' element={<Leads />} />
        <Route path='kpi' element={<Kpi />} />
        <Route path='sales' element={<Sales />} />
      </Route>
    </Routes>
  );
};

export default App;