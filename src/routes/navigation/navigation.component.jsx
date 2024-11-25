import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import './navigation.styles.css';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="links-container">
          <div className="link-box">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </div>
          <div className="link-box">
            <Link className="nav-link" to="/calls">
              Calls
            </Link>
          </div>
          <div className="link-box">
            <Link className="nav-link" to="/callbacks">
              Callbacks
            </Link>
          </div>
          <div className="link-box">
            <Link className="nav-link" to="/leads">
              Leads
            </Link>
          </div>
          <div className="logo">
            <h3 className="logo">SalesBuddy</h3>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;