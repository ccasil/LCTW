import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import lctw from '../../images/LCTW.png';

class Navbar extends Component {
  render() {
    return <div>
      <Link to="/"><img className="lctw" src={lctw} height="100" alt="lctw" /></Link>
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
                    Executive Board
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
                Our Programs
                </Link>
            </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li>
              <Link className="nav-link" to="/sponsors">
                  Sponsors
                </Link>
              </li>
            </ul>
          {/* <ul class="nav navbar-nav flex-row justify-content-center flex-nowrap">
            <li class="nav-item"><a className="navbarmedialink" href="https://www.facebook.com/lovechangingtheworld" target="_blank">
              <i className="fab fa-facebook-square"></i>
            </a></li>
            <li class="nav-item"><a className="navbarmedialink" href="https://twitter.com/LCTW_" target="_blank">
              <i className="fab fa-twitter-square"></i>
            </a></li>
            <li class="nav-item"><a className="navbarmedialink" href="http://www.instagram.com/_lovechangingtheworld_" target="_blank">
              <i className="fab fa-instagram"></i>
            </a></li>
            <li class="nav-item"><a className="navbarmedialink" href="https://www.snapchat.com/add/lctw1" target="_blank">
              <i className="fab fa-snapchat-square"></i>
            </a></li>
          </ul> */}
          </div>
        </nav>
      </div>;
  }
}

export default Navbar;
