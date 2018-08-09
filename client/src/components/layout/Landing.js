import React, { Component } from "react";
// import { Link } from "react-router-dom";

import logo from '../../images/logo.png';
import Safeway from '../../images/Sponsors/Safeway.jpg';
import Lucky from '../../images/Sponsors/Lucky.jpg';
import TheHomeDepot from '../../images/Sponsors/TheHomeDepot.png';
import Walmart from '../../images/Sponsors/Walmart.png';
import PetersBakery from '../../images/Sponsors/PetersBakery.png';
import SCPublicHealth from '../../images/Sponsors/SCPublicHealth.png';
import PlannedParenthood from '../../images/Sponsors/PlannedParenthood.jpg';
import HomeFirst from '../../images/Sponsors/HomeFirst.png';

import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div>
            <h1 className="display-1">~ Love One Another ~</h1>
            <img className="logo" src={logo} height="100vh" alt="logo" />
            <h1 className="display-1">Building LOVING communities...</h1>
          </div>
        </div>
        <div>
          <h1 className="display-4">SPONSORS</h1>
          <a href="https://www.plannedparenthood.org/" target="_blank" className="d-line"><img className="w-100 img-fluid" src={PlannedParenthood}></img></a>
          <a href="https://www.sccgov.org/sites/phd/services/hiv-resources/pages/std-hiv-test-home.aspx" target="_blank" className="d-line"><img class="w-100 img-fluid" src={SCPublicHealth}></img></a>
          <a href="http://petersbakery.com/" target="_blank" className="d-line"><img className="w-100 img-fluid" src={PetersBakery}></img></a>
          <img className="w-100 img-fluid d-inline" src={Safeway}></img>
          <img className="w-100 img-fluid d-inline" src={Lucky}></img>
          <img className="w-100 img-fluid d-inline" src={TheHomeDepot}></img>
          <img className="w-100 img-fluid d-inline" src={Walmart}></img>
          <img className="w-100 img-fluid d-inline" src={HomeFirst}></img>
        </div>
      </div>
    );
  }
}

export default Landing;
