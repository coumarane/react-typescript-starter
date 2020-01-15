import * as React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <>
      <div className="row">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/" exact>
                  <i className="fa fa-home" />
                  {``} Home page
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/demo">
                  <i className="fa fa-apple" />
                  {``} Demo page
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" to="/contact">
                  <i className="fa fa-users" />
                  {``} Contact page
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
