import React, { Component } from 'react'
import "../css/Donations.css";


import Shirt from '../../images/Shop/IMG_0023.JPG';
import Apron from '../../images/Shop/IMG_4275.JPG';


class Donations extends Component {
  render() {
    return (
      <div className="donations">
        <h1 className="display-1">Donations</h1>
        <p className="lead">Hello all, The Love Changing The World Family is seeking donations for the homeless and less fortunate. We are looking to make a difference in local communities and even expand our loving gestures beyond. Recently, there has been a tragic storm in Houston, Texas, and we are looking to be as helpful as possible to help the families that has suffered from loss of personal items and even homes. Remember there is no donation too small, spread the word and LOVE. There will be links to send funds to. Thank you for your generous HEARTS! We LOVE you ALL!!!</p>
        <div className="donatebuttons">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
          <input type="hidden" name="cmd" value="_s-xclick"></input>
          <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----MIIHPwYJKoZIhvcNAQcEoIIHMDCCBywCAQExggEwMIIBLAIBADCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwDQYJKoZIhvcNAQEBBQAEgYBBluC39s971YmMRdK/eGNoYiX18oLRgGGYq0U/MunlLJRaF4NRoG0yWVtIcm2dF4Wio+rNPWTnzl2Cf2qrozj6YrWAfBCpvy3lOHTXz1BVO66gPzAwZQUEwnzkWDTDpO2zY8npQubHx37r4roaJHSrNOlolwNYm7kN3yCHiRsRIzELMAkGBSsOAwIaBQAwgbwGCSqGSIb3DQEHATAUBggqhkiG9w0DBwQIgwPZBhMz/ESAgZiypL1ln9o4ncO81MjcA+Aq7G+q1hooiC5Gulb/1j2JP/p+pP2baue7DaI70pT+3UM/F9MXq2kaB6yTsPAS4SG604clhTAvwgg8+puX6qc/ZruomurRlUHHe72jwskXFtmB+5F5qRuXeK0bx6jnMnmixQxA+sLs7Ac83RlQPKj5wQ3Vp0s0YRHKuTwa/dAnAQrQ8Hu4ep4oN6CCA4cwggODMIIC7KADAgECAgEAMA0GCSqGSIb3DQEBBQUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTAeFw0wNDAyMTMxMDEzMTVaFw0zNTAyMTMxMDEzMTVaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECBMCQ0ExFjAUBgNVBAcTDU1vdW50YWluIFZpZXcxFDASBgNVBAoTC1BheVBhbCBJbmMuMRMwEQYDVQQLFApsaXZlX2NlcnRzMREwDwYDVQQDFAhsaXZlX2FwaTEcMBoGCSqGSIb3DQEJARYNcmVAcGF5cGFsLmNvbTCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAwUdO3fxEzEtcnI7ZKZL412XvZPugoni7i7D7prCe0AtaHTc97CYgm7NsAtJyxNLixmhLV8pyIEaiHXWAh8fPKW+R017+EmXrr9EaquPmsVvTywAAE1PMNOKqo2kl4Gxiz9zZqIajOm1fZGWcGS0f5JQ2kBqNbvbg2/Za+GJ/qwUCAwEAAaOB7jCB6zAdBgNVHQ4EFgQUlp98u8ZvF71ZP1LXChvsENZklGswgbsGA1UdIwSBszCBsIAUlp98u8ZvF71ZP1LXChvsENZklGuhgZSkgZEwgY4xCzAJBgNVBAYTAlVTMQswCQYDVQQIEwJDQTEWMBQGA1UEBxMNTW91bnRhaW4gVmlldzEUMBIGA1UEChMLUGF5UGFsIEluYy4xEzARBgNVBAsUCmxpdmVfY2VydHMxETAPBgNVBAMUCGxpdmVfYXBpMRwwGgYJKoZIhvcNAQkBFg1yZUBwYXlwYWwuY29tggEAMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQEFBQADgYEAgV86VpqAWuXvX6Oro4qJ1tYVIT5DgWpE692Ag422H7yRIr/9j/iKG4Thia/Oflx4TdL+IFJBAyPK9v6zZNZtBgPBynXb048hsP16l2vi0k5Q2JKiPDsEfBhGI+HnxLXEaUWAcVfCsQFvd2A1sxRr67ip5y2wwBelUecP3AjJ+YcxggGaMIIBlgIBATCBlDCBjjELMAkGA1UEBhMCVVMxCzAJBgNVBAgTAkNBMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MRQwEgYDVQQKEwtQYXlQYWwgSW5jLjETMBEGA1UECxQKbGl2ZV9jZXJ0czERMA8GA1UEAxQIbGl2ZV9hcGkxHDAaBgkqhkiG9w0BCQEWDXJlQHBheXBhbC5jb20CAQAwCQYFKw4DAhoFAKBdMBgGCSqGSIb3DQEJAzELBgkqhkiG9w0BBwEwHAYJKoZIhvcNAQkFMQ8XDTE4MDgwNjIwMTY0NlowIwYJKoZIhvcNAQkEMRYEFAjZ1LjvHnJtUhSPhPTPDYc/JHnJMA0GCSqGSIb3DQEBAQUABIGAQynGC/oayPH2c7rNle6k0IbXU2sHjfdTqySo/2cONXDfmjKU/zxx1RJP4ILBrV1QhxPmrH32apNUDBfSuHdSnvVVDjJJZSPbiY9pEtsVKDKRi2cSbOgF/cUiOi88/1eYv6Y28EYHE1Z4R313oAbouGmelIiLoz5meXe1YTVRW94=-----END PKCS7-----
          "></input>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          </input>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
          </form>

          </div>
 

        <div className="cartItem">
          <h4> Shirts! </h4>
          <img alt="shirt" className="shoppingImg" src={Shirt}></img>
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
            </select> </td></tr>
            <tr><td><input type="hidden" name="on1" value="Color"></input>Color</td></tr><tr><td><select name="os1">
              <option value="Red - White Text">Red - White Text </option>
              <option value="Red - Black Text">Red - Black Text </option>
              <option value="Black - Red Text">Black - Red Text </option>
              <option value="Black - White Text">Black - White Text </option>
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
            <input type="hidden" name="option_index" value="0"></input>
          </div>
          <input type="image" className="cartButton" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          </input><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </img></form>

        </div>

        <div className="cartItem">
          <h4> Aprons! </h4>
          <img className="shoppingImg" src={Apron}></img>
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