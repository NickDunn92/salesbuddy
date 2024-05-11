import React from 'react';
import './Navbar.css';

const Navbar = ({ name }) => {
  return (
    <div>
      <header 
        className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m ph5-l"
        >
        <nav 
          className="f6 fw6 ttu tracked"
          >
          <a 
            className="fl w-10 link dim white dib mr3" href="#" title="Home"
            >
              Home
            </a>
          <a 
            className="fl w-10 link dim white dib mr3" href="#" title="About"
            >
              Leads
            </a>
          <a 
            className="fl w-10 link dim white dib mr3" href="#" title="Store"
            >
              Sales
            </a>
          <a 
            className="fl w-10 link dim white dib" href="#" title="Contact"
            >
              Call Stats
            </a>
        <div
          className="fl w-10 link white dib"
          >
          <h1>
            {name}
          </h1>
          <img
            alt='user profile'
            src='https://i.etsystatic.com/33269334/r/il/c0beb2/3719088381/il_570xN.3719088381_sco7.jpg'
            />
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;