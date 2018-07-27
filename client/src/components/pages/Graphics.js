import React, { Component } from "react";
import graphics from '../../images/Board/graphics.jpg';

class Graphics extends Component {
  render() {
    return <div className="treasurer">
        <h1>Meet Our Graphics Designer</h1>
        <div className="">
          <div className="">
            <img className="ceo" src={graphics} height="400px;" alt="ceo" />
          </div>
          <div className="">
            <p>Ms. Aleesa Evans</p>
            <p>
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

export default Graphics;
