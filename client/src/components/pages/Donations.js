import React, { Component } from 'react';
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import "../css/Donations.css";

// image routes for Event 8
import event8_image1 from '../../images/Events/Event_8/1.jpg';
import event8_image2 from '../../images/Events/Event_8/2.jpg';
import event8_image3 from '../../images/Events/Event_8/3.jpg';

class Donations extends Component {
        constructor(props) {
        super(props);
        this.state = { autoplay: true };
    }
    slideNext = () => {
        this.slider.slideNext();
    };
    slidePrev = () => {
        this.slider.slidePrev();
    };
    goToSlide = () => {
        this.slider.goToSlide(4);
    };
    autoplay = () => {
        this.setState({ autoplay: !this.state.autoplay });
    };
    _changeIcon = () => {
        let { leftIcon, rightIcon } = this.state;
        if (leftIcon && rightIcon) {
            this.setState({
                leftIcon: undefined,
                rightIcon: undefined
            });
        } else {
            this.setState({
                leftIcon: <span className="fa fa-glass" />,
                rightIcon: <span className="fa fa-music" />
            });
        }
    };

    render() {

        const imgArr_event8 = [
            event8_image1, event8_image2, event8_image3
        ];

        let { leftIcon, rightIcon } = this.state;

        return (
            <div>
                <h1 className="display-1">Donations</h1>
                <p className="text-center">Our #LCTW Family would like to thank New Mission Community Church, Peter's Bakery, Safeway, Lucky, The Home Depot, and Walmart for your help, donations, &amp; support... We <span className="font-weight-bold">LOVE</span> you all!</p>
                <div className="row">
                    <div className="col-md-12" style={{ marginTop: 40, marginBottom: 80 }}>
                        <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                            {imgArr_event8.map(function (image, index) {
                                return <div className="text-center" key={index}>
                                    <img className="donationImg" src={image} alt="" />
                                  </div>;
                            })}
                        </RBCarousel>
                    </div>
                </div>

                <p className="font-weight-bold">In-Kind Donations:</p>
                <p>In-kind contributions of equipment, supplies, product, services, tickets to events, museum,
performances and sporting events, gift cards and other resources are yet another way to
support LCTW.</p>
                <p>Please support our Love Blessings BACKPACKS, Love Blessings Gift Bags, &amp; Love Blessings
Candy &amp; Condoms… NO USED ITEMS!</p>
                <p className="font-weight-bold">Sponsorships:</p>
                <p>Through events sponsorship and program underwriting, your company can enhance its visibility
by putting your business’s name on our T-shirts for us to advertise</p>
                <p>Sponsor our annual Gala and Fundraising events express your company’s commit to community
by underwriting one of our programs</p>
                <p className="font-weight-bold">Employee Giving Campaigns &amp; Giving Programs:</p>
                <p>Did you know?</p>
                <p>Many companies have programs in place to help their employees facilitate their gift. You can
designate Love Changing The World, Inc. as the beneficiary of contribution through an
automatic payroll dedicated or through local United Way workplace campaign.</p>
                <p>Through your company’s Matching Gift Program, and gift you pledge to LCTW will be matched
equally by your employer, doubling your gift’s impact.</p>
                <p>Join us today by contacting your company’s human resources, community relations, publicity or
marketing department for more information.</p>
                <p className="font-weight-bold">Love Blessings:</p>
                <p>Love Changing The World, Inc. encourages you to think about legacy by including our
organization as a beneficiary in your estates, will, or trusts… Ask your tax professional about the
advantages you may incur through charitable remainder trusts, bequests, retirement plans, real
estate property, stocks, and bonds, insurance and residence as a gift to our endowment fund.</p>
                <p>LCTW is a 501 (c)(3) Non-profit charity organization with allows you tax breaks.</p>
                <p>For more information, please email info@lovechangingtheworld.org or call us at 1 (347) 849-
4618.</p>
                <p>Our LCTW Family thanks you for your LOVE blessings and support, It’s GREATLY appreciated!
Let’s build LOVING communities together</p>
                <p>We LOVE you ALL!</p>
            </div>
        );
    }
}

export default Donations;