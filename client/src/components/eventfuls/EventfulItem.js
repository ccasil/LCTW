import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { deleteEventful, addLike, removeLike } from "../../actions/eventfulActions";

class EventfulItem extends Component {
  
  
  onDeleteClick(id) {
    this.props.deleteEventful(id);
  }

  // onLikeClick(id) {
  //   this.props.addLike(id);
  // }

  // onUnlikeClick(id) {
  //   this.props.removeLike(id);
  // }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { eventful, auth, showActions } = this.props;
    console.log("at eventful item", this.props);

    return <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            {/* <a href="profile.html">
              <img className="rounded-circle d-none d-md-block" src={eventful.title} alt="" />
            </a> */}
            <br />
            <p className="text-center">{eventful.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{eventful.title}</p>
            {showActions ? <span>
                {/* <button onClick={this.onLikeClick.bind(this, eventful._id)} type="button" className="btn btn-light mr-1">
                  <i className={classnames("fas fa-thumbs-up", {
                      "text-info": this.findUserLike(eventful.likes)
                    })} />
                  <span className="badge badge-light">
                    {eventful.likes.length}
                  </span>
                </button>
                <button onClick={this.onUnlikeClick.bind(this, eventful._id)} type="button" className="btn btn-light mr-1">
                  <i className="text-secondary fas fa-thumbs-down" />
                </button> */}
                <Link to={`/eventful/${eventful._id}`} className="btn btn-info mr-1">
                  Comments
                </Link>
                {eventful.user === auth.user.id ? <button onClick={this.onDeleteClick.bind(this, eventful._id)} type="button" className="btn btn-danger mr-1">
                    <i className="fas fa-times" />
                  </button> : null}
              </span> : null}
          </div>
        </div>
      </div>;
  }
}

EventfulItem.defaultProps = {
  showActions: true
};

EventfulItem.propTypes = {
  deleteEventful: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  eventful: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
    { deleteEventful, addLike, removeLike }
)(EventfulItem);
