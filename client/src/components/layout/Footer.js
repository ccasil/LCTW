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
                            <th className="h5" scope="col">Follow Our <span className="font-weight-bold">#LCTW #LOVEMOVEMENT</span></th>
                            <th className="h5" scope="col">Contact Us</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center">
                            <th>
                                <a className="footermedialink" href="https://www.facebook.com/lovechangingtheworld" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                                <a className="footermedialink" href="https://twitter.com/LCTW_" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-twitter-square"></i>
                                    </a>
                                <a className="footermedialink" href="http://www.instagram.com/_lovechangingtheworld_" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a className="footermedialink" href="https://www.linkedin.com/in/love-changing-the-world-inc-8b4384148/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a className="footermedialink" href="https://www.youtube.com/channel/UCjF_zBD7MSpuplF-ULDabDw/featured" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-youtube" > </i>
                                </a>
                                <a className="footermedialink" href="https://www.snapchat.com/add/lctw1" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-snapchat-square"></i>
                                    </a>
                            </th>
                            <td><p>Address: 3098 Florence Ave, San Jose, CA 95127</p>
                                <p>Email: info@lovechangingtheworld.org</p>
                                <p>Phone: 1 (347) 849-4618</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Footer;