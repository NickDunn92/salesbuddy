import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import './navigation.styles.css';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="home" to="/">
          Home
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/calls">
            Calls
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/callbacks">
            Callbacks
          </Link>
        </div>
        <div>
          <Link className="nav-link" to="/leads">
            Leads
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;