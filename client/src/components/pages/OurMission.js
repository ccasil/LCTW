import React, { Component } from 'react';
// import $ from 'jquery';
import "./OurMission.css";

// image routes
import image1 from '../../images/OurMissionImages/1_2_orig.jpg';
import image2 from '../../images/OurMissionImages/1_5_orig.jpg';
import image3 from '../../images/OurMissionImages/2_2_orig.jpg';
import image4 from '../../images/OurMissionImages/3_3_orig.jpg';
import image5 from '../../images/OurMissionImages/3_orig.jpeg';
import image6 from '../../images/OurMissionImages/3_orig.jpg';
import image7 from '../../images/OurMissionImages/4_1_orig.jpg';
import image8 from '../../images/OurMissionImages/4_3_orig.jpg';
import image9 from '../../images/OurMissionImages/5_2_orig.jpg';
import image10 from '../../images/OurMissionImages/5_orig.jpg';
import image11 from '../../images/OurMissionImages/6_1_orig.jpg';
import image12 from '../../images/OurMissionImages/6_orig.jpg';
import image13 from '../../images/OurMissionImages/7_1_orig.jpg';
import image14 from '../../images/OurMissionImages/7_orig.jpg';
import image15 from '../../images/OurMissionImages/8_1_orig.jpg';
import image16 from '../../images/OurMissionImages/8_orig.jpg';
import image17 from '../../images/OurMissionImages/9_1_orig.jpg';
import image18 from '../../images/OurMissionImages/9_orig.jpg';
import image19 from '../../images/OurMissionImages/10_1_orig.jpg';
import image20 from '../../images/OurMissionImages/10_orig.jpg';
import image21 from '../../images/OurMissionImages/11_orig.jpg';
import image22 from '../../images/OurMissionImages/12_orig.jpg';
import image23 from '../../images/OurMissionImages/13_1_orig.jpg';
import image24 from '../../images/OurMissionImages/13_orig.jpg';
import image25 from '../../images/OurMissionImages/14_1_orig.jpg';
import image26 from '../../images/OurMissionImages/14_orig.jpg';
import image27 from '../../images/OurMissionImages/15_1_orig.jpg';
import image28 from '../../images/OurMissionImages/15_orig.jpg';
import image29 from '../../images/OurMissionImages/16_orig.jpg';
import image30 from '../../images/OurMissionImages/17_1_orig.jpg';
import image31 from '../../images/OurMissionImages/17_orig.jpg';
import image32 from '../../images/OurMissionImages/18_1_orig.jpg';
import image33 from '../../images/OurMissionImages/18_orig.jpg';
import image34 from '../../images/OurMissionImages/19_orig.jpg';
import image35 from '../../images/OurMissionImages/20_1_orig.jpg';
import image36 from '../../images/OurMissionImages/20_orig.jpg';
import image37 from '../../images/OurMissionImages/21_1_orig.jpg';
import image38 from '../../images/OurMissionImages/21_orig.jpg';
import image39 from '../../images/OurMissionImages/22_1_orig.jpg';
import image40 from '../../images/OurMissionImages/22_orig.jpg';
import image41 from '../../images/OurMissionImages/23_1_orig.jpg';
import image42 from '../../images/OurMissionImages/23_orig.jpg';
import image43 from '../../images/OurMissionImages/24_1_orig.jpg';
import image44 from '../../images/OurMissionImages/24_orig.jpg';
import image45 from '../../images/OurMissionImages/25_1_orig.jpg';
import image46 from '../../images/OurMissionImages/25_orig.jpg';
import image47 from '../../images/OurMissionImages/26_1_orig.jpg';
import image48 from '../../images/OurMissionImages/26_orig.jpg';
import image49 from '../../images/OurMissionImages/27_1_orig.jpg';
import image50 from '../../images/OurMissionImages/27_orig.jpg';
import image51 from '../../images/OurMissionImages/28_1_orig.jpg';
import image52 from '../../images/OurMissionImages/28_orig.jpg';
import image53 from '../../images/OurMissionImages/29_orig.jpg';
import image54 from '../../images/OurMissionImages/30_1_orig.jpg';
import image55 from '../../images/OurMissionImages/30_orig.jpg';
import image56 from '../../images/OurMissionImages/31_1_orig.jpg';
import image57 from '../../images/OurMissionImages/31_orig.jpg';
import image58 from '../../images/OurMissionImages/32_1_orig.jpg';
import image59 from '../../images/OurMissionImages/32_orig.jpg';
import image60 from '../../images/OurMissionImages/33_1_orig.jpg';
import image61 from '../../images/OurMissionImages/33_orig.jpg';
import image62 from '../../images/OurMissionImages/33_1_orig.jpg';
import image63 from '../../images/OurMissionImages/30_orig.jpg';
import image64 from '../../images/OurMissionImages/34_1_orig.jpg';
import image65 from '../../images/OurMissionImages/35_orig.jpg';
import image66 from '../../images/OurMissionImages/36_1_orig.jpg';
import image67 from '../../images/OurMissionImages/36_orig.jpg';
import image68 from '../../images/OurMissionImages/37_1_orig.jpg';
import image69 from '../../images/OurMissionImages/37_orig.jpg';
import image70 from '../../images/OurMissionImages/38_1_orig.jpg';
import image71 from '../../images/OurMissionImages/38_orig.jpg';
import image72 from '../../images/OurMissionImages/39_1_orig.jpg';
import image73 from '../../images/OurMissionImages/39_orig.jpg';
import image74 from '../../images/OurMissionImages/40_orig.jpg';
import image75 from '../../images/OurMissionImages/41_1_orig.jpg';
import image76 from '../../images/OurMissionImages/41_orig.jpg';
import image77 from '../../images/OurMissionImages/42_orig.jpg';
import image78 from '../../images/OurMissionImages/43_orig.jpg';
import image79 from '../../images/OurMissionImages/img-2124_orig.jpg';
import image80 from '../../images/OurMissionImages/img-2127_orig.jpg';
import image81 from '../../images/OurMissionImages/img-2128_orig.jpg';

