import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

class CommentFeed extends Component {
  render() {
    const { comments, eventfulId } = this.props;
      console.log(this.props);

    return comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} eventfulId={eventfulId} />
    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  eventfulId: PropTypes.string.isRequired
};

export default CommentFeed;
