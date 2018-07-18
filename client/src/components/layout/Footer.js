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
                            <th scope="col">Follow Us</th>
                            <th scope="col">Contact Us</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <a href="https://www.facebook.com/lovechangingtheworld" target="_blank">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                                <a href="https://twitter.com/LCTW_" target="_blank">
                                    <i class="fab fa-twitter-square"></i>
                                    </a>
                                <a href="http://www.instagram.com/_lovechangingtheworld_" target="_blank">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.snapchat.com/add/lctw1" target="_blank">
                                    <i class="fab fa-snapchat-square"></i>
                                    </a>
                            </td>
                            <td>Address: 3098 Florence Ave, San Jose, CA 95127</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Phone: (347) 849-4618</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Footer;