import React, { Component } from 'react';
import "../css/Sponsors.css";

import Safeway from '../../images/Sponsors/Safeway.jpg';
import Lucky from '../../images/Sponsors/Lucky.jpg';
import TheHomeDepot from '../../images/Sponsors/TheHomeDepot.png';
import Walmart from '../../images/Sponsors/Walmart.png';
import PetersBakery from '../../images/Sponsors/PetersBakery.png';

class Sponsors extends Component {
    render() {
        return (
            <div>
                <h1>SPONSORS</h1>
                <img class="d-block w-100" src={Safeway}></img>
                <img class="d-block w-100" src={Lucky}></img>
                <img class="d-block w-100" src={TheHomeDepot}></img>
                <img class="d-block w-100" src={Walmart}></img>
                <img class="d-block w-100" src={PetersBakery}></img>
            </div>
        );
    }
}

export default Sponsors;