import React, { Component } from "react";
import treasurer from '../../images/Board/treasurer.jpeg';
import secretary from '../../images/Board/secretary.jpg';
import defaultpic from '../../images/Board/defaultpic.png';

class Executive extends Component {
  render() {
    return <div className="executive">
      <h1 className="display-1">Meet Our Board of Directors</h1>
      <div className="container-fluid">
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img className="executive" src={defaultpic} style={{ height: 350 }} alt="" />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4" >Sha'Vonne Frazier</h2><h2 className="text-muted">Vice President</h2>
            <p className="lead" > </p>
          </div>
        </div>
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img className="executive" src={secretary} style={{ height: 350 }} alt="" />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4">Missionary Debra Armstrong</h2><h2 className="text-muted">Secretary</h2>
            <p className="lead" >I have over 30 PLUS YEARS of Customer Service experience.  Working with people has always been my passion.  I love helping people in the community and love to see them smile.  I feel we all need to come together to make a difference and spread love throughout the world because LOVE IS CHANGING THE WORLD.</p>
            <p className="lead" >Feeling so blessed to be apart of LCTW #LOVEMOVEMENT.
We have nothing to gain but love.</p>
          </div>
        </div>
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img className="executive" src={treasurer} style={{ height: 350 }} alt="" />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4" >Minister Brian Haack</h2><h2 className="text-muted">Treasurer</h2>
            <p className="lead" > A carpenter for 54 years, Member of New Mission Community Church for 14 years. Minister Brian Haack (aka) Brotha Brian is a loving, kind, GOD fearing man. This man has a heart for the homeless and has been teaching bible studies at the homeless shelter since October 19, 2004, which is well over 14 years. He was honored in 2014 and has received a certificate of appreciation award for 10 years of out standing services for Homeless Outreach Ministry. He also is a active board member who has been teaching bible studies and prayer on #OFIPL Outreach Ministries, "Genesis to Revelation: Study To Show Thyself Approved Unto God", which he has been hosting
            for over an year now. This man is very devoted to doing the will of God through Christ Jesus. </p>
          </div>
          </div>
    </div>
  </div>;
  }
}

export default Executive;
