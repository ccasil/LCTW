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

// image routes for Event 16
import event16_image1 from "../../images/Events/Event_16/1.JPG";
import event16_image2 from "../../images/Events/Event_16/2.JPG";
import event16_image3 from "../../images/Events/Event_16/3.JPG";
import event16_image4 from "../../images/Events/Event_16/4.JPG";
import event16_image5 from "../../images/Events/Event_16/5.JPG";
import event16_image6 from "../../images/Events/Event_16/6.JPG";
import event16_image7 from "../../images/Events/Event_16/7.JPG";
import event16_image8 from "../../images/Events/Event_16/8.JPG";
import event16_image9 from "../../images/Events/Event_16/9.JPG";
import event16_image10 from "../../images/Events/Event_16/10.JPG";
import event16_image11 from "../../images/Events/Event_16/11.JPG";
import event16_image12 from "../../images/Events/Event_16/12.JPG";
import event16_image13 from "../../images/Events/Event_16/13.JPG";
import event16_image14 from "../../images/Events/Event_16/14.JPG";
import event16_image15 from "../../images/Events/Event_16/15.JPG";
import event16_image16 from "../../images/Events/Event_16/16.JPG";
import event16_image17 from "../../images/Events/Event_16/17.JPG";
import event16_image18 from "../../images/Events/Event_16/18.JPG";
import event16_image19 from "../../images/Events/Event_16/19.JPG";
import event16_image20 from "../../images/Events/Event_16/20.JPG";

// image routes for Event 17
import event17_image1 from "../../images/Events/Event_17/1.JPG";
import event17_image2 from "../../images/Events/Event_17/2.JPG";
import event17_image3 from "../../images/Events/Event_17/3.JPG";
import event17_image4 from "../../images/Events/Event_17/4.JPG";
import event17_image5 from "../../images/Events/Event_17/5.JPG";
import event17_image6 from "../../images/Events/Event_17/6.JPG";
import event17_image7 from "../../images/Events/Event_17/7.JPG";
import event17_image8 from "../../images/Events/Event_17/8.JPG";
import event17_image9 from "../../images/Events/Event_17/9.JPG";
import event17_image10 from "../../images/Events/Event_17/10.JPG";
import event17_image11 from "../../images/Events/Event_17/11.JPG";
import event17_image12 from "../../images/Events/Event_17/12.JPG";
import event17_image13 from "../../images/Events/Event_17/13.JPG";
import event17_image14 from "../../images/Events/Event_17/14.JPG";
import event17_image15 from "../../images/Events/Event_17/15.JPG";
import event17_image16 from "../../images/Events/Event_17/16.JPG";
import event17_image17 from "../../images/Events/Event_17/17.JPG";
import event17_image18 from "../../images/Events/Event_17/18.JPG";
import event17_image19 from "../../images/Events/Event_17/19.JPG";
import event17_image20 from "../../images/Events/Event_17/20.JPG";
import event17_image21 from "../../images/Events/Event_17/21.JPG";
import event17_image22 from "../../images/Events/Event_17/22.JPG";
import event17_image23 from "../../images/Events/Event_17/23.JPG";
import event17_image24 from "../../images/Events/Event_17/24.JPG";
import event17_image25 from "../../images/Events/Event_17/25.JPG";
import event17_image26 from "../../images/Events/Event_17/26.JPG";

import event17_image27 from "../../images/Events/Event_17/27.JPG";
import event17_image28 from "../../images/Events/Event_17/28.JPG";
import event17_image29 from "../../images/Events/Event_17/29.JPG";
import event17_image30 from "../../images/Events/Event_17/30.JPG";
import event17_image31 from "../../images/Events/Event_17/31.JPG";
import event17_image32 from "../../images/Events/Event_17/32.JPG";
import event17_image33 from "../../images/Events/Event_17/33.JPG";
import event17_image34 from "../../images/Events/Event_17/34.JPG";
import event17_image35 from "../../images/Events/Event_17/35.JPG";
import event17_image36 from "../../images/Events/Event_17/36.JPG";
import event17_image37 from "../../images/Events/Event_17/37.JPG";
import event17_image38 from "../../images/Events/Event_17/38.JPG";
import event17_image39 from "../../images/Events/Event_17/39.JPG";
import event17_image40 from "../../images/Events/Event_17/40.JPG";
import event17_image41 from "../../images/Events/Event_17/41.JPG";
import event17_image42 from "../../images/Events/Event_17/42.JPG";
import event17_image43 from "../../images/Events/Event_17/43.JPG";
import event17_image44 from "../../images/Events/Event_17/44.JPG";
import event17_image45 from "../../images/Events/Event_17/45.JPG";
import event17_image46 from "../../images/Events/Event_17/46.JPG";
import event17_image47 from "../../images/Events/Event_17/47.JPG";
import event17_image48 from "../../images/Events/Event_17/48.JPG";
import event17_image49 from "../../images/Events/Event_17/49.JPG";
import event17_image50 from "../../images/Events/Event_17/50.JPG";
import event17_image51 from "../../images/Events/Event_17/51.JPG";
import event17_image52 from "../../images/Events/Event_17/52.JPG";
import event17_image53 from "../../images/Events/Event_17/53.JPG";
import event17_image55 from "../../images/Events/Event_17/55.JPG";

