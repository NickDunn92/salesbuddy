import { Outlet } from 'react-router-dom';

import './home.styles.css';

const Home = () => {


  return (
    <div className='home'>
      <Outlet />
      <h1>Welcome to SalesBuddy!</h1>
    </div>
  );
};

export default Home;