class OurMission extends Component {

  render() {
    return (

      <div className="ourmission">
        <h1>OUR MISSION</h1>
        <h4> The Mission of Love Changing The World (LCTW) is to feed, clothe, comfort and
care for vulnerable people living in poverty with LOVE to all generations without
discrimination. </h4>

        <p>We accomplish this mission by unifying our communities through areas of:</p>

        <ul>
          <li>Building Loving Communities</li>
          <li>Sponsoring events of advocacy and activism;</li>
          <li>Provide resources for people in need;</li>
          <li>Partnership with other Non-profit organizations and Stakeholders.</li>
          <li>Meeting human needs with love.</li>
        </ul>

        {/* display carousel */}
        <div class="container">
          <div class="row">
            <div class="col-md-2"></div>
            <div id="carouselExampleControls" class="carousel slide col-md-6" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100 square" src={image1} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" id="image2" src={image2} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image3} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image4} alt="Fourth slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 square" src={image5} alt="Fifth slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image6} alt="Sixth slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image7} alt="Seventh slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image8} alt="Eighth slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image9} alt="Ninth slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image10} alt="Tenth slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image11} alt="Eleventh slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image12} alt="Twelfth slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image13} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image14} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 square" src={image15} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image16} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image17} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image18} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image19} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 square" src={image20} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image21} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image22} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 square" src={image23} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image24} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image25} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image26} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 square" src={image27} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image28} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image29} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portait" src={image30} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image31} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image32} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image33} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image34} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image35} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image36} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image37} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image38} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image39} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portait" src={image40} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image41} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image42} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image43} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image44} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 square" src={image45} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image46} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image47} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image48} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image49} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portait" src={image50} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image51} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image52} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image53} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image54} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image55} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image56} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image57} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image58} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image59} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portait" src={image60} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image61} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image62} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image63} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image64} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image65} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image66} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image67} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image68} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image69} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portait" src={image70} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image71} alt="First slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image72} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image73} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image74} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image75} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image76} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image77} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 portrait" src={image78} alt="Second slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 square" src={image79} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 square" src={image80} alt="Third slide"></img>
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100 square" src={image81} alt="Second slide"></img>
                </div>
              </div>

              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="right carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>

            <div class="col-md-1"></div>

            <div class="col-md-3">
              <ul class="nav nav-pills nav-stacked anyClass">
                <li class="nav-item">
                  <img src={image1} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image2} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image3} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image4} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image5} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image6} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image7} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image8} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image9} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image10} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image11} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image12} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image13} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image14} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image15} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image16} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image17} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image18} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image19} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image20} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image21} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image22} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image23} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image24} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image25} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image26} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image27} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image28} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image29} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image30} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image31} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image32} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image33} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image34} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image35} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image36} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image37} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image38} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image39} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image40} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image41} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image42} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image43} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image44} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image45} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image46} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image47} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image48} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image49} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image50} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image51} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image52} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image53} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image54} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image55} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image56} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image57} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image58} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image59} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image60} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image61} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image62} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image63} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image64} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image65} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image66} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image67} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image68} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image69} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image70} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image71} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image72} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image73} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image74} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image75} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image76} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image77} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image78} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image79} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image80} alt="First slide"></img>
                </li>
                <li class="nav-item">
                  <img src={image81} alt="First slide"></img>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default OurMission;