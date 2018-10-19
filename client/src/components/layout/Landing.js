import React, { Component } from "react";
// import { Link } from "react-router-dom";

import logo from '../../images/Logos/logo.png';

import { PropTypes } from "prop-types";
import { connect } from "react-redux";


import "../css/Landing.css";

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing box">
          <div>
            <h1 id="toptext" className="display-1">~ Love One Another ~</h1>
            <img className="logo" src={logo} alt="logo" />
            <h1 id="bottomtext" className="display-1">Building LOVING Communities...</h1>
          </div>
        </div>
</div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);