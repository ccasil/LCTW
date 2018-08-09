import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../css/Footer.css";

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid" id="footer">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">Follow Our Movement #LCTW</th>
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
<<<<<<< HEAD
                                <a className="footermedialink" href="https://www.linkedin.com/in/love-changing-the-world-inc-8b4384148/" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a className="footermedialink" href="https://www.youtube.com/channel/UCjF_zBD7MSpuplF-ULDabDw/featured" target="_blank">
                                    <i class="fab fa-youtube"></i>
=======
                                <a className="footermedialink" href="https://www.snapchat.com/add/lctw1" target="_blank">
                                    <i className="fab fa-youtube"></i>
>>>>>>> 88b0365fe51efaf3d33cf3a773d5bd55354e73d4
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