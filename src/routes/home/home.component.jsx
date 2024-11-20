import { Outlet } from 'react-router-dom';
 
import Callbacks from '../../components/callbacks/callbacks.component';

const Home = () => {


  return (
    <div className='App'>
      <h1 className="logo">Salesbuddy</h1>
      <Outlet />
      <Callbacks />
    </div>
  );
};

export default Home;