import event17_image56 from "../../images/Events/Event_17/56.JPG";


import event17_image57 from "../../images/Events/Event_17/57.JPG";
import event17_image58 from "../../images/Events/Event_17/58.JPG";
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
    const imgArr_event16 = [
      event16_image1,
      event16_image2,
      event16_image3,
      event16_image4,
      event16_image5,
      event16_image6,
      event16_image7,
      event16_image8,
      event16_image9,
      event16_image10,
      event16_image11,
      event16_image12,
      event16_image13,
      event16_image14,
      event16_image15,
      event16_image16,
      event16_image17,
      event16_image18,
      event16_image19,
      event16_image20
    ];

    const imgArr_event17 = [
      event17_image1,
      event17_image2,
      event17_image3,
      event17_image4,
      event17_image5,
      event17_image6,
      event17_image7,
      event17_image8,
      event17_image9,
      event17_image10,
      event17_image11,
      event17_image12,
      event17_image13,
      event17_image14,
      event17_image15,
      event17_image16,
      event17_image17,
      event17_image17,
      event17_image18,
      event17_image19,
      event17_image20,
      event17_image21,
      event17_image22,
      event17_image23,
      event17_image24,
      event17_image25,
      event17_image26,
      event17_image27,
      event17_image28,
      event17_image29,
      event17_image30,
      event17_image31,
      event17_image32,
      event17_image33,
      event17_image34,
      event17_image35,
      event17_image36,
      event17_image37,
      event17_image37,
      event17_image38,
      event17_image39,
      event17_image40,
      event17_image41,
      event17_image42,
      event17_image43,
      event17_image44,
      event17_image45,
      event17_image46,
      event17_image47,
      event17_image48,
      event17_image49,
      event17_image50
    ];
    let { leftIcon, rightIcon } = this.state;

    return <div>

        <h1 className="display-1">Events</h1>
        <h1 className="display-4">
          #LCTW LOVE YouR Neighbor Outreach Santa Clara County... January
          “2019” What a #LOVING time we had today serving the #HOMELESS @
          Los Lago Golf Course and ST. James Park...
        </h1>
        <p>
          We gave away over 300 Love Blessings Candy & Condoms #LBCC, Love
          Blessings Gift Bags #LBGB, Hats, Scarfs, Gloves, Socks & Air
          mattresses... *New items we gave away dog food and trash bags...
        </p>
       
        <div className="row">
          <div className="col-md-12" style={{ marginTop: 40, marginBottom: 300 }}>
            <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
              {imgArr_event17.map(function(image, index) {
                return <div className="text-center" key={index}>
                    <img className="eventImg" src={image} alt="" />
                  </div>;
              })}
            </RBCarousel>
          </div>
        </div>
        <h1 className="display-4">
          #LCTW LOVE YouR Neighbor “THE MIRACLE”
        </h1>
      <p> ✨THE #MIRACLE OF THE DAY!!! Was when the man pull up on the side of us with a truck full of JACKETS & PILLOWS... The only items MISSING GOD supplied with LOVE ... #THEMIRACLE
          </p>
        <div className="row">
          <div className="col-md-12" style={{ marginTop: 40, marginBottom: 300 }}>
            <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
              {imgArr_event16.map(function(image, index) {
                return <div className="text-center" key={index}>
                    <img className="eventImg" src={image} alt="" />
                  </div>;
              })}
            </RBCarousel>
          </div>
        </div>
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
