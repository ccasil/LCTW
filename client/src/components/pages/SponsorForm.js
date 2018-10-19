import React, { Component } from 'react';
import axios from 'axios';

import "../css/SponsorForm.css";

import SCPublicHealth from '../../images/Sponsors/SCPublicHealth.png';
import PlannedParenthood from '../../images/Sponsors/PlannedParenthood.jpg';
import HomeFirst from '../../images/Sponsors/HomeFirst.png';

class SponsorForm extends Component {

  constructor(props){
      super(props);
      this.state = {
        disabled : false,
      }
    }

    handleSubmit = async (e) => {
                                  this.setState(
                                    {
                                      disabled: true
                                    }
                                  );
                                  e.preventDefault();
                                  const first_name = document.getElementById("first_name").value;
                                  const last_name = document.getElementById("last_name").value;
                                  const phone = document.getElementById("phone").value;
                                  const email = document.getElementById("email").value;
                                  const organization = document.getElementById("organization").value;
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
                                      method:
                                        "POST",
                                      url:
                                        "http://lovechangingtheworld.org:8000/sendsponsor",
                                      data: {
                                        first_name: first_name,
                                        last_name: last_name,
                                        phone: parsedPhone,
                                        email: email,
                                        organization: organization
                                      }
                                    }).then(
                                      response => {
                                        if (
                                          response
                                            .data
                                            .msg ===
                                          "success"
                                        ) {
                                          alert(
                                            "Message Sent"
                                          );
                                          this.resetForm();
                                          this.setState(
                                            {
                                              disabled: false
                                            }
                                          );
                                        } else {
                                          alert(
                                            "Message failed to send"
                                          );
                                          this.setState(
                                            {
                                              disabled: false
                                            }
                                          );
                                        }
                                      }
                                    );
                                  } else if (first_name && last_name && phoneReg.test(phone) && !reg.test(email)) {
                                    this.setState(
                                      {
                                        disabled: false
                                      }
                                    );
                                    alert("Please enter a valid email");
                                  } else if (first_name && last_name && !phoneReg.test(phone) && reg.test(email)) {
                                    this.setState(
                                      {
                                        disabled: false
                                      }
                                    );
                                    alert("Please enter valid phone number");
                                  } else {
                                    this.setState(
                                      {
                                        disabled: false
                                      }
                                    );
                                    alert("Please fill in the required fields");
                                  }
                                };
    resetForm() {
        document.getElementById("sponsor-form").reset();
    }

    render() {
        return <div>
            <h2 className="display-1 text-center">Want to become a Sponsor?</h2>
            <div className="centerimages">
                <a href="https://www.plannedparenthood.org/" target="_blank" rel="noopener noreferrer"><img className="w-100 img-fluid d-inline-block" src={PlannedParenthood} alt="Planned Parenthood"></img></a>
                <a href="https://www.sccgov.org/sites/phd/services/hiv-resources/pages/std-hiv-test-home.aspx" target="_blank" rel="noopener noreferrer"><img className="w-100 img-fluid d-inline-block" src={SCPublicHealth} alt="Santa Clara Public Health"></img></a>
                <a href="https://www.homefirstscc.org/cold-weather-shelters/" target="_blank" rel="noopener noreferrer"><img className="w-100 img-fluid d-inline-block" src={HomeFirst} alt="Home First"></img></a>
                <p className="lead sponsortext">As a sponsor you will be featured on our LCTW T-shirts and be able to advertise information about your business or organization in our LOVE Blessings Gift Bags!</p> 
            </div>
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
                        <p>Phone*</p>
                        <input id="phone" type="text" className="form-control" placeholder="" name="phone" />
                    </div>

                    <div className="form-group">
                        <p>Email*</p>
                        <input id="email" type="text" className="form-control" placeholder="" name="email" />
                    </div>
                    <div className="form-group">
                        <p>Organization / Website</p>
                        <textarea id="organization" className="form-control" placeholder="" rows="3" name="organization" />
                    </div>
                    
                    <button disabled={this.state.disabled} type="submit" className="btn btn-primary"> Submit </button>

                </form>
                <p className="lead">*Required</p>
            </div>;
    }
}


export default SponsorForm;
