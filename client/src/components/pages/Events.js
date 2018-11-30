import React, { Component } from "react";
import "../css/Events.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import RBCarousel from "react-bootstrap-carousel";
import { Link } from "react-router-dom";

// upcoming events placeholder routes
import nextevent3 from "../../images/Fliers/3.jpeg";
import nextevent2 from "../../images/Fliers/2.JPG";

// image routes for Event 13
import event13_image1 from "../../images/Events/Event_13/1.JPG";
import event13_image2 from "../../images/Events/Event_13/2.JPG";
import event13_image3 from "../../images/Events/Event_13/3.JPG";
import event13_image4 from "../../images/Events/Event_13/4.JPG";
import event13_image5 from "../../images/Events/Event_13/5.JPG";
import event13_image6 from "../../images/Events/Event_13/6.JPG";
import event13_image7 from "../../images/Events/Event_13/7.JPG";
import event13_image8 from "../../images/Events/Event_13/8.JPG";

// image routes for Event 14
import event14_image1 from "../../images/Events/Event_14/1.JPG";
import event14_image2 from "../../images/Events/Event_14/2.JPG";
import event14_image3 from "../../images/Events/Event_14/3.JPG";
import event14_image4 from "../../images/Events/Event_14/4.JPG";
import event14_image5 from "../../images/Events/Event_14/5.JPG";
import event14_image6 from "../../images/Events/Event_14/6.JPG";
import event14_image7 from "../../images/Events/Event_14/7.JPG";
import event14_image8 from "../../images/Events/Event_14/8.JPG";
import event14_image9 from "../../images/Events/Event_14/9.JPG";
import event14_image10 from "../../images/Events/Event_14/10.JPG";
import event14_image11 from "../../images/Events/Event_14/11.JPG";
import event14_image14 from "../../images/Events/Event_14/14.JPG";
import event14_image15 from "../../images/Events/Event_14/15.JPG";
import event14_image16 from "../../images/Events/Event_14/16.JPG";
import event14_image17 from "../../images/Events/Event_14/17.JPG";
import event14_image18 from "../../images/Events/Event_14/18.JPG";
import event14_image19 from "../../images/Events/Event_14/19.JPG";
import event14_image20 from "../../images/Events/Event_14/20.JPG";
import event14_image21 from "../../images/Events/Event_14/21.JPG";
import event14_image22 from "../../images/Events/Event_14/22.JPG";
import event14_image23 from "../../images/Events/Event_14/23.JPG";
import event14_image24 from "../../images/Events/Event_14/24.JPG";
import event14_image25 from "../../images/Events/Event_14/25.JPG";
import event14_image26 from "../../images/Events/Event_14/26.JPG";

// image routes for Event 15
import event15_image1 from "../../images/Events/Event_15/1.jpg";
import event15_image2 from "../../images/Events/Event_15/2.jpg";
import event15_image3 from "../../images/Events/Event_15/3.jpg";
import event15_image4 from "../../images/Events/Event_15/4.jpg";
import event15_image5 from "../../images/Events/Event_15/5.jpg";
import event15_image6 from "../../images/Events/Event_15/6.jpg";
import event15_image7 from "../../images/Events/Event_15/7.jpg";
import event15_image8 from "../../images/Events/Event_15/8.jpg";
import event15_image9 from "../../images/Events/Event_15/9.jpg";
import event15_image10 from "../../images/Events/Event_15/10.jpg";
import event15_image11 from "../../images/Events/Event_15/11.jpg";
import event15_image12 from "../../images/Events/Event_15/12.jpg";
import event15_image13 from "../../images/Events/Event_15/13.jpg";
import event15_image14 from "../../images/Events/Event_15/14.jpg";
import event15_image15 from "../../images/Events/Event_15/15.jpg";
import event15_image16 from "../../images/Events/Event_15/16.jpg";
import event15_image17 from "../../images/Events/Event_15/17.jpg";
import event15_image18 from "../../images/Events/Event_15/18.jpg";
import event15_image19 from "../../images/Events/Event_15/19.jpg";
import event15_image20 from "../../images/Events/Event_15/20.jpg";
import event15_image21 from "../../images/Events/Event_15/21.jpg";
import event15_image22 from "../../images/Events/Event_15/22.jpg";
import event15_image23 from "../../images/Events/Event_15/23.jpg";
import event15_image24 from "../../images/Events/Event_15/24.jpg";
import event15_image25 from "../../images/Events/Event_15/25.jpg";
import event15_image26 from "../../images/Events/Event_15/26.jpg";

class Events extends Component {
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

