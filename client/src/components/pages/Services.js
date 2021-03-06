import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">Services</h1>
                <p className="lead font-weight-bold">Our organization is experienced in homelessness and will provide these services through
                referrals:</p>
                <ul className="list-unstyled">
                    <li>New Mission Community Food Bank (FREE Food), every Saturday (8:30AM-11AM) @ 3098 Florence Ave, San Jose, CA 95127</li>
                    <li>Love Blessings Backpacks</li>
                    <li>Love Blessings Gift Bags</li>
                    <li>Love Blessings Candy &amp; Condoms Bags / STD / HIV Prevention &amp; Control</li>
                    <li>Housing and Other Resources</li>
                    <li>Support for the Blind and Visually Impaired</li>
                    <li>Building LOVING families support groups</li>
                    <li>“I AM” WORTH IT! Support for young girls to empower, encourage, &amp; inspire them to
know their worth.</li>
                </ul>
                <p><span className="font-weight-bold">Providing Services in Areas:</span> San Joaquin, Santa Clara, Merced &amp; also the city of Mount Vernon, New York</p>
            </div>
        );
    }
}

export default Services;