import React, { Component } from 'react';
import executive from '../../images/Board/executive.jpg';

import "../css/Landing.css";

class Staff extends Component {
    render() {
        return (
            <div>
                <h1 className="display-3">Meet Our Executive Directors</h1>
                <div className="row">
                    <img className="executive col" src={executive} alt="executive" />
                    <img className="executive col" src={executive} alt="executive" />
                    <img className="executive col" src={executive} alt="executive" />
                    <img className="executive col" src={executive} alt="executive" />
                </div>
                <hr />
                <h1 className="display-3">Meet Our Advisory Board</h1>

                <div className="row">
                    <img className="executive col" src={executive} alt="executive" />
                    <img className="executive col" src={executive} alt="executive" />
                    <img className="executive col" src={executive} alt="executive" />
                    <img className="executive col" src={executive} alt="executive" />
                </div>
            </div>
        );
    }
}

export default Staff;
