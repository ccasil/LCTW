import React, { Component } from 'react'
import "../css/Donations.css";


import BlackRed from '../../images/Shop/LOVE 1.jpg';
import BlackWhite from '../../images/Shop/LOVE 2.jpg';
import RedBlack from '../../images/Shop/LOVE 4.jpg';
import RedWhite from '../../images/Shop/LOVE 3.jpg';
import WhiteBlack from '../../images/Shop/LOVE 5.jpg';
import WhiteRed from '../../images/Shop/LOVE 6.jpg';

import Apron from '../../images/Shop/IMG_4275.JPG';


class Donations extends React.Component {

  constructor(props){
        
      super(props);
     
      this.state = {
        value : 'select',
        image : BlackRed,
      }
      this.change = this.change.bind(this)
      this.switchImage = this.switchImage.bind(this)
    }

    change(event){    
      console.log(event.target.value)
      this.setState({value: event.target.value, image: this.switchImage(event.target.value)});
      console.log(this.state)
    }

    switchImage(param){
      console.log(param)
     
      switch(param){
        case 'Black - Red Text':
          return BlackRed
        case 'Black - White Text':
          return BlackWhite
        case 'Red - Black Text':
          return RedBlack
        case 'Red - White Text':
          return RedWhite
        case 'White - Red Text':
          return WhiteRed
        case 'White - Black Text':
          return WhiteBlack                    
        default:
          return BlackRed

      }

    }
  

  render() {
    return (
      <div className="donations">
        <h1 className="display-1">Donations</h1>
        <p className="lead">Hello all, The Love Changing The World Family is seeking donations for the homeless and less fortunate. We are looking to make a difference in local communities and even expand our loving gestures beyond. Recently, there has been a tragic storm in Houston, Texas, and we are looking to be as helpful as possible to help the families that has suffered from loss of personal items and even homes. Remember there is no donation too small, spread the word and LOVE. There will be links to send funds to. Thank you for your generous HEARTS! We LOVE you ALL!!!</p>
 

        <div className="cartItem">
          <h4> Shirts! </h4>

          <img alt="shirt" className="shoppingImg" src={this.state.image}></img>
          


          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="cartForm">
          <input type="hidden" name="cmd" value="_cart"></input>
          <input type="hidden" name="business" value="H4y4shi@gmail.com"></input>
          <input type="hidden" name="lc" value="US"></input>
          <input type="hidden" name="item_name" value="Love Changing the World - Shirt"></input>
          <input type="hidden" name="button_subtype" value="products"></input>
          <input type="hidden" name="no_note" value="0"></input>
          <input type="hidden" name="shipping" value="5.00"></input>
          <input type="hidden" name="add" value="1"></input>
          <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest"></input>
           
          <div className="ShoppingOptions">
          <table>
            <tbody>
            <tr><td><input type="hidden" name="on0" value="Size"></input>Size</td></tr><tr><td><select name="os0">
              <option value="Small">Small $20.00 USD</option>
              <option value="Medium">Medium $20.00 USD</option>
              <option value="Large">Large $20.00 USD</option>
              <option value="Extra-Large">Extra-Large $20.00 USD</option>
              <option value="XX-Large">XX-Large $25.00 USD</option>
              <option value="3X-Large">3X-Large $25.00 USD</option>
              <option value="4X-Large">4X-Large $25.00 USD</option>
              <option value="5X-Large">5X-Large $25.00 USD</option>

            </select> </td></tr>
            <tr><td><input type="hidden" name="on1" value="Color"></input>Color</td></tr><tr><td><select name="os1" onChange={this.change} value ={this.state.value}>
              <option value="Black - Red Text">Black - Red Text </option>
              <option value="Black - White Text">Black - White Text </option>
              <option value="Red - Black Text">Red - Black Text </option>
              <option value="Red - White Text">Red - White Text </option>
              <option value="White - Black Text">White - Black Text </option>
              <option value="White - Red Text">White - Red Text </option>
            </select> </td></tr>
            </tbody>
            </table>
            <input type="hidden" name="currency_code" value="USD"></input>
            <input type="hidden" name="option_select0" value="Small"></input>
            <input type="hidden" name="option_amount0" value="20.00"></input>
            <input type="hidden" name="option_select1" value="Medium"></input>
            <input type="hidden" name="option_amount1" value="20.00"></input>
            <input type="hidden" name="option_select2" value="Large"></input>
            <input type="hidden" name="option_amount2" value="20.00"></input>
            <input type="hidden" name="option_select3" value="Extra-Large"></input>
            <input type="hidden" name="option_amount3" value="20.00"></input>
            <input type="hidden" name="option_select4" value="XX-Large"></input>
            <input type="hidden" name="option_amount4" value="25.00"></input>
            <input type="hidden" name="option_select5" value="3X-Large"></input>
            <input type="hidden" name="option_amount5" value="25.00"></input>
            <input type="hidden" name="option_select6" value="4X-Large"></input>
            <input type="hidden" name="option_amount6" value="25.00"></input>
            <input type="hidden" name="option_select7" value="5X-Large"></input>
            <input type="hidden" name="option_amount7" value="25.00"></input>
            <input type="hidden" name="option_index" value="0"></input>
          </div>
          <input type="image" className="cartButton" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          </input><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </img></form>

        </div>

        <div className="cartItem">
          <h4> Aprons! </h4>
          <img className="shoppingImg" src={Apron} alt="apron"></img>
          <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="cartForm">
          <div className="ShoppingOptions">
          <input type="hidden" name="cmd" value="_cart"></input>
          <input type="hidden" name="business" value="H4y4shi@gmail.com"></input>
          <input type="hidden" name="lc" value="US"></input>
          <input type="hidden" name="item_name" value="Apron"></input>
          <input type="hidden" name="button_subtype" value="products"></input>
          <input type="hidden" name="no_note" value="0"></input>
          <input type="hidden" name="shipping" value="5.00"></input>
          <input type="hidden" name="add" value="1"></input>
          <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest"></input>
          <table>
          <tbody>
          <tr><td><input type="hidden" name="on0" value="Color"></input>Color</td></tr><tr><td><select name="os0">
            <option value="White">White $25.00 USD</option>
            <option value="Black">Black $25.00 USD</option>
          </select> </td></tr>
          </tbody>
          </table>
          </div>
          <input type="hidden" name="currency_code" value="USD"></input>
          <input type="hidden" name="option_select0" value="White"></input>
          <input type="hidden" name="option_amount0" value="25.00"></input>
          <input type="hidden" name="option_select1" value="Black"></input>
          <input type="hidden" name="option_amount1" value="25.00"></input>
          <input type="hidden" name="option_index" value="0"></input>
          <input type="image" className="cartButton" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          </input><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
          </form>

        </div>
      </div>
    )
  }
}

export default Donations