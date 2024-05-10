import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { user } from './User';
import 'tachyons';
import Navbar from './Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar name={user.name}/>
  </React.StrictMode>
);