  //   Toggle Upcoming Events
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
    const imgArr_event13 = [
      event13_image1,
      event13_image2,
      event13_image3,
      event13_image4,
      event13_image5,
      event13_image6,
      event13_image7,
      event13_image8
    ];
    const imgArr_event14 = [
      event14_image1,
      event14_image2,
      event14_image3,
      event14_image4,
      event14_image5,
      event14_image6,
      event14_image7,
      event14_image8,
      event14_image9,
      event14_image10,
      event14_image11,
      event14_image14,
      event14_image15,
      event14_image16,
      event14_image17,
      event14_image18,
      event14_image19,
      event14_image20,
      event14_image21,
      event14_image22,
      event14_image23,
      event14_image24,
      event14_image25,
      event14_image26
    ];
    const imgArr_event15 = [
      event15_image1,
      event15_image2,
      event15_image3,
      event15_image4,
      event15_image5,
      event15_image6,
      event15_image7,
      event15_image8,
      event15_image9,
      event15_image10,
      event15_image11,
      event15_image12,
      event15_image13,
      event15_image14,
      event15_image15,
      event15_image15,
      event15_image16,
      event15_image17,
      event15_image18,
      event15_image19,
      event15_image20,
      event15_image21,
      event15_image22,
      event15_image23,
      event15_image24,
      event15_image25,
      event15_image26
    ];
    let { leftIcon, rightIcon } = this.state;

    return <div>
        <h1 className="display-1">Events</h1>

        <div className="col-12">
          <Button className="btn-block btn-lg" color="danger" onClick={this.togglecalendar}>
            Love Changing the World Calendar
          </Button>
          <Modal isOpen={this.state.calendarmodal} toggle={this.togglecalendar} className={this.props.className}>
            <ModalHeader toggle={this.togglecalendar}>
              Love Changing the World Calendar
            </ModalHeader>
            <ModalBody>
              <iframe title="LCTW Calendar" src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showPrint=0&amp;showTabs=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ff6666&amp;src=en.usa%23holiday%40group.v.calendar.google.com&amp;color=%23125A12&amp;src=lovechangingtheworld.org_lk5gh80s8hbnidsutdv2c89obs%40group.calendar.google.com&amp;color=%2342104A&amp;src=lovechangingtheworld.org_6b8fgr51gh1c4emfg33ol76ppg%40group.calendar.google.com&amp;color=%23865A5A&amp;ctz=America%2FLos_Angeles" style={{ border: "solid 1px #777" }} width="800" height="600" frameBorder="0" scrolling="no" />
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
            <h5>LOVE starts at HomeFirst </h5>
            <h5>Holiday LOVE Blessings Give-A-Way</h5>
            <a className="btn-block" color="danger" onClick={this.toggle12}>
              <img className="btnImg" style={{ height: "100%" }} src={nextevent3} alt="" />
            </a>
            <Modal isOpen={this.state.modal12} toggle={this.toggle12} className={this.props.className}>
              <ModalHeader toggle={this.toggle12}>
                LOVE starts at HomeFirst Holiday LOVE Blessings Give-A-Way
              </ModalHeader>
              <ModalBody>
                <img className="" src={nextevent3} style={{ height: "100%" }} alt="nextevent3" />
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle12}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          {/* <div className="col">
            <h5>
              <span role="img" aria-label="water">
                💧🌨
              </span>
              CRY OUT
              <span role="img" aria-label="water">
                ❄️💦
              </span>
            </h5>
            <h5>LOVE Blessings Give-A-Way</h5>
            <a className="btn-block" color="danger" onClick={this.toggle13}>
              <img className="btnImg" style={{ height: "100%"}} src={nextevent2} alt="" />
            </a>
            <Modal isOpen={this.state.modal13} toggle={this.toggle13} className={this.props.className}>
              <ModalHeader toggle={this.toggle13}>
                LOVE Blessings Give-A-Way
              </ModalHeader>
              <ModalBody className="text-center">
                <img src={nextevent2} style={{ height: "100%" }} alt="nextevent2" />
                <p className="lead font-weight-bold">It's Cold Outside</p>
                <p className="lead">
                  #LCTW is current seeking donations of jackets, sweaters,
                  blankets, hats, scarves, gloves, socks, long johns,
                  backpacks, and other items for this upcoming event!
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggle13}>
                  Close
                </Button>
              </ModalFooter>
            </Modal>
          </div> */}
        </div>
        <h1 className="display-1">Previous Events</h1>
        <h1 className="display-4">
          LCTW LOVE starts at HomeFirst 2nd Courtyard BBQ
        </h1>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: 40, marginBottom: 300 }}>
            <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
              {imgArr_event15.map(function(image, index) {
                return <div className="text-center" key={index}>
                    <img className="eventImg" src={image} alt="" />
                  </div>;
              })}
            </RBCarousel>
          </div>
        </div>
        <h1 className="display-4">
          LCTW San Joaquin County Homeless Outreach
        </h1>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: 40, marginBottom: 300 }}>
            <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
              {imgArr_event14.map(function(image, index) {
                return <div className="text-center" key={index}>
                    <img className="eventImg" src={image} alt="" />
                  </div>;
              })}
            </RBCarousel>
          </div>
        </div>
        <h1 className="display-4">LOVE starts at HomeFirst</h1>
        <h1 className="display-4">Courtyard BBQ #1</h1>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: 40, marginBottom: 300 }}>
            <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
              {imgArr_event13.map(function(image, index) {
                return <div className="text-center" key={index}>
                    <img className="eventImg" src={image} alt="" />
                  </div>;
              })}
            </RBCarousel>
          </div>
        </div>

        <h5 className="lead text-center">
          <Link to="/pastevents" onClick={() => window.scrollTo(0, 0)}>
            Past Events
          </Link>
        </h5>
      </div>;
  }
}
export default Events;
