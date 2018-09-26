import React, { Component } from "react";
import executive from "../../images/Board/executive.jpg";
import graphics from "../../images/Board/graphics.jpg";
import cheri from "../../images/Board/sistercheri.JPG";
import defaultpic from '../../images/Board/defaultpic.png';

import "../css/Landing.css";

class Staff extends Component {
  render() {
    return <div>
        <h3 className="display-3 text-center">Meet Our Executive Directors</h3>
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
          <img className="executive" src={executive} style={{ height: 350 }} alt="" />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4">Sister Cheri Crockett</h2>
            <h2 className="text-muted">
              Director of Outreach, San Joaquin County
            </h2>
            <p className="lead">
              Resident of Stanislaus County, for 10 years. She is dedicated
              to reaching the Homeless in San Joaquin County &amp;
              surrounding communities with Clothing, Grooming Kits, Bottled
              Water, Condoms &amp; Candy. Also, she has been a member of
              Ethnic Collectible Club, for 10 years, which closed their
              doors after 25 years. Although things came to an end, she
              continues her passion to spread &amp; share God's LOVE!! She
              praises God for his abundance of Blessings, one of which is
              Love Changing The World, Inc. She is glad to be a new member
              of the organization because she can serve God and that
              provides the ability to reach the broader population, of
              people in need! To God we give ALL the Glory &amp; Praise, in
              Jesus name, Amen!{" "}
            </p>
          </div>
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
          <img className="executive" src={cheri} style={{ height: 300 }} alt="" />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <p className="lead">
              On September 02, 2017 Cheri Crockett was recognized for
              serving the Homeless in the San Joaquin County at the Diablo Canyon
              Country Club.
            </p>
          </div>
        </div>
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
          <img className="executive" src={defaultpic} style={{ height: 350 }} alt="" />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4">Michelle Karbo</h2>
            <h2 className="text-muted">
              Director of Outreach, Santa Clara County
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.In in
              dui vitae urna accumsan lobortis eu ac nulla.Maecenas eget
              porta ante, vel mollis justo.Morbi metus nulla, ullamcorper
              vitae semper a, fermentum non ante.Phasellus id tincidunt
              odio.Interdum et malesuada fames ac ante ipsum primis in
              faucibus.In dignissim nibh eget cursus iaculis.In lacinia
              purus nec magna cursus venenatis.Vestibulum pretium velit
              erat, sit amet ultricies ante mattis non.Cras in tempus
              lorem.Phasellus ac nisl at mauris interdum tempor ac quis
              est.Praesent vestibulum, urna nec gravida rhoncus, elit purus
              fermentum nibh, ac elementum leo tellus vel erat.Nunc cursus
              lacus a ante finibus sodales non vitae ipsum.Sed id erat id
              metus egestas varius.{" "}
            </p>
          </div>
        </div>
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
          <img className="executive" src={graphics} style={{ height: 350 }} alt="" />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4">Ms. Aleesa Evans</h2>
            <h2 className="text-muted">Director of Graphic Design</h2>
            <p className="lead">
              Sister Aleesa Evans, grew up in the city of Merced. She has
              always had a passion to help others, which is why she is
              pursuing the nursing field. She graduated from Merced
              Community College, May 22, 2015, with her Associates degree in
              both Health Sciences and Social and Behavioral Sciences. One
              of her dreams is to be a huge asset to all communities and to
              be able to make a true difference. Though she is 23 years
              young, she has a strong desire to be a positive impact on
              others, which is why she agreed to join the Love Changing The
              World Family. This organization has been an honest inspiration
              and she has found her drive by being creative and assisting
              her very own God Mother with graphic designs. She is motivated
              to allow God to use her creatively and spiritually to reach
              all hearts and mind with LOVE.
            </p>
          </div>
        </div>
      </div>;
  }
}

export default Staff;
