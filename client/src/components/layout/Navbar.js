import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import lctw from "../../images/LCTW.png";

class Navbar extends Component {
  render() {
    return (
      <div>

        <Link to="/">
          <img
            className="d-inline mx-auto mainlogo"
            src={lctw}
            height="100"
            alt="lctw"
          />
        </Link>

        <div className="d-inline buttonspace">
          <form
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
            target="_blank"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="encrypted"
              value="-----BEGIN PKCS7-----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-----END PKCS7-----
              "
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
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
          <div
            className="collapse navbar-collapse justify-content-between align-items-center w-100"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourmission">
                  Our Mission
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item dropdown navbar-logo mx-auto">
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
                  <Link className="dropdown-item" to="/founder">
                    Founder / CEO
                  </Link>
                  <Link className="dropdown-item" to="/executive">
                    Board of Directors
                  </Link>
                  <Link className="dropdown-item" to="/staff">
                    Staff
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donations">
                  Donations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/programs">
                  Programs
                </Link>
              </li>
              <li className="nav-item dropdown navbar-logo mx-auto">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Contact Us
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/mailing">
                    Mailing List
                  </Link>
                  <Link className="dropdown-item" to="/sponsorform">
                    Sponsors
                  </Link>
                  <Link className="dropdown-item" to="/volunteerform">
                    Volunteers / Internships
                  </Link>
                  <Link className="dropdown-item" to="/homelessform">
                    Homeless
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">
                  Resources
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
