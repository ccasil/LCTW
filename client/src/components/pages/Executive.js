import React, { Component } from "react";
import treasurer from '../../images/Board/treasurer.jpeg';
import ceo from '../../images/Board/ceo.jpeg';

class Executive extends Component {
  render() {
    return <div className="executive">
      <h1 className="display-2">Meet Our Board of Directors</h1>
      <div className="container-fluid">
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img className="executive" src={ceo} height="200px;" alt="" />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4" >Sha'Vonne Frazier</h2><h2 className="text-muted">Vice President</h2>
            <p className="lead" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.In in dui vitae urna accumsan lobortis eu ac nulla.Maecenas eget porta ante, vel mollis justo.Morbi metus nulla, ullamcorper vitae semper a, fermentum non ante.Phasellus id tincidunt odio.Interdum et malesuada fames ac ante ipsum primis in faucibus.In dignissim nibh eget cursus iaculis.In lacinia purus nec magna cursus venenatis.Vestibulum pretium velit erat, sit amet ultricies ante mattis non.Cras in tempus lorem.Phasellus ac nisl at mauris interdum tempor ac quis est.Praesent vestibulum, urna nec gravida rhoncus, elit purus fermentum nibh, ac elementum leo tellus vel erat.Nunc cursus lacus a ante finibus sodales non vitae ipsum.Sed id erat id metus egestas varius.</p>
          </div>
        </div>
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img className="executive" src={ceo} height="200px;" alt="" />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4">Debra Armstrong</h2><h2 className="text-muted">Secretary</h2>
            <p className="lead" >Lorem ipsum dolor sit amet, consectetur adipiscing elit.In in dui vitae urna accumsan lobortis eu ac nulla.Maecenas eget porta ante, vel mollis justo.Morbi metus nulla, ullamcorper vitae semper a, fermentum non ante.Phasellus id tincidunt odio.Interdum et malesuada fames ac ante ipsum primis in faucibus.In dignissim nibh eget cursus iaculis.In lacinia purus nec magna cursus venenatis.Vestibulum pretium velit erat, sit amet ultricies ante mattis non.Cras in tempus lorem.Phasellus ac nisl at mauris interdum tempor ac quis est.Praesent vestibulum, urna nec gravida rhoncus, elit purus fermentum nibh, ac elementum leo tellus vel erat.Nunc cursus lacus a ante finibus sodales non vitae ipsum.Sed id erat id metus egestas varius. </p>
          </div>
        </div>
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img className="executive" src={treasurer} height="200px;" alt="" />
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
