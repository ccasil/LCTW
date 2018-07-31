import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

class Footer extends Component {
    render() {
        return (
            <div class="container-fluid" id="footer">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Follow Us</th>
                            <th scope="col">Contact Us</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <a className="footermedialink" href="https://www.facebook.com/lovechangingtheworld" target="_blank">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                                <a className="footermedialink" href="https://twitter.com/LCTW_" target="_blank">
                                    <i className="fab fa-twitter-square"></i>
                                    </a>
                                <a className="footermedialink" href="http://www.instagram.com/_lovechangingtheworld_" target="_blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="footermedialink" href="https://www.snapchat.com/add/lctw1" target="_blank">
                                    <i className="fab fa-snapchat-square"></i>
                                    </a>
                            </th>
                            <td><p>Address: 3098 Florence Ave, San Jose, CA 95127</p>
                                <p>Email: info@lovechangingtheworld.org</p>
                                <p>Phone: (347) 849-4618</p>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Footer;