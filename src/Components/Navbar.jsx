import React from "react";
import "D:/PROJECT/React/Uddan/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-12 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <div className="head">Uddan Academy</div>
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassName="menu_active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassName="active"
                      to="/services"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassName="active"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassName="active"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
