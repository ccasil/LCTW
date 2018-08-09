import React, { Component } from 'react';
import "../css/Sponsors.css";

import Safeway from '../../images/Sponsors/Safeway.jpg';
import Lucky from '../../images/Sponsors/Lucky.jpg';
import TheHomeDepot from '../../images/Sponsors/TheHomeDepot.png';
import Walmart from '../../images/Sponsors/Walmart.png';
import PetersBakery from '../../images/Sponsors/PetersBakery.png';
import SCPublicHealth from '../../images/Sponsors/SCPublicHealth.png';
import PlannedParenthood from '../../images/Sponsors/PlannedParenthood.jpg';

class Sponsors extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">SPONSORS</h1>
                <a href="https://www.plannedparenthood.org/" target="_blank" className="d-line"><img className="w-100 img-fluid" src={PlannedParenthood}></img></a>
                <a href="https://www.sccgov.org/sites/phd/services/hiv-resources/pages/std-hiv-test-home.aspx" target="_blank" className="d-line"><img class="w-100 img-fluid" src={SCPublicHealth}></img></a>
                <a href="http://petersbakery.com/" target="_blank" className="d-line"><img className="w-100 img-fluid" src={PetersBakery}></img></a>
                <img className="w-100 img-fluid d-inline" src={Safeway}></img>
                <img className="w-100 img-fluid d-inline" src={Lucky}></img>
                <img className="w-100 img-fluid d-inline" src={TheHomeDepot}></img>
                <img className="w-100 img-fluid d-inline" src={Walmart}></img>
            </div>
        );
    }
}

export default Sponsors;