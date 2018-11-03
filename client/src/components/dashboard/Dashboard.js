import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccount } from "../../actions/authActions";
import EventfulItem from "../eventfuls/EventfulItem";
import Eventfuls from "../eventfuls/Eventfuls";
class Dashboard extends Component {
  componentDidMount() {
    // this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    // const { profile } = this.props.profile;

    let dashboardContent;


    if (user.admin) {
      dashboardContent = <div>
          <p className="lead text-muted">
            Welcome Admin {user.name} {user.id}
          </p>
          <Link to="/eventfuls" className="btn btn-lg btn-info">
            Create Event
          </Link>
          <div style={{ marginBottom: "60px" }} />
          <Eventfuls />
        <div style={{ marginBottom: "60px" }} />
          <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
            Delete My Account
          </button>
        </div>;
    } else {
      dashboardContent = <div>
          <p className="lead text-muted">
            Welcome regular {user.name} {user.id}
          </p>

          <div style={{ marginBottom: "60px" }} />
          <Eventfuls />
          <div style={{ marginBottom: "60px" }} />
          <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
            Delete My Account
          </button>
        </div>;
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {

  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  eventful: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  eventful: state.eventful,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteAccount }
)(Dashboard);
