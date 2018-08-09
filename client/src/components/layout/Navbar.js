import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import lctw from '../../images/LCTW.png';

class Navbar extends Component {
  render() {
    return <div>
      <Link to="/"><img className="lctw" src={lctw} height="100" alt="lctw" /></Link>

        <form className="float-right buttonspace" action="https://www.paypal.me/lovechangingtheworld" target="_blank">
          <input type="submit" className="btn btn-primary btn-sm my-2 my-sm-0" value="Donate" />
        </form>

      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/ourmission">
                Our Mission
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Services">
                Services
                </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
                </Link>
            </li>
            <li className="nav-item dropdown navbar-logo mx-auto">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Meet Our Board
                </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Contact Us
                </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
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
          </ul>
        </div>
      </nav>
    </div>;
  }
}

export default Navbar;
