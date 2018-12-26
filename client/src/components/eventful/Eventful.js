import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import EventfulItem from "../eventfuls/EventfulItem";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";

import Spinner from "../common/Spinner";
import { getEventful } from "../../actions/eventfulActions";

class Eventful extends Component {
    componentDidMount() {
        console.log("eventful", this.props.eventful);
        this.props.getEventful(this.props.match.params.id);
        
    }
    render() {
        const { eventful, loading } = this.props.eventful;
        let eventfulContent;
        if (eventful === null || loading || Object.keys(eventful).length === 0) {
            eventfulContent = <Spinner />
        } else {
            eventfulContent = <div>
                <EventfulItem eventful={eventful} showActions={false} />
                <CommentForm eventfulId={eventful._id} />
                <CommentFeed eventfulId={eventful._id} comments={eventful.comments} />
            </div>;
        }
        return <div className="eventful">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                        <Link to="/dashboard" className="btn btn-light mb-3" style={{ marginTop: "60px" }} >
                    Back To dashboard
                  </Link>
                  {eventfulContent}
                </div>;
              </div>
            </div>
          </div>;
    }
}

Eventful.propTypes = {
    getEventful: PropTypes.func.isRequired,
    eventful: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    eventful: state.eventful
});

export default connect(
    mapStateToProps,
    { getEventful }
)(Eventful);
