import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { updateUser } from "../../actions/authActions";

class UserItem extends Component {
  onUpdateClick(id) {
    this.props.updateUser(id);
  }

  //   onLikeClick(id) {
  //     this.props.addLike(id);
  //   }

  //   onUnlikeClick(id) {
  //     this.props.removeLike(id);
  //   }

  //   findUserLike(likes) {
  //     const { auth } = this.props;
  //     if (likes.filter(like => like.user === auth.user.id).length > 0) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  render() {
    const { user, auth, showActions } = this.props;


    let toggleContent;

    if (user.adminLevel) {
      toggleContent = (
        <input
          type="submit"
          value="Change to Normal"
          onClick={this.onUpdateClick.bind(this, user._id)}
        />
      );
    } else {
      toggleContent = (
        <input
          type="submit"
          value="Change to Admin"
          onClick={this.onUpdateClick.bind(this, user._id)}
        />
      );
    }

    return (
      
        <React.Fragment>
        
            
         
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{JSON.stringify(user.adminLevel)}</td>
              <td>{toggleContent}</td>
            </tr>
          
        
          </React.Fragment>
    )
  }
}

UserItem.defaultProps = {
  showActions: true
};

UserItem.propTypes = {
  updateUser: PropTypes.func.isRequired,

  user: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    updateUser
  }
)(UserItem);
