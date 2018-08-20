import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">Services</h1>
                <p className="lead">Our organization is experienced in Homelessness and will provide these services through
                referrals.</p>
                <ul className="list-unstyled">
                    <li>Food Vida Life Center (FREE Food), Every Saturday (8:30AM-1PM) @ New Mission Community Church</li>
                    <li>Clothes</li>
                    <li>Love Blessings Gift Bags</li>
                    <li>Love Blessings “Backpacks”</li>
                    <li>Love Blessings Condoms & Candy / STD / HIV Prevention & Control</li>
                    <li>Housing and Other Resources</li>
                    <li>Support for the Blind and Visually Impaired</li>
                    <li>Building LOVING families support groups</li>
                    <li>“I AM” WORTH IT!!! Support for young children to Empower, Encourage, &amp; Inspire them to
know their worth.</li>
                </ul>
                <h4><span className="font-weight-bold">Providing Services in Areas:</span> San Joaquin, Santa Clara, Merced & also the city of Mount Vernon, New York</h4>
                {/* <h4><span className="font-weight-bold">VOLUNTEERS NEEDED!!!</span> If you have an interest in helping others please do not HESITATE to reach out.</h4> */}
            </div>
        );
    }
}

export default Services;