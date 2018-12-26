import React, { Component } from "react";
import executive from "../../images/Board/executive.jpg";
import executive1 from "../../images/Board/executive1.jpeg";
import cheri from "../../images/Board/sistercheri.JPG";
import defaultpic from "../../images/Board/defaultpic.png";

import "../css/Landing.css";

class Staff extends Component {
  render() {
    return (
      <div>
        <h3 className="display-1 text-center">Meet Our Executive Directors</h3>
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img
              className="executive"
              src={executive}
              style={{ height: 350 }}
              alt=""
            />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4">Sister Cheri Crockett</h2>
            <h2 className="text-muted">
              Director of Outreach, San Joaquin County
            </h2>
            <p className="lead">
              Resident of Stanislaus County, for 10 years. She is dedicated to
              reaching the Homeless in San Joaquin County &amp; surrounding
              communities with Clothing, Grooming Kits, Bottled Water, Condoms
              &amp; Candy. Also, she has been a member of Ethnic Collectible
              Club, for 10 years, which closed their doors after 25 years.
              Although things came to an end, she continues her passion to
              spread &amp; share God's LOVE!! She praises God for his abundance
              of Blessings, one of which is Love Changing The World, Inc. She is
              glad to be a new member of the organization because she can serve
              God and that provides the ability to reach the broader population,
              of people in need! To God we give ALL the Glory &amp; Praise, in
              Jesus name, Amen!{" "}
            </p>
          </div>
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img
              className="executive"
              src={cheri}
              style={{ height: 300 }}
              alt=""
            />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <p className="lead">
              On September 02, 2017 Cheri Crockett was recognized for serving
              the Homeless in the San Joaquin County at the Diablo Canyon
              Country Club.
            </p>
          </div>
        </div>
        <hr />
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img
              className="executive"
              src={defaultpic}
              style={{ height: 350 }}
              alt=""
            />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4">Michelle Karbo</h2>
            <h2 className="text-muted">
              Director of Outreach, Santa Clara County
            </h2>
            <p className="lead" />
          </div>
        </div>
        <hr />
        {/* <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img
              className="executive"
              src={executive1}
              style={{ height: 350 }}
              alt=""
            />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4">Rachelle “Nikki” DeWees</h2>
            <h2 className="text-muted">
              Director of Events and Programs
            </h2>
            <p className="lead">
              I was born into a family that cares and loves everyone. This is
              why the organization started Love Changing the World. We love to
              help people that are in need. I have taken strangers into my home,
              fed them, clothed and gave them a place to sleep. We are  God
              Fearing family and truly believe that you never know when you are
              entertaining an Angel. With that being said, never let anyone go
              hungry, unclothed, go without, or be in need when you have the
              opportunity to help. My goal will be to program and plan events
              that will help people Live Life and give them Love that changes
              the World. God Bless!
            </p>
          </div>
        </div>
        <hr /> */}
        <div className="row align-items-start about">
          <div className="col col-lg-4 col-md-12 col-sm-12 text-center">
            <img
              className="executive"
              src={defaultpic}
              style={{ height: 350 }}
              alt=""
            />
          </div>
          <div className="col col-lg-8 col-md-12 col-sm-12">
            <h2 className="display-4">Dawn Landrine</h2>
            {/* <h2 className="text-muted"></h2> */}
            <p className="lead" />
          </div>
        </div>
      </div>
    );
  }
}

export default Staff;
