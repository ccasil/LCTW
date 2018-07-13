import React, { Component } from "react";
import { Link } from "react-router-dom";

import lctw from '../../images/LCTW.png';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="nav-link" to="/">
            LCTW
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/ourmission">
                  Our Mission
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Events
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Meet Our Board
                </a>

                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Founder / CEO
                  </a>
                  <a className="dropdown-item" href="#">
                    Treasurer
                  </a>
                  <a className="dropdown-item" href="#">
                    Graphics Designer
                  </a>
                  <a className="dropdown-item" href="#">
                    Executive Outreach Director
                  </a>
                </div>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">
                  Donations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <img className="lctw" src={lctw} height="100" alt="lctw" />
      </div>
    );
  }
}

export default Navbar;
