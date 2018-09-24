import React, { Component } from 'react';
import "../css/Membership.css";

class Membership extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">Memberships</h1>
                

                <div className="plat parallax">
                	<h1> Platinum </h1>
				</div>
				<div className="membership-description">
					As a PLATINUM member, you will receive the exclusive LCTW VIP Platinum T-Shirt, as well as a Platinum VIP Tank Top and Apron. You will also receive two free tickets to events hosted by LCTW, and any new merchandise that will be released. Please check out these items in the Shop. Platinum membership is earned by donors who contribute $100 a month to LCTW and their cause.					
					<div className="donation-button">
					<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_donations"></input>
					<input type="hidden" name="business" value="info@lovechangingtheworld.org"></input>
					<input type="hidden" name="lc" value="US"></input>
					<input type="hidden" name="item_name" value="Love Changing the World"></input>
					<input type="hidden" name="item_number" value="Platinum"></input>
					<input type="hidden" name="amount" value="100.00"></input>
					<input type="hidden" name="currency_code" value="USD"></input>
					<input type="hidden" name="no_note" value="0"></input>
					<input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest"></input>
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
					<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
					</form>
					</div>

				</div>
                <div className="gold parallax">
                	<h1> Gold </h1>
				</div>
				<div className="membership-description">
					As a GOLD member, you will receive the exclusive LCTW VIP Gold T-Shirt, as well as a Gold VIP Tank Top and Apron. You will also receive one free ticket to events hosted by LCTW, and any new merchandise that will be released. Please check out these items in the Shop. Gold membership is earned by donors who contribute $50 a month to LCTW and their cause.
					<div className="donation-button">
					<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_donations"></input>
					<input type="hidden" name="business" value="info@lovechangingtheworld.org"></input>
					<input type="hidden" name="lc" value="US"></input>
					<input type="hidden" name="item_name" value="Love Changing the World"></input>
					<input type="hidden" name="item_number" value="Gold"></input>
					<input type="hidden" name="amount" value="50.00"></input>
					<input type="hidden" name="currency_code" value="USD"></input>
					<input type="hidden" name="no_note" value="0"></input>
					<input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest"></input>
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
					<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
					</form>
					</div>
				</div>
                <div className="red parallax">
                	<h1> Red </h1>
				</div>
				<div className="membership-description">
					As a RED member, you will receive the exclusive LCTW VIP Red T-Shirt, as well as a Red VIP Tank Top and Apron. You will be able to purchase discounted tickets to events hosted by LCTW, and any new merchandise that will be released. Please check out these items in the Shop. Red membership is earned by Board Members and Staff.

				</div>
				<div className="basic parallax">
					<h1> Basic </h1>
				</div>
				<div className="membership-description">
					As a Basic member, you will receive a customized T-Shirt. You will be able to purchase discounted tickets to events hosted by LCTW. Please check out these items in the Shop. Basic membership is earned by donors who contribute $20 a month to LCTW and their cause.
					<div className="donation-button">
					<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_donations"></input>
					<input type="hidden" name="business" value="info@lovechangingtheworld.org"></input>
					<input type="hidden" name="lc" value="US"></input>
					<input type="hidden" name="item_name" value="Love Changing the World"></input>
					<input type="hidden" name="item_number" value="Platinum"></input>
					<input type="hidden" name="amount" value="20.00"></input>
					<input type="hidden" name="currency_code" value="USD"></input>
					<input type="hidden" name="no_note" value="0"></input>
					<input type="hidden" name="bn" value="PP-DonationsBF:btn_donateCC_LG.gif:NonHostedGuest"></input>
					<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"></input>
					<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></img>
					</form>
					</div>
				</div>
		
				<div className="membership-description">
					*If you refer a LOVED one to join our LCTW family, you will receive a FREE T-shirt of your choice!
				</div>
			</div>
        );
    }
}

export default Membership;