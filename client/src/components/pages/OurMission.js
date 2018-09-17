import React, { Component } from 'react';
// import ReactDOM from "react-dom";
// import $ from 'jquery';

// import RBCarousel from "react-bootstrap-carousel";

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


import "../css/OurMission.css";

// image routes
// import image1 from '../../images/OurMissionImages/1_2_orig.jpg';
// import image2 from '../../images/OurMissionImages/1_5_orig.jpg';
// import image3 from '../../images/OurMissionImages/2_2_orig.jpg';
// import image4 from '../../images/OurMissionImages/3_3_orig.jpg';
// import image5 from '../../images/OurMissionImages/3_orig.jpeg';
// import image6 from '../../images/OurMissionImages/3_orig.jpg';
// import image7 from '../../images/OurMissionImages/4_1_orig.jpg';
// import image8 from '../../images/OurMissionImages/4_3_orig.jpg';
// import image9 from '../../images/OurMissionImages/5_2_orig.jpg';
// import image10 from '../../images/OurMissionImages/5_orig.jpg';
// import image11 from '../../images/OurMissionImages/6_1_orig.jpg';
// import image12 from '../../images/OurMissionImages/6_orig.jpg';
// import image13 from '../../images/OurMissionImages/7_1_orig.jpg';
// import image14 from '../../images/OurMissionImages/7_orig.jpg';
// import image15 from '../../images/OurMissionImages/8_1_orig.jpg';
// import image16 from '../../images/OurMissionImages/8_orig.jpg';
// import image17 from '../../images/OurMissionImages/9_1_orig.jpg';
// import image18 from '../../images/OurMissionImages/9_orig.jpg';
// import image19 from '../../images/OurMissionImages/10_1_orig.jpg';
// import image20 from '../../images/OurMissionImages/10_orig.jpg';
// import image21 from '../../images/OurMissionImages/11_orig.jpg';
// import image22 from '../../images/OurMissionImages/12_orig.jpg';
// import image23 from '../../images/OurMissionImages/13_1_orig.jpg';
// import image24 from '../../images/OurMissionImages/13_orig.jpg';
// import image25 from '../../images/OurMissionImages/14_1_orig.jpg';
// import image26 from '../../images/OurMissionImages/14_orig.jpg';
// import image27 from '../../images/OurMissionImages/15_1_orig.jpg';
// import image28 from '../../images/OurMissionImages/15_orig.jpg';
// import image29 from '../../images/OurMissionImages/16_orig.jpg';
// import image30 from '../../images/OurMissionImages/17_1_orig.jpg';
// import image31 from '../../images/OurMissionImages/17_orig.jpg';
// import image32 from '../../images/OurMissionImages/18_1_orig.jpg';
// import image33 from '../../images/OurMissionImages/18_orig.jpg';
// import image34 from '../../images/OurMissionImages/19_orig.jpg';
// import image35 from '../../images/OurMissionImages/20_1_orig.jpg';
// import image36 from '../../images/OurMissionImages/20_orig.jpg';
// import image37 from '../../images/OurMissionImages/21_1_orig.jpg';
// import image38 from '../../images/OurMissionImages/21_orig.jpg';
// import image39 from '../../images/OurMissionImages/22_1_orig.jpg';
// import image40 from '../../images/OurMissionImages/22_orig.jpg';
// import image41 from '../../images/OurMissionImages/23_1_orig.jpg';
// import image42 from '../../images/OurMissionImages/23_orig.jpg';
// import image43 from '../../images/OurMissionImages/24_1_orig.jpg';
// import image44 from '../../images/OurMissionImages/24_orig.jpg';
// import image45 from '../../images/OurMissionImages/25_1_orig.jpg';
// import image46 from '../../images/OurMissionImages/25_orig.jpg';
// import image47 from '../../images/OurMissionImages/26_1_orig.jpg';
// import image48 from '../../images/OurMissionImages/26_orig.jpg';
// import image49 from '../../images/OurMissionImages/27_1_orig.jpg';
// import image50 from '../../images/OurMissionImages/27_orig.jpg';
// import image51 from '../../images/OurMissionImages/28_1_orig.jpg';
// import image52 from '../../images/OurMissionImages/28_orig.jpg';
// import image53 from '../../images/OurMissionImages/29_orig.jpg';
// import image54 from '../../images/OurMissionImages/30_1_orig.jpg';
// import image55 from '../../images/OurMissionImages/30_orig.jpg';
// import image56 from '../../images/OurMissionImages/31_1_orig.jpg';
// import image57 from '../../images/OurMissionImages/31_orig.jpg';
// import image58 from '../../images/OurMissionImages/32_1_orig.jpg';
// import image59 from '../../images/OurMissionImages/32_orig.jpg';
// import image60 from '../../images/OurMissionImages/33_1_orig.jpg';
// import image61 from '../../images/OurMissionImages/33_orig.jpg';
// import image62 from '../../images/OurMissionImages/33_1_orig.jpg';
// import image63 from '../../images/OurMissionImages/30_orig.jpg';
// import image64 from '../../images/OurMissionImages/34_1_orig.jpg';
// import image65 from '../../images/OurMissionImages/35_orig.jpg';
// import image66 from '../../images/OurMissionImages/36_1_orig.jpg';
// import image67 from '../../images/OurMissionImages/36_orig.jpg';
// import image68 from '../../images/OurMissionImages/37_1_orig.jpg';
// import image69 from '../../images/OurMissionImages/37_orig.jpg';
// import image70 from '../../images/OurMissionImages/38_1_orig.jpg';
// import image71 from '../../images/OurMissionImages/38_orig.jpg';
// import image72 from '../../images/OurMissionImages/39_1_orig.jpg';
// import image73 from '../../images/OurMissionImages/39_orig.jpg';
// import image74 from '../../images/OurMissionImages/40_orig.jpg';
// import image75 from '../../images/OurMissionImages/41_1_orig.jpg';
// import image76 from '../../images/OurMissionImages/41_orig.jpg';
// import image77 from '../../images/OurMissionImages/42_orig.jpg';
// import image78 from '../../images/OurMissionImages/43_orig.jpg';
// import image79 from '../../images/OurMissionImages/img-2124_orig.jpg';
// import image80 from '../../images/OurMissionImages/img-2127_orig.jpg';
// import image81 from '../../images/OurMissionImages/img-2128_orig.jpg';


