import React, { Component } from "react";
import axios from "axios";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../css/Fundraisers.css";

// image routes for Event 2
import event2_image9 from "../../images/Events/Event_2/9.jpg";
import event2_image10 from "../../images/Events/Event_2/10.jpg";
import event2_image11 from "../../images/Events/Event_2/11.jpg";
import event2_image12 from "../../images/Events/Event_2/12.jpg";
import event2_image13 from "../../images/Events/Event_2/13.jpg";
import event2_image14 from "../../images/Events/Event_2/14.jpg";
import event2_image15 from "../../images/Events/Event_2/15.jpg";
import event2_image16 from "../../images/Events/Event_2/16.jpg";
import event2_image17 from "../../images/Events/Event_2/17.jpg";
import event2_image18 from "../../images/Events/Event_2/18.jpg";
import event2_image19 from "../../images/Events/Event_2/19.jpg";
import event2_image20 from "../../images/Events/Event_2/20.jpg";
import event2_image21 from "../../images/Events/Event_2/21.jpg";
import event2_image22 from "../../images/Events/Event_2/22.jpg";
import event2_image23 from "../../images/Events/Event_2/23.jpg";
import event2_image24 from "../../images/Events/Event_2/24.jpg";
import event2_image25 from "../../images/Events/Event_2/25.jpg";
import event2_image26 from "../../images/Events/Event_2/26.jpg";
import event2_image27 from "../../images/Events/Event_2/27.jpg";
import event2_image28 from "../../images/Events/Event_2/28.jpg";
import event2_image29 from "../../images/Events/Event_2/29.jpg";
import event2_image30 from "../../images/Events/Event_2/30.jpg";
import event2_image31 from "../../images/Events/Event_2/31.jpg";
import event2_image32 from "../../images/Events/Event_2/32.jpg";
import event2_image33 from "../../images/Events/Event_2/33.jpg";
import event2_image34 from "../../images/Events/Event_2/34.jpg";
import event2_image35 from "../../images/Events/Event_2/35.jpg";
import event2_image36 from "../../images/Events/Event_2/36.jpg";
import event2_image37 from "../../images/Events/Event_2/37.jpg";
import event2_image38 from "../../images/Events/Event_2/38.jpg";
import event2_image39 from "../../images/Events/Event_2/39.jpg";
import event2_image40 from "../../images/Events/Event_2/40.jpg";
import event2_image41 from "../../images/Events/Event_2/41.jpg";
import event2_image42 from "../../images/Events/Event_2/42.jpg";
import event2_image43 from "../../images/Events/Event_2/43.jpg";
import event2_image44 from "../../images/Events/Event_2/44.jpg";
import event2_image45 from "../../images/Events/Event_2/45.jpg";
import event2_image46 from "../../images/Events/Event_2/46.jpg";
import event2_image47 from "../../images/Events/Event_2/47.jpg";
import event2_image48 from "../../images/Events/Event_2/48.jpg";
import event2_image49 from "../../images/Events/Event_2/49.jpg";
import event2_image50 from "../../images/Events/Event_2/50.jpg";
import event2_image51 from "../../images/Events/Event_2/51.jpg";
import event2_image52 from "../../images/Events/Event_2/52.jpg";
import event2_image53 from "../../images/Events/Event_2/53.jpg";
import event2_image54 from "../../images/Events/Event_2/54.jpg";
import event2_image55 from "../../images/Events/Event_2/55.jpg";
import event2_image56 from "../../images/Events/Event_2/56.jpg";
import event2_image57 from "../../images/Events/Event_2/57.jpg";
import event2_image58 from "../../images/Events/Event_2/58.jpg";
import event2_image59 from "../../images/Events/Event_2/59.jpg";
import event2_image60 from "../../images/Events/Event_2/60.jpg";
import event2_image61 from "../../images/Events/Event_2/61.jpg";
import event2_image62 from "../../images/Events/Event_2/62.jpg";
import event2_image63 from "../../images/Events/Event_2/63.jpg";
import event2_image64 from "../../images/Events/Event_2/64.jpg";
import event2_image65 from "../../images/Events/Event_2/65.jpg";
import event2_image66 from "../../images/Events/Event_2/66.jpg";
import event2_image67 from "../../images/Events/Event_2/67.jpg";
import event2_image68 from "../../images/Events/Event_2/68.jpg";
import event2_image69 from "../../images/Events/Event_2/69.jpg";
import event2_image70 from "../../images/Events/Event_2/70.jpg";
import event2_image71 from "../../images/Events/Event_2/71.jpg";
import event2_image72 from "../../images/Events/Event_2/72.jpg";
import event2_image73 from "../../images/Events/Event_2/73.jpg";
import event2_image74 from "../../images/Events/Event_2/74.jpg";
import event2_image75 from "../../images/Events/Event_2/75.jpg";
import event2_image76 from "../../images/Events/Event_2/76.jpg";
import event2_image77 from "../../images/Events/Event_2/77.jpg";
import event2_image78 from "../../images/Events/Event_2/78.jpg";
import event2_image79 from "../../images/Events/Event_2/79.jpg";
import event2_image80 from "../../images/Events/Event_2/80.jpg";
import event2_image81 from "../../images/Events/Event_2/81.jpg";
import event2_image82 from "../../images/Events/Event_2/82.jpg";
import event2_image83 from "../../images/Events/Event_2/83.jpg";
import event2_image84 from "../../images/Events/Event_2/84.jpg";
import event2_image85 from "../../images/Events/Event_2/85.jpg";
import event2_image86 from "../../images/Events/Event_2/86.jpg";
import event2_image87 from "../../images/Events/Event_2/87.jpg";
import event2_image88 from "../../images/Events/Event_2/88.jpg";
import event2_image89 from "../../images/Events/Event_2/89.jpg";
import event2_image90 from "../../images/Events/Event_2/90.jpg";
import event2_image91 from "../../images/Events/Event_2/91.jpg";
import event2_image92 from "../../images/Events/Event_2/92.jpg";
import event2_image93 from "../../images/Events/Event_2/93.jpg";
import event2_image94 from "../../images/Events/Event_2/94.jpg";
import event2_image95 from "../../images/Events/Event_2/95.jpg";
import event2_image96 from "../../images/Events/Event_2/96.jpg";
import event2_image97 from "../../images/Events/Event_2/97.jpg";
import event2_image98 from "../../images/Events/Event_2/98.jpg";
import event2_image99 from "../../images/Events/Event_2/99.jpg";
import event2_image100 from "../../images/Events/Event_2/100.jpg";
import event2_image101 from "../../images/Events/Event_2/101.jpg";
import event2_image102 from "../../images/Events/Event_2/102.jpg";
import event2_image103 from "../../images/Events/Event_2/103.jpg";
import event2_image104 from "../../images/Events/Event_2/104.jpg";
import event2_image105 from "../../images/Events/Event_2/105.jpg";
import event2_image106 from "../../images/Events/Event_2/106.jpg";
import event2_image107 from "../../images/Events/Event_2/107.jpg";
import event2_image108 from "../../images/Events/Event_2/108.jpg";
import event2_image109 from "../../images/Events/Event_2/109.jpg";
import event2_image110 from "../../images/Events/Event_2/100.jpg";
import event2_image111 from "../../images/Events/Event_2/101.jpg";
import event2_image112 from "../../images/Events/Event_2/102.jpg";
import event2_image113 from "../../images/Events/Event_2/103.jpg";
import event2_image114 from "../../images/Events/Event_2/114.jpg";

