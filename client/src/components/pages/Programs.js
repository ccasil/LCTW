import React, { Component } from "react";
import "../css/Programs.css";
import { Modal, Button, Popover, Tooltip, OverlayTrigger } from "react-bootstrap";

class Programs extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
            <h1 className="display-1">Programs</h1>


        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                Love Blessings Backpacks
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
                    <Modal.Title>Love Blessings Backpacks</Modal.Title>
          </Modal.Header>
          <Modal.Body>

                    <h4>Popover in a modal</h4>
                    <p>
                        there is a{" "}
                        <OverlayTrigger overlay={popover}>
                            <a href="#popover">popover</a>
                        </OverlayTrigger>{" "}
                        here
            </p>

                    <h4>Tooltips in a modal</h4>
                    <p>
                        there is a{" "}
                        <OverlayTrigger overlay={tooltip}>
                            <a href="#tooltip">tooltip</a>
                        </OverlayTrigger>{" "}
                        here
            </p>



                    <p className="lead">Includes personal care and hygiene items, healthy snacks and list of social services (certified food distribution, medical care, shelter, etc.) socks, underclothes, t-shirts, blue jeans, and other clothing is included. Distributed monthly at locations most frequented by homeless populations.</p>
           <p className="lead">Men, Women, Children, Infants and Toddlers of all sizes</p>
         <p className="lead font-weight-light font-italic">(Please, no used items)</p>
               <ul className="list-unstyled">
                   <li>Backpacks</li>
                   <li>Socks</li>
                   <li>T-Shirts</li>
                 <li>Men's Underwear</li>
                   <li>Women's Panties</li>
                   <li>Children's Underclothes</li>
                   <li>Pampers</li>
                   <li>Blue Jeans</li>
              <li>Sweat Pants/Shirts</li>
        <li>Shoes <span className="font-weight-light font-italic">(all sizes)</span></li>
            <span className="font-weight-bold">Winter:</span>
                   <li>Hats, Scarves, Gloves</li>
                   <li>Coats, Jackets, Sweaters</li>
                   <li>Thermal Pants/Shirts</li>
                   <span className="font-weight-bold">Hygiene:</span>
                 <li>Hand sanitizer</li>
                   <li>Chap stick, lip gloss</li>
                   <li>Tooth Paste, Tooth brushes, Mouthwash</li>
                   <li>Lotion, Vaseline, Body wash, Soap</li>
                   <li>Shampoo, Conditioner, Deodorants,</li>
                 <li>Sanitary napkins or tampons (Ladies)</li>
                   <li>Shaving cream, razors</li>
                   <li>Kleenex, Baby wipes, Wet ones</li>
                   <span className="font-weight-bold">Snacks:</span>
                   <li>Ziploc storage or Freezer bags</li>
                   <li>*Bottle water</li>
                   <li>Granola bars, Protein bars, Fruit snacks, Trail mix</li>
                   <li>Chewing gum, Breath mints, Candy (mini)</li>
                   <span className="font-weight-bold">Additional Items:</span>
                   <li>Blankets</li>
                   <li>Tents</li>
                   <li>Sleeping Bags</li>
                   <li>Air Mattress</li>
                   <li>Cots</li>
               </ul>


            <hr />

            
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  // render() {
  //     return (

  //         <div>
  //             <h1 className="display-1">Programs</h1>
  //             <h2 className="font-weight-bold">Love Blessings Backpacks</h2>
  //             <p className="lead">Includes personal care and hygiene items, healthy snacks and list of social services (certified food distribution, medical care, shelter, etc.) socks, underclothes, t-shirts, blue jeans, and other clothing is included. Distributed monthly at locations most frequented by homeless populations.</p>
  //             <p className="lead">Men, Women, Children, Infants and Toddlers of all sizes</p>
  //             <p className="lead font-weight-light font-italic">(Please, no used items)</p>
  //             <ul className="list-unstyled">
  //                 <li>Backpacks</li>
  //                 <li>Socks</li>
  //                 <li>T-Shirts</li>
  //                 <li>Men's Underwear</li>
  //                 <li>Women's Panties</li>
  //                 <li>Children's Underclothes</li>
  //                 <li>Pampers</li>
  //                 <li>Blue Jeans</li>
  //                 <li>Sweat Pants/Shirts</li>
  //                 <li>Shoes <span className="font-weight-light font-italic">(all sizes)</span></li>
  //                 <span className="font-weight-bold">Winter:</span>
  //                 <li>Hats, Scarves, Gloves</li>
  //                 <li>Coats, Jackets, Sweaters</li>
  //                 <li>Thermal Pants/Shirts</li>
  //                 <span className="font-weight-bold">Hygiene:</span>
  //                 <li>Hand sanitizer</li>
  //                 <li>Chap stick, lip gloss</li>
  //                 <li>Tooth Paste, Tooth brushes, Mouthwash</li>
  //                 <li>Lotion, Vaseline, Body wash, Soap</li>
  //                 <li>Shampoo, Conditioner, Deodorants,</li>
  //                 <li>Sanitary napkins or tampons (Ladies)</li>
  //                 <li>Shaving cream, razors</li>
  //                 <li>Kleenex, Baby wipes, Wet ones</li>
  //                 <span className="font-weight-bold">Snacks:</span>
  //                 <li>Ziploc storage or Freezer bags</li>
  //                 <li>*Bottle water</li>
  //                 <li>Granola bars, Protein bars, Fruit snacks, Trail mix</li>
  //                 <li>Chewing gum, Breath mints, Candy (mini)</li>
  //                 <span className="font-weight-bold">Additional Items:</span>
  //                 <li>Blankets</li>
  //                 <li>Tents</li>
  //                 <li>Sleeping Bags</li>
  //                 <li>Air Mattress</li>
  //                 <li>Cots</li>
  //             </ul>
  //             <h2 className="font-weight-bold">Love Blessings Gift Bags</h2>
  //             <p className="lead">Includes personal care and hygiene items, healthy snacks and list of social services (certified food distribution, medical care, shelter, etc.) socks, and other clothing is included. Distributed monthly at locations most frequented by homeless populations.</p>

  //             <h2 className="font-weight-bold">Love Blessings Condoms & Candy Bags</h2>
  //             <p className="lead">Provides HIV/STD education and prevention through the distribution of small gift packets that include condoms, candies, and information about safer sex practices and health resources.</p>
  //             <p className="lead font-weight-light font-italic">(Individual Packages or cases / Please, no used items)</p>
  //             <ul className="list-unstyled">
  //                 <li>Various Candy</li>
  //                 <li>Flavored Condoms</li>
  //                 <li>Regular Condoms</li>
  //                 <li>Women Condoms</li>
  //                 <li>Men Plus Size Condoms</li>
  //                 <li>Lubricant</li>
  //             </ul>
  //             <h2 className="font-weight-bold">Shower of Love</h2>
  //             <p className="lead">Will provide access to showers and laundry services to chronic and transitional homeless populations.</p>
  //             <h2 className="font-weight-bold">"I AM" WORTH IT!!! (coming soon)</h2>
  //             <p className="lead">Design to Empower, Encourage, and Inspire young girls to know their worth.</p>
  //         </div>
  //     );
  // }
}

export default Programs;
