import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteAccount } from "../../actions/authActions";
import EventfulItem from "../eventfuls/EventfulItem";
import Eventfuls from "../eventfuls/Eventfuls";
import Spinner from "../common/Spinner";
class Dashboard extends Component {
  componentDidMount() {
    // this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    
   
    const { isAuthenticated, user } = this.props.auth;
    const { eventful, loading } = this.props.eventful;
    const deleteButton = <button onClick={this.onDeleteClick.bind(this)} className="btn btn-danger">
      Delete My Account
          </button>;
    // const { profile } = this.props.profile;

    let dashboardContent;
    // if (eventful === null || loading) {
    //   dashboardContent = <Spinner />;
    // } else {
      if (user.admin) {
      dashboardContent = <div>
          <p className="lead text-muted">
            You are admin
          </p>
          <Link to="/eventfuls" className="btn btn-lg btn-info">
            Create Event
          </Link>
          <div style={{ marginBottom: "60px" }} />
          <Eventfuls />
          <div style={{ marginBottom: "60px" }} />
       
        </div>;
    } else {
   
        dashboardContent = <div>


          <div style={{ marginBottom: "60px" }} />
          <Eventfuls />
          <div style={{ marginBottom: "60px" }} />
    
        </div>;
     
      
    }
  // }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              <p className="lead text-muted">
                Welcome {user.name ? user.name : "Guest"}
              </p>
              {dashboardContent}
              {isAuthenticated ? deleteButton : null}
              
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