class Fundraisers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      disabled: false,
      text: "Please select an event"
    };
    this.change = this.change.bind(this);
    this.switchText = this.switchText.bind(this);
  }
  change(event) {
    console.log(event.target.value);
    this.setState({
      value: event.target.value,
      text: this.switchText(event.target.value)
    });
    console.log(this.state);
  }
  switchText(param) {
    switch (param) {
      case "":
        return "Please select an event";
      case "Building Bonds Through LOVE":
        return "LOVE activities include: waterballoon fights, relay races, and other fun bonding experiences";
      case "Sip & Glam":
        return "Ladies LOVE to look good; let us spruce up your life";
      case "Sip & Paint":
        return "Arts and crafts are fun for everyone, we will provide the paint, canvases, and entertainment";

      default:
        return this.state.text;
    }
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
    const type = document.getElementById("type").value;
    const event = document.getElementById("event").value;
    const activities = document.getElementById("activities").value;

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
      axios({
        method: "POST",
        url: "http://lovechangingtheworld.org:8000/sendfundraiser",
        data: {
          first_name: first_name,
          last_name: last_name,
          phone: parsedPhone,
          email: email,
          type: type,
          event: event,
          activities: activities
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
    document.getElementById("fundraiser-form").reset();
  }

  onSelect = (active, direction) => {
    // console.log(`active=${active} && direction=${direction}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    if (leftIcon && rightIcon) {
      this.setState({
        leftIcon: undefined,
        rightIcon: undefined
      });
    } else {
      this.setState({
        leftIcon: <span className="fa fa-glass" />,
        rightIcon: <span className="fa fa-music" />
      });
    }
  };
  render() {
    const sipandpaint = [
      event2_image9,
      event2_image10,
      event2_image11,
      event2_image12,
      event2_image13,
      event2_image14,
      event2_image15,
      event2_image16,
      event2_image17,
      event2_image18,
      event2_image19,
      event2_image20,
      event2_image21,
      event2_image22,
      event2_image23,
      event2_image24,
      event2_image25,
      event2_image26,
      event2_image27,
      event2_image28,
      event2_image29,
      event2_image30,
      event2_image31,
      event2_image32,
      event2_image33,
      event2_image34,
      event2_image35,
      event2_image36,
      event2_image37,
      event2_image38,
      event2_image39,
      event2_image40,
      event2_image41,
      event2_image42,
      event2_image43,
      event2_image44,
      event2_image45,
      event2_image46,
      event2_image47,
      event2_image48,
      event2_image49,
      event2_image50,
      event2_image51,
      event2_image52,
      event2_image53,
      event2_image54,
      event2_image55,
      event2_image56,
      event2_image57,
      event2_image58,
      event2_image59,
      event2_image60,
      event2_image61,
      event2_image62,
      event2_image63,
      event2_image64,
      event2_image65,
      event2_image66,
      event2_image67,
      event2_image68,
      event2_image69,
      event2_image70,
      event2_image71,
      event2_image72,
      event2_image73,
      event2_image74,
      event2_image75,
      event2_image76,
      event2_image77,
      event2_image78,
      event2_image79,
      event2_image80,
      event2_image81,
      event2_image82,
      event2_image83,
      event2_image84,
      event2_image85,
      event2_image86,
      event2_image87,
      event2_image88,
      event2_image89,
      event2_image90,
      event2_image91,
      event2_image92,
      event2_image93,
      event2_image94,
      event2_image95,
      event2_image96,
      event2_image97,
      event2_image98,
      event2_image99,
      event2_image100,
      event2_image101,
      event2_image102,
      event2_image103,
      event2_image104,
      event2_image105,
      event2_image106,
      event2_image107,
      event2_image108,
      event2_image109,
      event2_image110,
      event2_image111,
      event2_image112,
      event2_image113,
      event2_image114
    ];
    let { leftIcon, rightIcon } = this.state;
    return (
      <div>
        <h2 className="display-1 text-center">Want to have a Fundraiser?</h2>
        <p className="lead">
          Leave your contact info here so that we can host your next fundraising
          event!
        </p>
        <ul className="list-unstyled">
          <li>Bring families back together with LOVE events...</li>
          <li>
            To build family relationships by having them interact with each
            other while doing fun activities
          </li>
          <li>Food and drinks not included!</li>
        </ul>

        <form
          id="fundraiser-form"
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
            <label htmlFor="contact">Type*</label>
            <select className="form-control" id="type">
              <option value="">Select One*</option>
              <option value="Family">Family</option>
              <option value="Corporate">Corporate</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="contact">Event*</label>
            <select
              className="form-control"
              id="event"
              onChange={this.change}
              value={this.state.value}
            >
              <option value="">Select One*</option>
              <option value="Building Bonds Through LOVE">
                Building Bonds Through LOVE
              </option>
              <option value="Sip &amp; Glam">Sip &amp; Glam</option>
              <option value="Sip &amp; Paint">Sip &amp; Paint</option>
            </select>
          </div>

          <p className="font-weight-bold">{this.state.text}</p>

          <div className="form-group">
            <p>Types of Activities</p>
            <textarea
              className="form-control"
              placeholder=""
              rows="3"
              name="activities"
              id="activities"
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

        <h3 className="display-1 text-center">
          1st Family Love Sip &amp; Paint Fundraiser Event
        </h3>
        <div className="row">
          <div
            className="col-md-12"
            style={{ marginTop: 40, marginBottom: 100 }}
          >
            <RBCarousel
              animation={true}
              autoplay={this.state.autoplay}
              slideshowSpeed={7000}
              leftIcon={leftIcon}
              rightIcon={rightIcon}
              onSelect={this.onSelect}
              ref={r => (this.slider = r)}
              version={4}
            >
              {sipandpaint.map(function(image, index) {
                return (
                  <div className="text-center" key={index}>
                    <img src={image} style={{ height: 600 }} alt="" />
                  </div>
                );
              })}
            </RBCarousel>
          </div>
        </div>
      </div>
    );
  }
}

export default Fundraisers;
