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
                <a href="https://www.plannedparenthood.org/" target="_blank"><img class="d-block w-100" src={PlannedParenthood}></img></a>
                <a href="https://www.sccgov.org/sites/phd/services/hiv-resources/pages/std-hiv-test-home.aspx" target="_blank"><img class="d-block w-100" src={SCPublicHealth}></img></a>
                <a href="http://petersbakery.com/" target="_blank"><img class="d-block w-100" src={PetersBakery}></img></a>
                <img class="d-block w-100" src={Safeway}></img>
                <img class="d-block w-100" src={Lucky}></img>
                <img class="d-block w-100" src={TheHomeDepot}></img>
                <img class="d-block w-100" src={Walmart}></img>
            </div>
        );
    }
}

export default Sponsors;