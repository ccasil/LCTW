// import React, { Component } from 'react'
import React from 'react';
import "../css/Shop.css";
import { Link } from "react-router-dom";
import $ from 'jquery';

import BlackRed from '../../images/Shop/LOVE 1.jpg';
import BlackWhite from '../../images/Shop/LOVE 2.jpg';
import RedBlack from '../../images/Shop/LOVE 4.jpg';
import RedWhite from '../../images/Shop/LOVE 3.jpg';
import WhiteBlack from '../../images/Shop/LOVE 5.jpg';
import WhiteRed from '../../images/Shop/LOVE 6.jpg';
import VIP1 from '../../images/Shop/LOVE VIP 1.jpg';
import VIP2 from '../../images/Shop/LOVE VIP 2.jpg';
import VIP3 from '../../images/Shop/LOVE VIP 3.jpg';
import VIP4 from '../../images/Shop/LOVE VIP 4.jpg';
import Apron1 from '../../images/Shop/Apron1.JPG';
import Apron2 from '../../images/Shop/Apron2.JPG';
import Apron3 from '../../images/Shop/Apron3.JPG';
import Apron4 from '../../images/Shop/Apron4.JPG';
import TankTop from '../../images/Shop/TankTop.JPG';
import VIPApron1 from '../../images/Shop/VIPApron1.JPG';
import VIPApron2 from '../../images/Shop/VIPApron2.JPG';
import GoldTankTop from '../../images/Shop/TankGold.JPG';
import PlatTankTop from '../../images/Shop/TankPlat.JPG';
import Fire from '../../images/Shop/Fire.gif'
import Star from '../../images/Shop/Star.gif'

import logo from '../../images/Logos/logo.png';
import hoody from '../../images/Shop/hoody.jpg';

class Donations extends React.Component {

  constructor(props){
        
      super(props);

      this.state = {
        value : 'select',
        image : BlackRed,
        vipimage : VIP1,
        apron: Apron1,
        vipapron: VIPApron1,
        viptank: GoldTankTop,
      }
      this.change = this.change.bind(this)
      this.changeVIP = this.changeVIP.bind(this)
      this.changeApron = this.changeApron.bind(this)
      this.changeVIPApron = this.changeVIPApron.bind(this)
      this.changeVIPTank = this.changeVIPTank.bind(this)
      this.switchImage = this.switchImage.bind(this)
    }

    change(event){    
      console.log(event.target.value)
      this.setState({value: event.target.value,  image: this.switchImage(event.target.value)});
      console.log(this.state)
    }
    changeVIP(event){    
      console.log(event.target.value)
      this.setState({value: event.target.value, vipimage: this.switchImage(event.target.value)});
      console.log(this.state)
    }
    changeApron(event){    
      console.log(event.target.value)
      this.setState({value: event.target.value, apron: this.switchImage(event.target.value)});
      console.log(this.state)
    }
    changeVIPApron(event){
      console.log(event.target.value)
      this.setState({value: event.target.value, vipapron: this.switchImage(event.target.value)});
      console.log(this.state)
    }
    changeVIPTank(event){
      this.setState({value: event.target.value, viptank: this.switchImage(event.target.value)});
    }

    switchImage(param){
      console.log(param)
      
      switch(param){
        case 'Black Shirt - Red Text':
          return BlackRed
        case 'Black Shirt - White Text':
          return BlackWhite
        case 'Red Shirt - Black Text':
          return RedBlack
        case 'Red Shirt - White Text':
          return RedWhite
        case 'White Shirt - Red Text':
          return WhiteRed
        case 'White Shirt - Black Text':
          return WhiteBlack
        case 'Black - Gold':
          return VIP1 
        case 'Black - Silver':
          return VIP2 
        case 'Red - Gold':
          return VIP3 
        case 'Red - Silver':
          return VIP4
        case 'White Apron - Red Text':
          return Apron1 
        case 'White Apron - Black Text':
          return Apron2 
        case 'Black Apron - Red Text':
          return Apron3 
        case 'Black Apron - White Text':
          return Apron4
        case 'VIP Apron - Red Text':
          return VIPApron1
        case 'VIP Apron - Silver Text':
          return VIPApron2
        case 'VIP Tank Top - Gold':
          return GoldTankTop
        case 'VIP Tank Top - Platinum':
          return PlatTankTop

        default:
          return BlackRed

      }

    }
  

