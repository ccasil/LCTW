import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import InputGroup from "../common/InputGroup";
import { addEventful } from "../../actions/eventfulActions";

class EventfulForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      // comments:'',
      pictures: "",
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const { user } = this.props.auth;

    const newEventful = {
      title: this.state.title,
      description: this.state.description,
      pictures: this.state.pictures,
      name: user.name
    };
    this.props.addEventful(newEventful);
    this.setState({ title: "" });
    this.setState({ description: "" });
    this.setState({ pictures: "" });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="post-form mb-3">
        <div className="card card-info">
          <div className="card-header bg-info text-white">Create an Event</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <InputGroup
                  placeholder="Create a eventful title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextAreaFieldGroup
                  placeholder="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

EventfulForm.propTypes = {
  addEventful: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { addEventful }
)(EventfulForm);
