import React, { Component } from 'react';
import "../css/Membership.css";

class Membership extends Component {
    render() {
        return (
            <div>
                <h1 className="display-1">Membership</h1>
                

                <div className="plat parallax">
                	<h1> Platinum </h1>
				</div>
				<div className="membership-description">
					With Platinum membership you recieve the exclusive LCTW VIP Platinum T-Shirt, as well as Platinum VIP TankTop and Aprons as well. You will also recieve free tickets to events hosted by LCTW, and any new merchandise that will be released. Please check these items out in the Shop. Membership is 150$.					
					<div className="donation-button">
					<form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_donations"></input>
					<input type="hidden" name="business" value="H4y4shi-facilitator@gmail.com"></input>
					<input type="hidden" name="lc" value="US"></input>
					<input type="hidden" name="item_name" value="Love Changing the World"></input>
					<input type="hidden" name="item_number" value="Platinum"></input>
					<input type="hidden" name="amount" value="150.00"></input>
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
                <div className="red parallax">
                	<h1> Red </h1>
				</div>
				<div className="membership-description">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>								



			</div>
        );
    }
}

export default Membership;