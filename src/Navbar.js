import React from 'react';
import { users } from './Users';
 
const Navbar = ({ name, imgUrl }) => {
  return (
    <header 
      className="bg-black-90 fixed w-100 ph3 pv3 pv4-ns ph4-m"
      >
      <nav 
        className="f6 fw6 ttu tracked"
        >
        <a 
          className="link dim white dib w-10 pl4" 
          href="index.js" 
          title="Home"
          >
            Home
          </a>
        <a 
          className="link dim white dib w-10" 
          href="Callbacks.js" 
          title="callbacks"
          >
            Callbacks
          </a>
        <a 
          className="link dim white dib w-10" 
          href="Sales.js" 
          title="sales"
          >
            Sales
          </a>
        <a 
          className="link dim white dib" 
          href="Leads.js" 
          title="leads"
          >
            Leads
          </a>
          <article 
            className="mw3"
            >
            <div 
              className="tc"
              >
              <img 
                src={users.imgUrl} 
                className="br-100 dib" 
                title="users profile" 
                />
              <h4 
                className="white dib"
                >
                  {users.name}
              </h4>
            </div>
          </article>
      </nav>
  </header>
  )
};

export default Navbar;