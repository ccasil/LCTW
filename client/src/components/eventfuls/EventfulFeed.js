import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventfulItem from './EventfulItem';
import { connect } from "react-redux";
import { getEventful } from "../../actions/eventfulActions";

class EventfulFeed extends Component {
  componentDidMount() {
    
  }
  render() {
    console.log("items");
    const { eventfuls } = this.props;
    return eventfuls.map(eventful => (
      <EventfulItem key={eventful._id} eventful={eventful} />
    ));
  }
}

EventfulFeed.propTypes = {
  getEventful: PropTypes.func.isRequired,
  eventfuls: PropTypes.array.isRequired
};
const mapStateToProps = state => ({
  post: state.post
});


export default connect(
  mapStateToProps,
  { getEventful }
)(EventfulFeed);