import React, { Component } from 'react'
import treasurer from "../../images/treasurer.jpeg";

class Treasurer extends Component {
    render() {
        return <div className="treasurer">
            <h1>Meet Our Treasurer</h1>
            <div className="">
              <div className="">
                <img className="ceo" src={treasurer} height="400px;" alt="ceo" />
              </div>
              <div className="">
                <p>Minister Brian Haack</p>
                <p>
                  A carpenter for 51 years, Member of New Mission
                  Community Church for 14 years Minister Brian Haack
                  (aka) Brotha Brian is a loving, kind, GOD fearing man.
                  This man has a heart for the homeless and has been
                  teaching bible studies at the homeless shelter since
                  October 19, 2004, which is well over 11 years. He was
                  honored in 2014 and has received a certificate of
                  appreciation award for 10 years of out standing
                  services for Homeless Outreach Ministry. He also is a
                  active board member who has been teaching bible
                  studies and prayer on #OFIPL Outreach Ministries,
                  "Genisis to Revelation: Study To Show Thyself Approved
                  Unto God", which he has been hosting for over an year
                  now. This man is very devoted to doing the will of God
                  through Christ Jesus.
                </p>
              </div>
            </div>
          </div>;
    }
}


export default Treasurer;