import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EventfulForm from "./EventfulForm";
import EventfulFeed from "./EventfulFeed";
import Spinner from "../common/Spinner";
import { getEventfuls } from "../../actions/eventfulActions";

class Eventfuls extends Component {
  
  componentDidMount() {
    this.props.getEventfuls();
    
  }
  

  render() {
    const { eventfuls, loading } = this.props.eventful;
    let eventfulContent;
    if (eventfuls === null || loading) {
      eventfulContent = null
    } else {
      
      eventfulContent = <EventfulFeed eventfuls={eventfuls} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              {eventfulContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Eventfuls.propTypes = {
  getEventfuls: PropTypes.func.isRequired,
  eventful: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  eventful: state.eventful
});

export default connect(
  mapStateToProps,
  { getEventfuls }
)(Eventfuls);
