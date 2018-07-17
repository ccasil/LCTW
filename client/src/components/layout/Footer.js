import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
    <div id="footer">
        <h1>WANT TO REACH OUT INSTANTLY?</h1>
                <table class="table table-borderless">
            <thead>
                <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>info@lovechangingtheworld.org</td>
                    <td>347.849.4618</td>
                    <td>3098 Florence Ave, San Jose, CA 95127</td>
                </tr>
            </tbody>
        </table>
    </div>
        );
    }
}

export default Footer;