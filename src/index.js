import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons';
import Leads from './Leads';
import Callbacks from './Callbacks';
import Sales from './Sales';
import Navbar from './Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Callbacks />
    <Sales />
    <Leads />
  </React.StrictMode>
);

