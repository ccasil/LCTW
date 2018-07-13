import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from '../../images/logo.png';

class Landing extends Component {
  render() {
    return (
      <div>
        <img className="logo" src={logo} height="100vh" alt="logo" />
        <a target="_blank" href="https://www.facebook.com/lovechangingtheworld"><i class="fab fa-facebook-square"></i> Facebook</a>
        <a target="_blank" href="https://twitter.com/LCTW_"><i class="fab fa-twitter-square"></i> Twitter</a>
        <a target="_blank" href="http://www.instagram.com/_lovechangingtheworld_"><i class="fab fa-instagram"></i> Instagram</a>
        <a target="_blank" href="https://www.snapchat.com/add/lctw1"><i class="fab fa-snapchat-square"></i> Snapchat</a>
          <p>donations</p>
        <button target="_blank" href="https://www.paypal.me/lovechangingtheworld">PayPal</button>
          <p>Sponsors: Santa Clara County Department of Health Services, New Mission Community Church, Safeway, & Peter's Bakery.</p>
          <p>Our #LCTW Family would like to THANK YOU for your help, donations, sponsorship, & support.... We LOVE you all.</p>
      </div>
    );
  }
}

export default Landing;
