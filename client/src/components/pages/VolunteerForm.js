import React, { Component } from 'react';
import axios from "axios";

class VolunteerForm extends Component {
  handleSubmit = async e => {
    e.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const phoneemail = document.getElementById("phoneemail").value;
      const experience = document.getElementById("experience").value;
    axios({
      method: "POST",
      url: "http://localhost:8000/sendvolunteer",
      data: {
        first_name: first_name,
        last_name: last_name,
        phoneemail: phoneemail,
        experience: experience
      }
    }).then(response => {
      if (response.data.msg === "success") {
        alert("Message Sent");
        this.resetForm();
      } else {
        alert("Message failed to send");
      }
    });
  };
  resetForm() {
      document.getElementById("volunteer-form").reset();
  }
  render() {
    return <div>
        <h1 className="display-1">Want to be a Volunteer?</h1>
        <p className="lead">
          Hello, feel free to leave your contact info so that we can reach
          out to you.
        </p>
        <form id="volunteer-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <p>Name*</p>
            <div className="row">
              <div className="col">
                <input type="text" className="form-control" placeholder="First" name="first_name" id="first_name" />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Last" name="last_name" id="last_name" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <p>Email / Phone</p>
            <input type="text" className="form-control" placeholder="" name="phoneemail" id="phoneemail" />
          </div>

          <div className="form-group">
            <p>Comments / Experience</p>
            <textarea className="form-control" placeholder="" rows="3" name="experience" id="experience" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>;
  }
}

export default VolunteerForm;
