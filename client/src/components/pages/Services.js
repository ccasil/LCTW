import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">Services</h1>
                <p className="lead font-weight-bold">Our organization is experienced in Homelessness and will provide these services through
                referrals:</p>
                <ul className="list-unstyled">
                    <li>New Mission Community Church (FREE Food), Every Saturday (8:30AM-1PM) @ 3098 Florence Ave, San Jose, CA 95127</li>
                    <li>Clothes</li>
                    <li>Love Blessings Gift Bags</li>
                    <li>Love Blessings “Backpacks”</li>
                    <li>Love Blessings Condoms &amp; Candy / STD / HIV Prevention &amp; Control</li>
                    <li>Housing and Other Resources</li>
                    <li>Support for the Blind and Visually Impaired</li>
                    <li>Building LOVING families support groups</li>
                    <li>“I AM” WORTH IT!!! Support for young children to Empower, Encourage, &amp; Inspire them to
know their worth.</li>
                </ul>
                <p><span className="font-weight-bold">Providing Services in Areas:</span> San Joaquin, Santa Clara, Merced &amp; also the city of Mount Vernon, New York</p>
            </div>
        );
    }
}

export default Services;