import React, { Component } from "react";
import executive from '../../images/Board/executive.jpg';

class Executive extends Component {
  render() {
    return <div className="executive">
        <h1>Meet Our Executive Outreach Director</h1>
        <div className="">
          <div className="">
          <img className="executive" src={executive} height="400px;" alt="ceo" />
          </div>
          <div className="">
            <p>
              Sister Cheri Crockett, is a resident of Stanislaus County, for
              10 years. She is dedicated to reaching the Homeless in San
              Joaquin County & surrounding communities with Clothing,
              Grooming Kits, Bottled Water, Condoms & Candy. Also, she has
              been a member of Ethnic Collectible Club, for 10 years, which
              closed their doors after 25 years. Although things came to an
              end, she continues her passion to spread & share God's LOVE!!
              She praises God for his abundance of Blessings, one of which
              is Love Changing The World, Inc. She is glad to be a new
              member of the organization because she can serve God and that
              provides the ability to reach the broader population, of
              people in need! To God we give ALL the Glory & Praise, in
              Jesus name, Amen!
            </p>
          </div>
        </div>
      </div>;
  }
}

export default Executive;
