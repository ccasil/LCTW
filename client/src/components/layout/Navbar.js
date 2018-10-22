import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../actions/authActions";
// import { clearCurrentProfile } from "../../actions/profileActions";

import "../css/Navbar.css";

class Navbar extends Component {
 //  onLogoutClick(e) {
 //   e.preventDefault();
 //   this.props.clearCurrentProfile();
 //   this.props.logoutUser();
 // }
  render() {
    // const { isAuthenticated, user } = this.props.auth;
    return (
      <div>
        <div className="textmargin">
          <h1 id="navbartext" className="mx-auto display-1 d-inline">
            Love Changing the World, Inc.
          </h1>

          <div id="buttonspace" className="d-inline">
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input type="hidden" name="cmd" value="_donations" />
              <input
                type="hidden"
                name="business"
                value="info@lovechangingtheworld.org"
              />
              <input type="hidden" name="lc" value="US" />
              <input
                type="hidden"
                name="item_name"
                value="Love Changing the World"
              />
              <input type="hidden" name="item_number" value="Donation" />
              <input type="hidden" name="no_note" value="0" />
              <input type="hidden" name="currency_code" value="USD" />
              <input
                type="hidden"
                name="bn"
                value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest"
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
              <li className="nav-item dropdown navbar-logo mx-auto">
                <a
                  className="nav-link dropdown-toggle"
                  tabIndex="0"
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
                    Founder
                  </Link>
                  <Link className="dropdown-item" to="/executive">
                    Directors
                  </Link>
                  <Link className="dropdown-item" to="/staff">
                    Executives
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/programs">
                  Programs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/donations">
                  Donations
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/membership">
                  Members
                </Link>
              </li>
              <li className="nav-item dropdown navbar-logo mx-auto">
                <a
                  className="nav-link dropdown-toggle"
                  tabIndex="0"
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
                  <Link className="dropdown-item" to="/fundraisers">
                    Fundraisers
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



              {/* <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  onClick={this.onLogoutClick.bind(this)}
                  className="nav-link"
                >
                  Logout
          </a>
              </li> */}


            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

// Navbar.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(
//   mapStateToProps,
//   { logoutUser, clearCurrentProfile }
// )(Navbar);

export default Navbar;
