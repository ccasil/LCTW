import React, { Component } from "react";
import axios from "axios";

class VolunteerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };
  }

  handleSubmit = async e => {
    this.setState({
      disabled: true
    });
    e.preventDefault();
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;

    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // eslint-disable-next-line
    var phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (first_name && last_name && phoneReg.test(phone) && reg.test(email)) {
      var parsedPhone = "";
      for (var i = 0; i < phone.length; i++) {
        if (phone[i] >= 0 && phone[i] <= 9) {
          parsedPhone += phone[i];
        }
      }
      console.log(parsedPhone);
      axios({
        method: "POST",
        url: "http://lovechangingtheworld.org:8000/sendvolunteer",
        data: {
          first_name: first_name,
          last_name: last_name,
          phone: parsedPhone,
          email: email,
          experience: experience
        }
      }).then(response => {
        if (response.data.msg === "success") {
          alert("Message Sent");
          this.resetForm();
          this.setState({
            disabled: false
          });
        } else {
          alert("Message failed to send");
          this.setState({
            disabled: false
          });
        }
      });
    } else if (
      first_name &&
      last_name &&
      phoneReg.test(phone) &&
      !reg.test(email)
    ) {
      this.setState({
        disabled: false
      });
      alert("Please enter a valid email");
    } else if (
      first_name &&
      last_name &&
      !phoneReg.test(phone) &&
      reg.test(email)
    ) {
      this.setState({
        disabled: false
      });
      alert("Please enter valid phone number");
    } else {
      this.setState({
        disabled: false
      });
      alert("Please fill in the required fields");
    }
  };
  resetForm() {
    document.getElementById("volunteer-form").reset();
  }
  render() {
    return (
      <div className="volunteer">
        <h2 className="display-1 text-center">Want to become a Volunteer?</h2>
        <p className="lead">
          If you would like to become a volunteer or hear about our internship
          opportunities, feel free to leave your contact info and experience so
          that we can reach out to you.
        </p>
        <form
          id="volunteer-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <p>Name*</p>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First"
                  name="first_name"
                  id="first_name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last"
                  name="last_name"
                  id="last_name"
                />
              </div>
            </div>
          </div>

          <div className="form-group">
            <p>Phone*</p>
            <input
              id="phone"
              type="text"
              className="form-control"
              placeholder=""
              name="phone"
            />
          </div>

          <div className="form-group">
            <p>Email*</p>
            <input
              id="email"
              type="text"
              className="form-control"
              placeholder=""
              name="email"
            />
          </div>

          <div className="form-group">
            <p>Comments / Experience</p>
            <textarea
              className="form-control"
              placeholder=""
              rows="3"
              name="experience"
              id="experience"
            />
          </div>

          <button
            disabled={this.state.disabled}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        <p className="lead">*Required</p>
      </div>
    );
  }
}

export default VolunteerForm;
