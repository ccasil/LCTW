import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 className="display-1">Contact Us</h1>
        <p className="lead">Hello there, feel free to leave your contact info so that we can reach out to you and keep you updated with our upcoming events and much more.</p>
        <form>


          <div className="form-group">
          <p>Name*</p><div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="First" name="first_name" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last" name="last_name" />
            </div>
          </div>
          </div>

          <div className="form-group">
            <label for="contact">Select One*</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Email</option>
              <option>Phone</option>
            </select>
          </div>
          <submit />
        </form>
      </div>
    )
  }
}

export default Contact