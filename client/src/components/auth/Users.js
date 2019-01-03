import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { getUsers } from "../../actions/authActions";
import UserFeed from "./UserFeed";

class Users extends Component {
    componentDidMount() {
        if (!this.props.auth.user.admin){
            this.props.history.push("/dashboard");
        }
        this.props.getUsers();
       
    }

  render() {
    const { users, loading } = this.props.user;
    let userContent;

    if (users === null) {
      userContent = <Spinner />;
    } else {
      userContent = <UserFeed users={users} />;
    }

    return <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-1">Users</h1>
              {userContent}
            </div>
          </div>
        </div>
      </div>;
  }
}

Users.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
    auth: state.auth,
});

export default connect(
  mapStateToProps,
  { getUsers }
)(Users);
