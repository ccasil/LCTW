import React, { Component } from "react";
import { Link } from "react-router-dom";

import lctw from '../../images/LCTW.png';

class Navbar extends Component {
  render() {
    return <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="nav-link" to="/">
            LCTW
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Meet Our Board
                </a>

                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/founder">
                    Founder / CEO
                  </Link>
                  <Link className="dropdown-item" to="/treasurer">
                    Treasurer
                  </Link>
                  <Link className="dropdown-item" to="/graphics">
                    Graphics Designer
                  </Link>
                  <Link className="dropdown-item" to="/executive">
                    Executive Outreach Director
                  </Link>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/donations">
                  Donations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <img className="lctw" src={lctw} height="100" alt="lctw" />
      </div>;
  }
}

export default Navbar;
