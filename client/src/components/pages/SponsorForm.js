import React, { Component } from 'react';
import axios from 'axios';

class SponsorForm extends Component {

    handleSubmit = async (e) => {
        e.preventDefault();
        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const phoneemail = document.getElementById('phoneemail').value;
        const organization = document.getElementById('organization').value;
        axios({
            method: "POST",
            url: "http://localhost:8000/sendsponsor",
            data: {
                first_name: first_name,
                last_name: last_name,
                phoneemail: phoneemail,
                organization: organization
            }
        }).then((response) => {
            if (response.data.msg === 'success') {
                alert("Message Sent");
                // this.resetForm();
            } else {
                alert("Message failed to send");
            }
        })
    }
    resetForm() {
        document.getElementById('sponsor-form').reset();
    }

    render() {
        return <div>
            <h1 className="display-1">Want to be a Sponsor?</h1>
            <p className="lead">
              Hello, feel free to leave your contact info so that we can
              reach out to you.
            </p>
            <form id="sponsor-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <div className="form-group">
                <p>Name*</p>
                <div className="row">
                  <div className="col">
                    <input id="first_name" type="text" className="form-control" placeholder="First" name="first_name" />
                  </div>
                  <div className="col">
                    <input id="last_name" type="text" className="form-control" placeholder="Last" name="last_name" />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <p>Email / Phone</p>
                <input id="phoneemail" type="text" className="form-control" placeholder="" name="contactinfo" />
              </div>

              <div className="form-group">
                <p>Organization / Website</p>
                <textarea id="organization" className="form-control" placeholder="" rows="3" name="organization" />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>;
    }
}

export default SponsorForm;
