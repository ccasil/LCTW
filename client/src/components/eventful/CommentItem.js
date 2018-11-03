import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteComment } from "../../actions/eventfulActions";

class CommentItem extends Component {
    onDeleteClick(eventfulId, commentId) {
        this.props.deleteComment(eventfulId, commentId);
    }
    render() {
        
        const { comment, eventfulId, auth } = this.props; 
        let adminDelete;
        console.log(auth.user.admin)
        if (auth.user.admin) {
          adminDelete = <button onClick={this.onDeleteClick.bind(this, eventfulId, comment._id)} type="button" className="btn btn-danger mr-1">
              <i className="fas fa-times" />
            </button>;
        } else {
            adminDelete = null;
        }
        console.log(this.props);
        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-2">
                        <br />
                        <p className="text-center">{comment.name}</p>
                    </div>
                    <div className="col-md-10">
                        <p className="lead">{comment.text}</p>
                        {comment.user === auth.user.id ? (
                            <button
                                onClick={this.onDeleteClick.bind(this, eventfulId, comment._id)}
                                type="button"
                                className="btn btn-danger mr-1"
                            >
                                <i className="fas fa-times" />
                            </button>
                        ) : adminDelete }
                        
                    </div>
                </div>
            </div>
        )
    }
}

CommentItem.propTypes = {
    deleteComment: PropTypes.func.isRequired,
    comment: PropTypes.object.isRequired,
    eventfulId: PropTypes.string.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
