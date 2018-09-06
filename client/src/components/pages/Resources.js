import React, { Component } from 'react';

class Resources extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">Resources</h1>
                <ul className="list-unstyled">
                    <li>STD/HIV Prevention &amp; Control/Loving Condoms &amp; Candy Bags</li>
                    <li>Support for the Blind and Visually Impaired</li>
                    <li>Support for Pregnant teens with Toddlers</li>
                    <li>Homeless Support and Outreach Services</li>
                </ul>

                <ul className="list-unstyled">
                    <li><span className="font-weight-bold">Planned Parenthood:</span> 1 (800) 230-PLAN</li>
                    <li><span className="font-weight-bold">Homeless Helpline:</span> 1 (408) 510-7600</li>
                    <li><span className="font-weight-bold">Anonymous and Confidential Free HIV Testing:</span> 1 (408) 792-3720</li>
                    <li><span className="font-weight-bold">Suicide Hotline: </span><a href="http://www.suicide.org/hotlines/california-suicide-hotlines.html" target="_blank" rel="noopener noreferrer" className="d-line">suicide.org</a></li>
                    <li><span className="font-weight-bold">National Domestic Violence Hotline: </span><a href="http://www.thehotline.org/" target="_blank" rel="noopener noreferrer" className="d-line">thehotline.org</a> 1 (800) 799-SAFE </li>
                    <li><span className="font-weight-bold">Women Rising Above Abuse (WRAA): </span><a href="http://womenrisingaboveabuse.org/" target="_blank" rel="noopener noreferrer" className="d-line">womenrisingaboveabuse.org</a></li>
                    <li><span className="font-weight-bold">Local Shelters: </span><a href="https://www.homefirstscc.org/cold-weather-shelters/" target="_blank" rel="noopener noreferrer" className="d-line">homefirstscc.org</a></li>
                    <li><span className="font-weight-bold">Mental Health Hotline and Referral: </span><a href="https://www.healthyplace.com/other-info/resources/mental-health-hotline-numbers-and-referral-resources" target="_blank" rel="noopener noreferrer" className="d-line">healthyplace.com</a></li>
                </ul>
                <hr />
                <p className="h4">Santa Clara County Public Health Department <small className="text-muted">Crane Center</small></p>
                { /* <iframe title="LCTW" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3647494125553!2d-121.91410528487653!3d37.33387254517634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb67b7e1fd15%3A0xbee30c589b7ba6e3!2sCrane+Center!5e0!3m2!1sen!2sus!4v1534203068830" width="100%" height="450" frameBorder="0" allowFullScreen></iframe> */ }
                <ul className="list-unstyled">
                    <li className="font-weight-bold">STD/HIV Prevention &amp; Control</li>
                    <li>976 Lenzen Avenue</li>
                    <li>San Jose, CA 95126</li>
                    <li>Phone: 1 (408) 792-3720</li>
                    <li>Fax: 1 (408) 792-3721</li>
                    <li>Email: cranecenter@phd.sccgov.org</li>
                </ul>


                <p className="h4">New Mission Community Church <small className="text-muted">(NMCC)</small></p>
                { /* <iframe title="NMCC" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.1426987778764!2d-121.82791258487573!3d37.362800243527666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd693018f1c5%3A0x85f2b0df85498748!2s3098+Florence+Ave%2C+San+Jose%2C+CA+95127!5e0!3m2!1sen!2sus!4v1533251610484" width="100%" height="450" frameBorder="0" allowFullScreen></iframe> */ }
                <ul className="list-unstyled">
                    <li>3098 Florence Avenue</li>
                    <li>San Jose, CA 95127</li>
                    <li>Phone: 1 (408) 792-3720</li>
                    <li><span className="font-weight-bold">Pastor Claudell Huey: </span>1 (408) 259-1008</li>
                </ul>



            </div>
        );
    }
}

export default Resources;
