import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../images/logo.png';
import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div>
            <h1>~Love One Another~</h1>
            <img className="logo" src={logo} height="100vh" alt="logo" />
            <h1>Building LOVE and Communities</h1>
          </div>
        </div>
        <div>
          <h1>Follow Our Movement</h1>
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <a className="socialmedialink" href="https://www.facebook.com/lovechangingtheworld" target="_blank">
                <i className="fab fa-facebook-square" />
              </a>
              <p>Facebook</p>
            </div>
            <div className="col-md-3 col-sm-12">
              <a className="socialmedialink" href="https://twitter.com/LCTW_" target="_blank">
                <i className="fab fa-twitter-square" />
              </a>
              <p>Twitter</p>
            </div>
            <div className="col-md-3 col-sm-12">
              <a className="socialmedialink" href="http://www.instagram.com/_lovechangingtheworld_" target="_blank">
                <i className="fab fa-instagram" />
              </a>
              <p>Instagram</p>
            </div>
            <div className="col-md-3 col-sm-12">
              <a className="socialmedialink" href="https://www.snapchat.com/add/lctw1" target="_blank">
                <i className="fab fa-snapchat-square" />
              </a>
              <p>Snapchat</p>
            </div>
          </div>

          <p>Donations: 
          <button className="btn btn-primary" target="_blank" href="https://www.paypal.me/lovechangingtheworld">
            PayPal
          </button>
          </p>
          <p>
            Sponsors: Santa Clara County Department of Health Services,
            New Mission Community Church, Safeway, & Peter's Bakery.
          </p>
          <p>
            Our #LCTW Family would like to THANK YOU for your help,
            donations, sponsorship, & support... We LOVE you all.
          </p>
        </div>
      </div>
    );
  }
}

export default Landing;
