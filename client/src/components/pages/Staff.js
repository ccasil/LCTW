import React, { Component } from 'react';
import executive from '../../images/Board/executive.jpg';
import treasurer from '../../images/Board/treasurer.jpeg';
import graphics from '../../images/Board/graphics.jpg';
import ceo from '../../images/Board/ceo.jpeg';

import "../css/Landing.css";

class Staff extends Component {
    render() {
        return (
            <div>
                <h1 className="display-3">Meet Our Executive Directors</h1>
                <div className="row">
                    <img className="executive col" src={executive} width="200px;" alt="executive" />
                    <img className="executive col" src={treasurer} width="200px;" alt="treasurer" />
                    <img className="executive col" src={graphics} width="200px;" alt="graphics" />
                    <img className="executive col" src={ceo} width="200px;" alt="founder" />
                </div>
                <hr />
                <h1 className="display-3">Meet Our Advisory Board</h1>

                <div className="row">
                    <img className="executive col" src={executive} width="200px;" alt="executive" />
                    <img className="executive col" src={treasurer} width="200px;" alt="treasurer" />
                    <img className="executive col" src={graphics} width="200px;" alt="graphcis" />
                    <img className="executive col" src={ceo} width="200px;" alt="founder" />
                </div>
            </div>
        );
    }
}

export default Staff;
