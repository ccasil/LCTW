import React, { Component } from "react";
import "../css/Outreach.css";
import { Link } from "react-router-dom";
import nextevent5 from "../../images/Fliers/5.JPG";
import nextevent4 from "../../images/Fliers/4.JPG";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Outreach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal12: false,
      modal13: false,
      calendarmodal: false,
      autoplay: true
    };

    this.togglecalendar = this.togglecalendar.bind(this);
    this.toggle12 = this.toggle12.bind(this);
    this.toggle13 = this.toggle13.bind(this);
  }

  togglecalendar() {
    this.setState({
      calendarmodal: !this.state.calendarmodal
    });
  }
  toggle12() {
    this.setState({
      modal12: !this.state.modal12
    });
  }
  toggle13() {
    this.setState({
      modal13: !this.state.modal13
    });
  }

  //   Toggle Previous Events
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
    return (
      <div>
        <h1 className="display-1">Outreach</h1>
        <div className="col-12">
          <Button
            className="btn-block btn-lg"
            color="danger"
            onClick={this.togglecalendar}
          >
            Love Changing the World Calendar
          </Button>
          <Modal
            isOpen={this.state.calendarmodal}
            toggle={this.togglecalendar}
            className={this.props.className}
          >
            <ModalHeader toggle={this.togglecalendar}>
              Love Changing the World Calendar
            </ModalHeader>
            <ModalBody>
              <iframe
                title="LCTW Calendar"
                src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ff6666&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;src=lovechangingtheworld.org_lk5gh80s8hbnidsutdv2c89obs%40group.calendar.google.com&amp;color=%2342104A&amp;src=lovechangingtheworld.org_6b8fgr51gh1c4emfg33ol76ppg%40group.calendar.google.com&amp;color=%23865A5A&amp;ctz=America%2FLos_Angeles"
                style={{ border: "solid 1px #777" }}
                width="800"
                height="600"
                frameBorder="0"
                scrolling="no"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.togglecalendar}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>

        <h4 className="text-center display-4 font-weight-bold">
          Upcoming Events
        </h4>

        <div className="row">
          <div className="col">
            <h5>#LCTW ReaLOVE Inspiration & Prayer Support Group</h5>
            <h5>
              Every 1st & 3rd Wednesday of every month 8:30PM-10:00PM @
              HomeFirst
            </h5>
            <a className="btn-block" color="danger" onClick={this.toggle12}>
              <img
                className="btnImg"
                style={{ height: "100%" }}
                src={nextevent4}
                alt=""
              />
              <p className="lead">Click here for more info</p>
            </a>
            <Modal
              isOpen={this.state.modal12}
              toggle={this.toggle12}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle12}>
                #LCTW ReaLOVE Inspiration & Prayer Support Group
              </ModalHeader>
              <ModalBody>
                <img
                  className=""
                  src={nextevent4}
                  style={{ height: "100%" }}
                  alt="nextevent3"
                />
                <p className="lead">
                  This LOVING support group is to inspire and encourage each
                  person with new short and long term goals to help you
                  better your FUTURE... PRAYER is available to everyone and
                  yet optional...
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle12}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <div className="col">
            <h5>#LCTW Green Apple Sip & Paint</h5>
            <h5>Sunday, March 17, 2019 3pm – 7pm</h5>
            <br />
            <a className="btn-block" color="danger" onClick={this.toggle12}>
              <img
                className="btnImg"
                style={{ height: "100%" }}
                src={nextevent5}
                alt=""
              />
              <p className="lead">Click here for more info</p>
            </a>
            <Modal
              isOpen={this.state.modal12}
              toggle={this.toggle12}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle12}>
                #LCTW Green Apple Sip & Paint
              </ModalHeader>
              <ModalBody>
                <img
                  className=""
                  src={nextevent5}
                  style={{ height: "100%" }}
                  alt="nextevent5"
                />
                <p className="lead">Great FOOD!!!</p>
                <p className="lead">Great MUSIC!!!</p>
                <p className="lead">Great TIME!!!</p>
                <p className="lead">
                  Donations $25.00 with Paint $20.00 without Paint
                </p>
                <p className="lead">*LIMITED TICKETS AVAILABLE!!!</p>
                <p className="lead">💚 *INCREASE YOUR CHANCES TO WIN!!!</p>
                <p className="lead">
                  BRING A BLANKET and get a FREE RAFFLE TICKET!!!
                </p>
                <p className="lead">
                  Best Dressed “GREEN” GAMES and more… FULL OF LOVE!!!
                </p>
                <p className="lead">
                  Stop by our #LCTW shop and order your T-Shirts today!!!
                </p>
                <p className="lead">SEE YOU THERE!!!</p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle12}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

export default Outreach;