class OurMission extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     autoplay: true
  //   };
  // }
  // onSelect = (active, direction) => {
  //   console.log(`active=${active} && direction=${direction}`);
  // };
  // slideNext = () => {
  //   this.slider.slideNext();
  // };
  // slidePrev = () => {
  //   this.slider.slidePrev();
  // };
  // goToSlide = () => {
  //   this.slider.goToSlide(4);
  // };
  // autoplay = () => {
  //   this.setState({ autoplay: !this.state.autoplay });
  // };
  // _changeIcon = () => {
  //   let { leftIcon, rightIcon } = this.state;
  //   if (leftIcon && rightIcon) {
  //     this.setState({
  //       leftIcon: undefined,
  //       rightIcon: undefined
  //     });
  //   } else {
  //     this.setState({
  //       leftIcon: <span className="fa fa-glass" />,
  //       rightIcon: <span className="fa fa-music" />
  //     });
  //   }
  // };
  render() {
    // const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10,
    //   image11, image12, image13, image14, image15, image16, image17, image18, image19, image20,
    //   image21, image22, image23, image24, image25, image26, image27, image28, image29, image30,
    // image31, image32, image33, image34, image35, image36, image37, image38, image39, image40,
    //   image41, image42, image43, image44, image45, image46, image47, image48, image49, image50,
    //   image51, image52, image53, image54, image55, image56, image57, image58, image59, image60,
    //   image61, image62, image63, image64, image65, image66, image67, image68, image69, image70,
    //   image71, image72, image73, image74, image75, image76, image77, image78, image79, image80,
    //   image81];

    // let { leftIcon, rightIcon } = this.state;
    return <div className="ourmission">
        <h1 className="display-1">OUR MISSION</h1>
        <h3 className="font-weight-bold lead">
          The mission of Love Changing the World is all about LOVE first!
        </h3>
        <p className="font-weight-bold lead">
          LCTW is to feed, clothe, comfort and care for vulnerable people
          living in poverty with LOVE to all generations without
          discrimination.
        </p>
        <p className="lead">
          We accomplish this mission by unifying our communities through
          areas of:
        </p>
        <div className="row">
          <ul className="list-unstyled col text-left">
            <li>Building LOVING Communities</li>
            <li>Sponsoring events of advocacy and activism</li>
            <li>Provide resources for people in need</li>
            <li>Fundraising</li>
            <li>
              Partnership with other non-profit organizations and
              stakeholders
            </li>
            <li>Meeting human needs with love</li>
            <hr />
          <li><a href="https://www.nbcbayarea.com/news/local/Santa-Clara-Countys-Homeless-Population-Jumps-13-Percent-431889503.html">
            Homeless Information
          </a></li>
          <li><a href="https://www.sharecare.com/health/hiv-aids/article/breaking-stigma-essential-facts-hiv">
            HIV/AIDS STD Information
          </a></li>
          </ul>
          <iframe className="col" title="HOMELESS MAN SHOCKS LCTW CEO with CHARMING DANCE MOVES" height="600" src="https://www.youtube.com/embed/PfmqvP30dKg" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
        </div>
        <div>
        </div>

        {/* display carousel */}
        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
              <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                {images.map(function (image, index) {
                  return <div className="text-center">
                      <img key={index} src={image} style={{height: 600 }} alt="" />
                    </div>;
                })}
              </RBCarousel>
            </div>
          </div>
        </div> */}
      </div>;
  }
}

export default OurMission;