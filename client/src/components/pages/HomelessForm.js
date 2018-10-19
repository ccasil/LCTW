import React, { Component } from "react";
import axios from "axios";

class HomelessForm extends Component {
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
    const birthday = document.getElementById("birthday").value;
    const location = document.getElementById("location").value;
    const genderage = document.getElementById("genderage").value;
    const shirt = document.getElementById("shirt").value;
    const pant = document.getElementById("pant").value;
    const sock = document.getElementById("sock").value;
    const underwear = document.getElementById("underwear").value;

    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // eslint-disable-next-line
    var phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    if (
      first_name &&
      last_name &&
      birthday &&
      genderage &&
      shirt &&
      pant &&
      sock &&
      underwear &&
      phone &&
      email
    ) {
      if (!phoneReg.test(phone)) {
        this.setState({
          disabled: false
        });
        alert("Please enter valid phone number");
      } else if (!reg.test(email)) {
        this.setState({
          disabled: false
        });
        alert("Please enter a valid email");
      } else if (phoneReg.test(phone) || reg.test(email)) {
        var parsedPhone = "";
        for (var i = 0; i < phone.length; i++) {
          if (phone[i] >= 0 && phone[i] <= 9) {
            parsedPhone += phone[i];
          }
        }
        console.log(parsedPhone);

        axios({
          method: "POST",
          url: "http://lovechangingtheworld.org:8000/sendhelp",
          data: {
            first_name: first_name,
            last_name: last_name,
            phone: parsedPhone,
            email: email,
            birthday: birthday,
            location: location,
            genderage: genderage,
            shirt: shirt,
            pant: pant,
            sock: sock,
            underwear: underwear
          }
        }).then(response => {
          if (response.data.msg === "success") {
            alert("Message Sent");
            this.setState({
              disabled: false
            });
            this.resetForm();
          } else {
            alert("Message failed to send");
            this.setState({
              disabled: false
            });
          }
        });
      }
    } else if (
      first_name &&
      last_name &&
      birthday &&
      genderage &&
      shirt &&
      pant &&
      sock &&
      underwear
    ) {
      axios({
        method: "POST",
        url: "http://lovechangingtheworld.org:8000/sendhelp",
        data: {
          first_name: first_name,
          last_name: last_name,
          phone: parsedPhone,
          email: email,
          birthday: birthday,
          location: location,
          genderage: genderage,
          shirt: shirt,
          pant: pant,
          sock: sock,
          underwear: underwear
        }
      }).then(response => {
        if (response.data.msg === "success") {
          alert("Message Sent");
          this.setState({
            disabled: false
          });
          this.resetForm();
        } else {
          alert("Message failed to send");
          this.setState({
            disabled: false
          });
        }
      });
    } else {
      alert("Please fill in the required fields");
      this.setState({
        disabled: false
      });
    }
  };
  resetForm() {
    document.getElementById("help-form").reset();
  }

  render() {
    return (
      <div>
        <h1 className="display-1">Need Help?</h1>
        <p className="lead">
          If you are in need, feel free to leave your contact info so that we
          can help you with you.
        </p>
        <form
          id="help-form"
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
            <p>Phone</p>
            <input
              id="phone"
              type="text"
              className="form-control"
              placeholder=""
              name="phone"
            />
          </div>

          <div className="form-group">
            <p>Email</p>
            <input
              id="email"
              type="text"
              className="form-control"
              placeholder=""
              name="email"
            />
          </div>

          <div className="form-group">
            <p>Date of Birth*</p>
            <input
              type="date"
              className="form-control"
              placeholder=""
              name="birthday"
              id="birthday"
            />
          </div>

          <div className="form-group">
            <p>Camp Location (Area)</p>
            <input
              id="location"
              type="text"
              className="form-control"
              placeholder=""
              name="location"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact">Age / Gender</label>
            <select className="form-control" id="genderage">
              <option value="">Select One*</option>
              <option value="Male Child">Male Child</option>
              <option value="Female Child">Female Child</option>
              <option value="Male Adult">Male Adult</option>
              <option value="Female Adult">Female Adult</option>
            </select>
          </div>

          <div className="form-group row">
            <div className="col">
              <label htmlFor="contact">Shirt Size</label>
              <select className="form-control" id="shirt">
                <option value="">Select One*</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="contact">Pant Size</label>
              <select className="form-control" id="pant">
                <option value="">Select One*</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <div className="col">
              <label htmlFor="contact">Sock Size</label>
              <select className="form-control" id="sock">
                <option value="">Select One*</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
            </div>
            <div className="col">
              <label htmlFor="contact">Underwear Size</label>
              <select className="form-control" id="underwear">
                <option value="">Select One*</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
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

export default HomelessForm;
