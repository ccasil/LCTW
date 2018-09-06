import React, { Component } from "react";
import "../css/Programs.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// image routes for Event 12
import event12_image1 from '../../images/Events/Event_12/1.JPG';
import event12_image2 from '../../images/Events/Event_12/2.JPG';
import event12_image3 from '../../images/Events/Event_12/3.JPG';
import event12_image4 from '../../images/Events/Event_12/4.JPG';
import event12_image5 from '../../images/Events/Event_12/5.JPG';
import event12_image6 from '../../images/Events/Event_12/6.JPG';
import event12_image7 from '../../images/Events/Event_12/7.JPG';
import event12_image8 from '../../images/Events/Event_12/8.JPG';
import event12_image9 from '../../images/Events/Event_12/9.JPG';
import event12_image10 from '../../images/Events/Event_12/10.JPG';
import event12_image11 from '../../images/Events/Event_12/11.JPG';
import event12_image12 from '../../images/Events/Event_12/12.JPG';
import event12_image13 from '../../images/Events/Event_12/13.JPG';
import event12_image14 from '../../images/Events/Event_12/14.JPG';
import event12_image15 from '../../images/Events/Event_12/15.JPG';
import event12_image16 from '../../images/Events/Event_12/16.JPG';
import event12_image17 from '../../images/Events/Event_12/17.JPG';
import event12_image18 from '../../images/Events/Event_12/18.JPG';
import event12_image19 from '../../images/Events/Event_12/19.JPG';
import event12_image20 from '../../images/Events/Event_12/20.JPG';
import event12_image21 from '../../images/Events/Event_12/21.JPG';
import event12_image22 from '../../images/Events/Event_12/22.JPG';
import event12_image23 from '../../images/Events/Event_12/23.JPG';
import event12_image24 from '../../images/Events/Event_12/24.JPG';
import event12_image25 from '../../images/Events/Event_12/25.JPG';
import event12_image26 from '../../images/Events/Event_12/26.JPG';
import event12_image27 from '../../images/Events/Event_12/27.JPG';

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

    const imgArr_event12 = [
      event12_image1, event12_image2, event12_image3, event12_image4, event12_image5, event12_image6, event12_image7, event12_image8, event12_image9, event12_image10, event12_image11, event12_image12, event12_image13, event12_image14, event12_image15, event12_image16, event12_image17, event12_image18, event12_image19,
      event12_image20, event12_image21, event12_image22, event12_image23, event12_image24, event12_image25, event12_image26, event12_image27]

    return <div>
        <h1 className="display-1">Programs</h1>
        <div className="row">
        <div className="col-12">
          <Button className="btn-block btn-lg" color="danger" onClick={this.toggle1}>
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

      <div className="col-12">
          <Button className="btn-block btn-lg" color="danger" onClick={this.toggle2}>
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

      <div className="col-12">
          <Button className="btn-block btn-lg" color="danger" onClick={this.toggle3}>
            Love Blessings Candy &amp; Condoms Bags
          </Button>
          <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}>
            <ModalHeader toggle={this.toggle3}>
              Love Blessings Candy &amp; Condoms Bags
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
            <p className="font-weight-bold">All information provided by:</p>
            <p>The Santa Clara County Public Health Department - The Crane Center</p>
            <p>Planned Parenthood</p>

            </ModalBody>
            <ModalFooter>
            <Button color="secondary" onClick={this.toggle3}>
              Close
              </Button>
            </ModalFooter>
          </Modal>
          </div>

        <div className="col-12">
          <Button className="btn-block btn-lg" color="danger" onClick={this.toggle4}>
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

        <div className="col-12">
          <Button className="btn-block btn-lg" color="danger" onClick={this.toggle5}>
          "I AM" WORTH IT!!! (coming soon)
          </Button>
        <Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className}>
          <ModalHeader toggle={this.toggle5}>
            "I AM" WORTH IT!!! (coming soon)
            </ModalHeader>
          <ModalBody>
            <p className="lead">
              Support for young children to Empower, Encourage, &amp; Inspire them to know their worth.
              </p>
              <ul className="list-unstyled">
                {imgArr_event12.map(function (image, index) {
                  return (
                    <img key={index} src={image} alt="" />
                  )
                })}
              </ul>
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
