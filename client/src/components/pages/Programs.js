import React, { Component } from "react";
import "../css/Programs.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Programs extends Component {
  constructor(props) {
    super(props);
    this.state = { modal1: false, modal2: false, modal3: false };

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
  }

  toggle1() {
    this.setState({
      modal1: !this.state.modal1
    });
  }
  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }
  toggle3() {
    this.setState({
      modal3: !this.state.modal3
    });
  }
  toggle4() {
    this.setState({
      modal4: !this.state.modal4
    });
  }
  toggle5() {
    this.setState({
      modal5: !this.state.modal5
    });
  }

  render() {
    return <div>
        <h1 className="display-1">Programs</h1>
        <div className="row">
        <div className="col">
          <Button className="btn-block" color="danger" onClick={this.toggle1}>
              Love Blessings Backpacks
            </Button>
            <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}>
              <ModalHeader toggle={this.toggle1}>
                Love Blessings Backpacks
              </ModalHeader>
              <ModalBody>
                <p className="lead">
                  Includes personal care and hygiene items, healthy snacks and
                  list of social services (certified food distribution, medical
                  care, shelter, etc.) Socks, Underclothes, T-Shirt, Blue Jeans,
                  and other clothing is included. Distributed monthly at
                  locations most frequented by homeless populations.
                </p>
                <p className="lead">
                  Men, Women, Children, Infants and Toddlers of all sizes
                </p>
                <p className="lead font-weight-light font-italic">
                  (Please, no used items)
                </p>
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
                  <span className="font-weight-bold">Winter:</span>
                  <li>Hats, Scarves, Gloves</li>
                  <li>Coats, Jackets, Sweaters</li>
                  <li>Thermal Pants/Shirts</li>
                  <span className="font-weight-bold">Additional Items:</span>
                  <li>Blankets</li>
                  <li>Tents</li>
                  <li>Sleeping Bags</li>
                  <li>Air Mattress</li>
                  <li>Cots</li>
                </ul>
              </ModalBody>
              <ModalFooter>
              <Button color="secondary" onClick={this.toggle1}>
                Close
                </Button>
              </ModalFooter>
            </Modal>
          </div>

      <div className="col">
          <Button className="btn-block" color="danger" onClick={this.toggle2}>
            Love Blessings Gift Bags
          </Button>
          <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
            <ModalHeader toggle={this.toggle2}>
              Love Blessings Gift Bags
            </ModalHeader>
            <ModalBody>
              <p className="lead">
                Includes personal care and hygiene items, healthy snacks and
                list of social services (certified food distribution, medical
                care, shelter, etc.) socks and others. Distributed monthly at
                locations most frequented by homeless populations.
              </p>
              <p className="lead font-weight-light font-italic">
                (Please, no used items)
              </p>
              <ul className="list-unstyled">
                <li>Bottled water</li>
                <li>Ziploc storage bags (or) Freezer bags</li>
                <li>Hand sanitizer, Wet ones, Tissues</li>
                <li>
                  *Granola bars, *Protein bars, *Trail mix, *Peanuts, *Fruit
                  snacks
                </li>
                <li>Chewing gum, Breath mints, Candy</li>
                <li>Deodorant</li>
                <li>Toothbrush, Toothpaste, Mouthwash</li>
                <li>Lotion, Vaseline, Chap stick, Lip gloss</li>
                <li>Bodywash, Soap, Shampoo, Conditioner</li>

                <li>Baby wipes, Baby power, Baby Shampoo, Baby lotion</li>
                <li>Pampers, Sanitary Napkins and Tampons (ladies)</li>
                <li>Socks</li>
                <li>Bible tracks, Pocket bibles</li>
                <li>Shaving cream, Razors</li>

                <span className="font-weight-bold">Winter:</span>
                <li>Hats, Scarves, Gloves</li>
              </ul>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle2}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
          </div>

      <div className="col">
          <Button className="btn-block" color="danger" onClick={this.toggle3}>
            Love Blessings Condoms & Candy Bags
          </Button>
          <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}>
            <ModalHeader toggle={this.toggle3}>
              Love Blessings Condoms & Candy Bags
            </ModalHeader>
            <ModalBody>
              <p className="lead">
                Provides HIV/STD education and prevention through the
                distribution of small gift packets that include condoms,
                candies, and information about safer sex practices and health
                resources.
              </p>

              <p className="lead font-weight-light font-italic">
                (Individual Packages or cases / Please, no used items)
              </p>
              <ul className="list-unstyled">
                <li>Various Candy</li>
                <li>Flavored Condoms</li>
                <li>Regular Condoms</li>
                <li>Women Condoms</li>
                <li>Men Plus Size Condoms</li>
                <li>Lubricant</li>
                <li>STD/HIV Prevention Information</li>
                <li>Get Tested Information</li>
                <li>Plan Parenthood Information</li>
                <li>Anonymous and Confidential Free HIV testing: 1 (408) 792-3720</li>
              </ul>

              <hr />
            <h5>All information provided by:</h5>
            <h5>The Santa Clara County Public Health Department</h5>
            <h5>The Crane Center</h5>
            <h5>Planned Parenthood</h5>

            </ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={this.toggle3}>
              Close
              </Button>
            </ModalFooter>
          </Modal>
          </div>
        </div>

      <div className="row">
        <div className="col">
          <Button className="btn-block" color="danger" onClick={this.toggle4}>
          Shower of Love
          </Button>
        <Modal isOpen={this.state.modal4} toggle={this.toggle4} className={this.props.className}>
          <ModalHeader toggle={this.toggle4}>
            Shower of Love
            </ModalHeader>
          <ModalBody>
            <p className="lead">
              Will provide access to showers and laundry services to chronic and transitional homeless populations.
              </p>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle4}>
              Close
              </Button>
          </ModalFooter>
        </Modal>
        </div>

        <div className="col">
          <Button className="btn-block" color="danger" onClick={this.toggle5}>
          "I AM" WORTH IT!!! (coming soon)
          </Button>
        <Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className}>
          <ModalHeader toggle={this.toggle5}>
            "I AM" WORTH IT!!! (coming soon)
            </ModalHeader>
          <ModalBody>
            <p className="lead">
              Support for young children to Empower, Encourage, & Inspire them to know their worth.
              </p>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle5}>
              Close
              </Button>
          </ModalFooter>
        </Modal>
        </div>
        </div>
      </div>;
  }
}

export default Programs;
