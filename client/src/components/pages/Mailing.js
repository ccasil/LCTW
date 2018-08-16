import React, { Component } from 'react'
import axios from 'axios';
import "../css/Mailing.css";

class Contact extends Component {

  handleSubmit = async(e) => {
    e.preventDefault();
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const phoneemail = document.getElementById('phoneemail').value;
    const contactvia = document.getElementById('contactvia').value;
    const comments = document.getElementById('comments').value;
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: {
        first_name: first_name,
        last_name: last_name,
        contactvia: contactvia,
        phoneemail: phoneemail,
        comments: comments
      }
    }).then((response) => {
      if (response.data.msg === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.msg === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  render() {
    return (
      <div className="contact">
        <h1 className="display-1">Contact Us</h1>
        <p className="lead">Hello, feel free to leave your contact info so that we can reach out to you and keep you updated with our upcoming events and much more.</p>
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">

          <div className="form-group">
            <p>Name*</p><div className="row">
              <div className="col">
                <input id="first_name" type="text" className="form-control" placeholder="First" name="first_name" />
              </div>
              <div className="col">
                <input id="last_name" type="text" className="form-control" placeholder="Last" name="last_name" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label for="contact">Select One*</label>
            <select id="contactvia"  className="form-control" id="exampleFormControlSelect1">
              <option>Email</option>
              <option>Phone</option>
            </select>
          </div>

          <div className="form-group">
            <p>Email / Phone</p>
            <input id="phoneemail" type="text" className="form-control" placeholder="" name="contactinfo" />
          </div>

          <div className="form-group">
            <p>Comments</p>
            <textarea id="comments" className="form-control" placeholder="" rows="3" name="comments" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        <iframe title="Crane Center" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.1426987778764!2d-121.82791258487573!3d37.362800243527666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcd693018f1c5%3A0x85f2b0df85498748!2s3098+Florence+Ave%2C+San+Jose%2C+CA+95127!5e0!3m2!1sen!2sus!4v1533251610484" width="100%" height="450" frameborder="0" allowfullscreen></iframe>

        <div className="row">
          <div className="col">
            <p className="lead">3098 Florence Ave, San Jose, CA 95127</p>
            <p className="lead">Email: info@lovechangingtheworld.org</p>
            <p className="lead">Phone: (347) 849-4618</p>
          </div>
          <div className="col">
            <form action="https://goo.gl/maps/vkXWFWQsZCy" target="_blank">
              <input type="submit" className="btn btn-secondary float-right" value="Find Us"/>
            </form>
          </div>

        </div>

      </div >
    )
  }
}

export default Contact