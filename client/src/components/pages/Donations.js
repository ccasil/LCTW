import React, { Component } from 'react'
import "../css/Donations.css";

class Donations extends Component {
  render() {
    return (
      <div className="donations">
        <h1>Donations</h1>
        <p>Hello all, The Love Changing The World Family is seeking donations for the homeless and less fortunate. We are looking to make a difference in local communities and even expand our loving gestures beyond. Recently, there has been a tragic storm in Houston, Texas, and we are looking to be as helpful as possible to help the families that has suffered from loss of personal items and even homes. Remember there is no donation too small, spread the word and LOVE. There will be links to send funds to. Thank you for your generous HEARTS! We LOVE you ALL!!!</p>
        <div className="donatebuttons">
          <button type="button" class="btn btn-primary buttonspace">PayPal</button>
          <button type="button" class="btn btn-success buttonspace">GoFundMe</button>
        </div>
      </div>
    )
  }
}

export default Donations