import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../images/logo.png';
import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} height="100vh" alt="logo" />
        <div class="row">
          <div class='col-md-3 col-sm-12'>
            <a href="https://www.facebook.com/lovechangingtheworld" target="_blank">
              <i class="fab fa-facebook-square"></i>
            </a>
            <p>Facebook</p>
          </div>
          <div class='col-md-3 col-sm-12'>
            <a href="https://twitter.com/LCTW_" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>
            <p>Twitter</p>
          </div>
          <div class='col-md-3 col-sm-12'>
            <a href="http://www.instagram.com/_lovechangingtheworld_" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <p>Instagram</p>
          </div>
          <div class='col-md-3 col-sm-12'>
            <a href="https://www.snapchat.com/add/lctw1" target="_blank">
              <i class="fab fa-snapchat-square"></i>
            </a>
            <p>Snapchat</p>
          </div>
        </div>
          <p>donations</p>
        <button target="_blank" href="https://www.paypal.me/lovechangingtheworld">PayPal</button>
          <p>Sponsors: Santa Clara County Department of Health Services, New Mission Community Church, Safeway, & Peter's Bakery.</p>
          <p>Our #LCTW Family would like to THANK YOU for your help, donations, sponsorship, & support.... We LOVE you all.</p>
      </div>
    );
  }
}

export default Landing;
