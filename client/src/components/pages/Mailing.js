import React, { Component } from "react";
import axios from "axios";
import "../css/Mailing.css";

class Contact extends Component {
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
    const comments = document.getElementById("comments").value;
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
        url: "http://lovechangingtheworld.org:8000/sendcontact",
        data: {
          first_name: first_name,
          last_name: last_name,
          phone: parsedPhone,
          email: email,
          comments: comments
        }
      })
        .then(response => {
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
        })
        .catch(function(error) {
          console.log(error);
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
    document.getElementById("contact-form").reset();
  }

  render() {
    return (
      <div className="contact">
        <h1 className="display-1">Contact Us</h1>
        <p className="lead">
          Please feel free to leave your contact info here so we can keep you
          updated with our upcoming events and much more.
        </p>
        <form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <p>Name*</p>
            <div className="row">
              <div className="col">
                <input
                  id="first_name"
                  type="text"
                  className="form-control"
                  placeholder="First"
                  name="first_name"
                />
              </div>
              <div className="col">
                <input
                  id="last_name"
                  type="text"
                  className="form-control"
                  placeholder="Last"
                  name="last_name"
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
            <p>Comments</p>
            <textarea
              id="comments"
              className="form-control"
              placeholder=""
              rows="3"
              name="comments"
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

        <iframe
          title="NMCC"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.1426987778764!2d-121.82791258487573!3d37.362800243527666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd693018f1c5%3A0x85f2b0df85498748!2s3098+Florence+Ave%2C+San+Jose%2C+CA+95127!5e0!3m2!1sen!2sus!4v1533251610484"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen
        />

        <div className="row">
          <div className="col text-left">
            <p className="lead">3098 Florence Ave, San Jose, CA 95127</p>
            <p className="lead">Email: info@lovechangingtheworld.org</p>
            <p className="lead">Phone: 1 (408) 259-1008</p>
          </div>
          <div className="col">
            <form action="https://goo.gl/maps/vkXWFWQsZCy" target="_blank">
              <input
                type="submit"
                className="btn btn-secondary float-right"
                value="Find Us"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
