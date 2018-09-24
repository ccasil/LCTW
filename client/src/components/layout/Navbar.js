import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import lctw from "../../images/Logos/LCTW.png";

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
         <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_donations"></input>
          <input type="hidden" name="business" value="info@lovechangingtheworld.org"></input>
          <input type="hidden" name="lc" value="US"></input>
          <input type="hidden" name="item_name" value="Love Changing the World"></input>
          <input type="hidden" name="item_number" value="Donation"></input>
          <input type="hidden" name="no_note" value="0"></input>
          <input type="hidden" name="currency_code" value="USD"></input>
          <input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest"></input>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          </input><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
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
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between align-items-center w-100" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ourmission">Our Mission</Link>
              </li>
              <li className="nav-item dropdown navbar-logo mx-auto">
                <a
                  className="nav-link dropdown-toggle"
                  tabIndex="0"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Meet Our Board
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/founder">Founder</Link>
                  <Link className="dropdown-item" to="/executive">Directors</Link>
                  <Link className="dropdown-item" to="/staff">Executives</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/programs">Programs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donations">Donations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/membership">Members</Link>
              </li>
              <li className="nav-item dropdown navbar-logo mx-auto">
                <a
                  className="nav-link dropdown-toggle"
                  tabIndex = "0"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Contact Us
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink">
                  <Link className="dropdown-item" to="/mailing">Mailing List</Link>
                  <Link className="dropdown-item" to="/fundraisers">Fundraisers</Link>
                  <Link className="dropdown-item" to="/sponsorform">Sponsors</Link>
                  <Link className="dropdown-item" to="/volunteerform">Volunteers / Internships</Link>
                  <Link className="dropdown-item" to="/homelessform">Homeless</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/resources">Resources</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