  render() {
    return <div className="donations">
        <script>
          $(document).ready(function(){
            setInterval(function(){ 
              $('#whathot').fadeToggle(1300);
              setTimeout(function(){
                $('#whatnew').fadeToggle(1300);
              }, 1300)
            }, 1300)
          });
        </script>
        <h1 className="display-1">Shop</h1>
        <p className="lead">
          Hello all, The Love Changing the World Family is seeking donations
          for the homeless and less fortunate. We are looking to make a
          difference in local communities and even expand our loving
          gestures beyond. Remember, there is no donation too small, spread
          the word and LOVE. Thank you for your generous HEARTS! We LOVE you
          ALL!!! No exchanges or
          refunds, and all sales are final.
        </p>

        <div className="shoparea">
          <div className="new">
            <div className="cartItem">
              <h2 id="whatnew" className="font-weight-bold"><img alt="star" className="star" src={Star} /><img alt="star" className="star" src={Star} /><img alt="star" className="star" src={Star} />What's New!<img alt="star" className="star" src={Star} /><img alt="star" className="star" src={Star} /><img alt="star" className="star" src={Star} /></h2>
              <h4> Hoodies </h4>
              <div className="regularItem">
                <img alt="shirt" className="shoppingImg" src={hoody} />
              </div>
            </div>

            <div className="cartItem">
            <h2 id="whathot" className="font-weight-bold"><img alt="fire" className="fire" src={Fire} /><img alt="fire" className="fire" src={Fire} /><img alt="fire" className="fire" src={Fire} />What's Hot!<img alt="fire" className="fire" src={Fire} /><img alt="fire" className="fire" src={Fire} /><img alt="fire" className="fire" src={Fire} /></h2>
              <h4> VIP Memberships </h4>
              <div className="regularItem">
                <img alt="member" className="shoppingImg" src={logo} />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="shoparea">
          <div className="cartItem">
            <h4> T-Shirts </h4>
            <div className="regularItem">
              <img alt="shirt" className="shoppingImg" src={this.state.image} />
            </div>

            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="cartForm">
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="business" value="info@lovechangingtheworld.org" />
              <input type="hidden" name="lc" value="US" />
              <input type="hidden" name="item_name" value="Love Changing the World - Shirt" />
              <input type="hidden" name="button_subtype" value="products" />
              <input type="hidden" name="no_note" value="0" />
              <input type="hidden" name="shipping" value="5.00" />
              <input type="hidden" name="add" value="1" />
              <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest" />

              <div className="ShoppingOptions">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="Size" />
                        Size
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os0">
                          <option value="Small">Small $20.00 USD</option>
                          <option value="Medium">Medium $20.00 USD</option>
                          <option value="Large">Large $20.00 USD</option>
                          <option value="Extra-Large">
                            Extra-Large $20.00 USD
                          </option>
                          <option value="XX-Large">
                            XX-Large $25.00 USD
                          </option>
                          <option value="3X-Large">
                            3X-Large $25.00 USD
                          </option>
                          <option value="4X-Large">
                            4X-Large $25.00 USD
                          </option>
                          <option value="5X-Large">
                            5X-Large $25.00 USD
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="hidden" name="on1" value="Color" />
                        Color
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os1" onChange={this.change} value={this.state.value}>
                          <option value="Black Shirt - Red Text">
                            Black - Red Text{" "}
                          </option>
                          <option value="Black Shirt - White Text">
                            Black - White Text{" "}
                          </option>
                          <option value="Red Shirt - Black Text">
                            Red - Black Text{" "}
                          </option>
                          <option value="Red Shirt - White Text">
                            Red - White Text{" "}
                          </option>
                          <option value="White Shirt - Black Text">
                            White - Black Text{" "}
                          </option>
                          <option value="White Shirt - Red Text">
                            White - Red Text{" "}
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="option_select0" value="Small" />
                <input type="hidden" name="option_amount0" value="20.00" />
                <input type="hidden" name="option_select1" value="Medium" />
                <input type="hidden" name="option_amount1" value="20.00" />
                <input type="hidden" name="option_select2" value="Large" />
                <input type="hidden" name="option_amount2" value="20.00" />
                <input type="hidden" name="option_select3" value="Extra-Large" />
                <input type="hidden" name="option_amount3" value="20.00" />
                <input type="hidden" name="option_select4" value="XX-Large" />
                <input type="hidden" name="option_amount4" value="25.00" />
                <input type="hidden" name="option_select5" value="3X-Large" />
                <input type="hidden" name="option_amount5" value="25.00" />
                <input type="hidden" name="option_select6" value="4X-Large" />
                <input type="hidden" name="option_amount6" value="25.00" />
                <input type="hidden" name="option_select7" value="5X-Large" />
                <input type="hidden" name="option_amount7" value="25.00" />
                <input type="hidden" name="option_index" value="0" />
              </div>
              <input type="image" className="cartButton" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <div className="line" />
          </div>

          <div className="cartItem">
            <h4> Aprons </h4>
            <div className="regularItem">
              <img alt="apron" className="shoppingImg" src={this.state.apron} />
            </div>
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="cartForm">
              <div className="ShoppingOptions">
                <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="business" value="info@lovechangingtheworld.org" />
                <input type="hidden" name="lc" value="US" />
                <input type="hidden" name="item_name" value="Aprons" />
                <input type="hidden" name="button_subtype" value="products" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="shipping" value="5.00" />
                <input type="hidden" name="add" value="1" />
                <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest" />

                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="Color" />
                        Color
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os0" onChange={this.changeApron} value={this.state.value}>
                          <option value="White Apron - Red Text">
                            White - Red Text $25.00 USD
                          </option>
                          <option value="White Apron - Black Text">
                            White - Black Text $25.00 USD
                          </option>
                          <option value="Black Apron - Red Text">
                            Black - Red Text $25.00 USD
                          </option>
                          <option value="Black Apron - White Text">
                            Black - White Text $25.00 USD
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="option_select0" value="White Apron - Red Text" />
                <input type="hidden" name="option_amount0" value="25.00" />
                <input type="hidden" name="option_select1" value="White Apron - Black Text" />
                <input type="hidden" name="option_amount1" value="25.00" />
                <input type="hidden" name="option_select2" value="Black Apron - Red Text" />
                <input type="hidden" name="option_amount2" value="25.00" />
                <input type="hidden" name="option_select3" value="Black Apron - White Text" />
                <input type="hidden" name="option_amount3" value="25.00" />
                <input type="hidden" name="option_index" value="0" />
              </div>

              <input type="image" className="cartButton" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>

            <div className="line" />
          </div>

          <div className="cartItem">
            <h4> Tank Tops </h4>
            <div className="newItem">
              <img alt="shirt" className="shoppingImg" src={TankTop} />
            </div>

            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="cartForm">
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="business" value="info@lovechangingtheworld.org" />
              <input type="hidden" name="lc" value="US" />
              <input type="hidden" name="item_name" value="Love Changing the World - Shirt" />
              <input type="hidden" name="button_subtype" value="products" />
              <input type="hidden" name="no_note" value="0" />
              <input type="hidden" name="shipping" value="5.00" />
              <input type="hidden" name="add" value="1" />
              <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest" />

              <div className="ShoppingOptions">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="Size" />
                        Size
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os0">
                          <option value="Small">Small $20.00 USD</option>
                          <option value="Medium">Medium $20.00 USD</option>
                          <option value="Large">Large $20.00 USD</option>
                          <option value="Extra-Large">
                            Extra-Large $20.00 USD
                          </option>
                          <option value="XX-Large">
                            XX-Large $25.00 USD
                          </option>
                          <option value="3X-Large">
                            3X-Large $25.00 USD
                          </option>
                          <option value="4X-Large">
                            4X-Large $25.00 USD
                          </option>
                          <option value="5X-Large">
                            5X-Large $25.00 USD
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="hidden" name="on1" value="Color" />
                        Color
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os1">
                          <option value="Red "> Red </option>
                          <option value="Black"> Black </option>
                        </select>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="option_select0" value="Small" />
                <input type="hidden" name="option_amount0" value="20.00" />
                <input type="hidden" name="option_select1" value="Medium" />
                <input type="hidden" name="option_amount1" value="20.00" />
                <input type="hidden" name="option_select2" value="Large" />
                <input type="hidden" name="option_amount2" value="20.00" />
                <input type="hidden" name="option_select3" value="Extra-Large" />
                <input type="hidden" name="option_amount3" value="20.00" />
                <input type="hidden" name="option_select4" value="XX-Large" />
                <input type="hidden" name="option_amount4" value="25.00" />
                <input type="hidden" name="option_select5" value="3X-Large" />
                <input type="hidden" name="option_amount5" value="25.00" />
                <input type="hidden" name="option_select6" value="4X-Large" />
                <input type="hidden" name="option_amount6" value="25.00" />
                <input type="hidden" name="option_select7" value="5X-Large" />
                <input type="hidden" name="option_amount7" value="25.00" />
                <input type="hidden" name="option_index" value="0" />
              </div>
              <input type="image" className="cartButton" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <div className="line" />
          </div>

          <div className="cartItem">
            <h4> Hoody </h4>
            <div className="regularItem">
              <img alt="shirt" className="shoppingImg" src={hoody} />
            </div>

            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="cartForm">
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="business" value="info@lovechangingtheworld.org" />
              <input type="hidden" name="lc" value="US" />
              <input type="hidden" name="item_name" value="Love Changing the World - Hoody" />
              <input type="hidden" name="button_subtype" value="products" />
              <input type="hidden" name="no_note" value="0" />
              <input type="hidden" name="shipping" value="5.00" />
              <input type="hidden" name="add" value="1" />
              <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest" />

              <div className="ShoppingOptions">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="Size" />
                        Size
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os0">
                          <option value="Small">Small $40.00 USD</option>
                          <option value="Medium">Medium $40.00 USD</option>
                          <option value="Large">Large $40.00 USD</option>
                          <option value="Extra-Large">
                            Extra-Large $40.00 USD
                          </option>
                          <option value="XX-Large">
                            XX-Large $45.00 USD
                          </option>
                          <option value="3X-Large">
                            3X-Large 425.00 USD
                          </option>
                          <option value="4X-Large">
                            4X-Large $45.00 USD
                          </option>
                          <option value="5X-Large">
                            5X-Large $45.00 USD
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="hidden" name="on1" value="Color" />
                        Color
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os1" >
                          <option value="Black Hoody - Red Text">
                            Black Hoody - Red Text
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="option_select0" value="Small" />
                <input type="hidden" name="option_amount0" value="40.00" />
                <input type="hidden" name="option_select1" value="Medium" />
                <input type="hidden" name="option_amount1" value="40.00" />
                <input type="hidden" name="option_select2" value="Large" />
                <input type="hidden" name="option_amount2" value="40.00" />
                <input type="hidden" name="option_select3" value="Extra-Large" />
                <input type="hidden" name="option_amount3" value="40.00" />
                <input type="hidden" name="option_select4" value="XX-Large" />
                <input type="hidden" name="option_amount4" value="45.00" />
                <input type="hidden" name="option_select5" value="3X-Large" />
                <input type="hidden" name="option_amount5" value="45.00" />
                <input type="hidden" name="option_select6" value="4X-Large" />
                <input type="hidden" name="option_amount6" value="45.00" />
                <input type="hidden" name="option_select7" value="5X-Large" />
                <input type="hidden" name="option_amount7" value="45.00" />
                <input type="hidden" name="option_index" value="0" />
              </div>
              <input type="image" className="cartButton" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
            <div className="line" />
          </div>

          <div className="cartItem">
            <h4> VIP T-Shirts </h4>
            <div className="newItem">
              <img alt="vipshirt" className="shoppingImg" src={this.state.vipimage} />
            </div>

            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="cartForm">
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="business" value="info@lovechangingtheworld.org" />
              <input type="hidden" name="lc" value="US" />
              <input type="hidden" name="item_name" value="Love Changing the World - Shirt" />
              <input type="hidden" name="button_subtype" value="products" />
              <input type="hidden" name="no_note" value="0" />
              <input type="hidden" name="shipping" value="5.00" />
              <input type="hidden" name="add" value="1" />
              <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest" />

              <div className="ShoppingOptions">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="Size" />
                        Size
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os0">
                          <option value="Small">Small $20.00 USD</option>
                          <option value="Medium">Medium $20.00 USD</option>
                          <option value="Large">Large $20.00 USD</option>
                          <option value="Extra-Large">
                            Extra-Large $20.00 USD
                          </option>
                          <option value="XX-Large">
                            XX-Large $25.00 USD
                          </option>
                          <option value="3X-Large">
                            3X-Large $25.00 USD
                          </option>
                          <option value="4X-Large">
                            4X-Large $25.00 USD
                          </option>
                          <option value="5X-Large">
                            5X-Large $25.00 USD
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="hidden" name="on1" value="Color" />
                        Color
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os2" onChange={this.changeVIP} value={this.state.value}>
                          <option value="Black - Gold">
                            Black - Gold{" "}
                          </option>
                          <option value="Black - Silver">
                            Black - Platinum{" "}
                          </option>
                          <option value="Red - Gold">Red - Gold </option>
                          <option value="Red - Silver">
                            Red - Platinum{" "}
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="option_select0" value="Small" />
                <input type="hidden" name="option_amount0" value="20.00" />
                <input type="hidden" name="option_select1" value="Medium" />
                <input type="hidden" name="option_amount1" value="20.00" />
                <input type="hidden" name="option_select2" value="Large" />
                <input type="hidden" name="option_amount2" value="20.00" />
                <input type="hidden" name="option_select3" value="Extra-Large" />
                <input type="hidden" name="option_amount3" value="20.00" />
                <input type="hidden" name="option_select4" value="XX-Large" />
                <input type="hidden" name="option_amount4" value="25.00" />
                <input type="hidden" name="option_select5" value="3X-Large" />
                <input type="hidden" name="option_amount5" value="25.00" />
                <input type="hidden" name="option_select6" value="4X-Large" />
                <input type="hidden" name="option_amount6" value="25.00" />
                <input type="hidden" name="option_select7" value="5X-Large" />
                <input type="hidden" name="option_amount7" value="25.00" />
                <input type="hidden" name="option_index" value="0" />
              </div>
              <p>
                {" "}
                If you would like this item, please support us by visiting the <Link to="/membership">membership</Link> page.
              </p>
            </form>
            <div className="line" />
          </div>

          <div className="cartItem">
            <h4> VIP Tank Tops </h4>
            <div className="newItem">
              <img alt="vipshirt" className="shoppingImg" src={this.state.viptank} />
            </div>

            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="cartForm">
              <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="business" value="info@lovechangingtheworld.org" />
              <input type="hidden" name="lc" value="US" />
              <input type="hidden" name="item_name" value="Love Changing the World - Shirt" />
              <input type="hidden" name="button_subtype" value="products" />
              <input type="hidden" name="no_note" value="0" />
              <input type="hidden" name="shipping" value="5.00" />
              <input type="hidden" name="add" value="1" />
              <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest" />

              <div className="ShoppingOptions">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="Size" />
                        Size
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os0">
                          <option value="Small">Small $20.00 USD</option>
                          <option value="Medium">Medium $20.00 USD</option>
                          <option value="Large">Large $20.00 USD</option>
                          <option value="Extra-Large">
                            Extra-Large $20.00 USD
                          </option>
                          <option value="XX-Large">
                            XX-Large $25.00 USD
                          </option>
                          <option value="3X-Large">
                            3X-Large $25.00 USD
                          </option>
                          <option value="4X-Large">
                            4X-Large $25.00 USD
                          </option>
                          <option value="5X-Large">
                            5X-Large $25.00 USD
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="hidden" name="on1" value="Color" />
                        Color
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os2" onChange={this.changeVIPTank} value={this.state.value}>
                          <option value="VIP Tank Top - Gold">Gold </option>
                          <option value="VIP Tank Top - Platinum">
                            Platinum{" "}
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="option_select0" value="Small" />
                <input type="hidden" name="option_amount0" value="20.00" />
                <input type="hidden" name="option_select1" value="Medium" />
                <input type="hidden" name="option_amount1" value="20.00" />
                <input type="hidden" name="option_select2" value="Large" />
                <input type="hidden" name="option_amount2" value="20.00" />
                <input type="hidden" name="option_select3" value="Extra-Large" />
                <input type="hidden" name="option_amount3" value="20.00" />
                <input type="hidden" name="option_select4" value="XX-Large" />
                <input type="hidden" name="option_amount4" value="25.00" />
                <input type="hidden" name="option_select5" value="3X-Large" />
                <input type="hidden" name="option_amount5" value="25.00" />
                <input type="hidden" name="option_select6" value="4X-Large" />
                <input type="hidden" name="option_amount6" value="25.00" />
                <input type="hidden" name="option_select7" value="5X-Large" />
                <input type="hidden" name="option_amount7" value="25.00" />
                <input type="hidden" name="option_index" value="0" />
              </div>
              <p>
                {" "}
                If you would like this item, please support us by visiting the <Link to="/membership">membership</Link> page.
              </p>
            </form>
            <div className="line" />
          </div>


          <div className="cartItem">
            <h4> VIP Aprons </h4>
            <div className="newItem">
              <img alt="vipshirt" className="shoppingImg" src={this.state.vipapron} />
            </div>
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="cartForm">
              <div className="ShoppingOptions">
                <input type="hidden" name="cmd" value="_cart" />
              <input type="hidden" name="business" value="info@lovechangingtheworld.org" />
                <input type="hidden" name="lc" value="US" />
                <input type="hidden" name="item_name" value="Aprons" />
                <input type="hidden" name="button_subtype" value="products" />
                <input type="hidden" name="no_note" value="0" />
                <input type="hidden" name="shipping" value="5.00" />
                <input type="hidden" name="add" value="1" />
                <input type="hidden" name="bn" value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest" />

                <table>
                  <tbody>
                    <tr>
                      <td>
                        <input type="hidden" name="on0" value="Color" />
                        Color
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select name="os2" onChange={this.changeVIPApron} value={this.state.value}>
                          <option value="VIP Apron - Red Text">
                            Black - Red{" "}
                          </option>
                          <option value="VIP Apron - Silver Text">
                            Black - Silver{" "}
                          </option>
                        </select>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

              </div>
            </form>
            <p>
                {" "}
                If you would like this item, please support us by visiting the <Link to="/membership">membership</Link> page.
              </p>

            <div className="line" />
          </div>


          </div>
      </div>;
  }
}

export default Donations