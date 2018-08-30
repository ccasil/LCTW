import React, { Component } from 'react'
import "../css/Events.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// upcoming events placeholder routes
import placeholder1 from '../../images/Events/26904406_782267771982878_8167205781200355992_n.jpg';
import placeholder2 from '../../images/Events/34035695_853175221558799_4338713599494062080_n.jpg';

// image routes for Event 1
import event1_image2 from '../../images/Events/Event_1/2.jpg';
import event1_image3 from '../../images/Events/Event_1/3.jpg';
import event1_image4 from '../../images/Events/Event_1/4.jpg';
import event1_image5 from '../../images/Events/Event_1/5.jpg';
import event1_image6 from '../../images/Events/Event_1/6.jpg';
import event1_image7 from '../../images/Events/Event_1/7.jpg';
import event1_image8 from '../../images/Events/Event_1/8.jpg';

// image routes for Event 3
import event3_image1 from '../../images/Events/Event_3/1.jpg';
import event3_image2 from '../../images/Events/Event_3/2.jpg';
import event3_image3 from '../../images/Events/Event_3/3.jpg';
import event3_image4 from '../../images/Events/Event_3/4.jpg';
import event3_image5 from '../../images/Events/Event_3/5.jpg';
import event3_image6 from '../../images/Events/Event_3/6.jpg';
import event3_image7 from '../../images/Events/Event_3/7.jpg';
import event3_image8 from '../../images/Events/Event_3/8.jpg';
import event3_image9 from '../../images/Events/Event_3/9.jpg';
import event3_image10 from '../../images/Events/Event_3/10.jpg';
import event3_image11 from '../../images/Events/Event_3/11.jpg';
import event3_image12 from '../../images/Events/Event_3/12.jpg';
import event3_image13 from '../../images/Events/Event_3/13.jpg';
import event3_image14 from '../../images/Events/Event_3/14.jpg';
import event3_image15 from '../../images/Events/Event_3/15.jpg';
import event3_image16 from '../../images/Events/Event_3/16.jpg';
import event3_image17 from '../../images/Events/Event_3/17.jpg';
import event3_image18 from '../../images/Events/Event_3/18.jpg';
import event3_image19 from '../../images/Events/Event_3/19.jpg';
import event3_image20 from '../../images/Events/Event_3/20.jpg';
import event3_image21 from '../../images/Events/Event_3/21.jpg';
import event3_image22 from '../../images/Events/Event_3/22.jpg';
import event3_image23 from '../../images/Events/Event_3/23.jpg';
import event3_image24 from '../../images/Events/Event_3/24.jpg';
import event3_image25 from '../../images/Events/Event_3/25.jpg';
import event3_image26 from '../../images/Events/Event_3/26.jpg';
import event3_image27 from '../../images/Events/Event_3/27.jpg';
import event3_image28 from '../../images/Events/Event_3/28.jpg';

// image routes for Event 4
import event4_image1 from '../../images/Events/Event_4/1.jpg';
import event4_image2 from '../../images/Events/Event_4/2.jpg';
import event4_image3 from '../../images/Events/Event_4/3.jpg';
import event4_image4 from '../../images/Events/Event_4/4.jpg';
import event4_image5 from '../../images/Events/Event_4/5.jpg';
import event4_image6 from '../../images/Events/Event_4/6.jpg';
import event4_image7 from '../../images/Events/Event_4/7.jpg';
import event4_image8 from '../../images/Events/Event_4/8.jpg';
import event4_image9 from '../../images/Events/Event_4/9.jpg';
import event4_image10 from '../../images/Events/Event_4/10.jpg';
import event4_image11 from '../../images/Events/Event_4/11.jpg';
import event4_image12 from '../../images/Events/Event_4/12.jpg';
import event4_image13 from '../../images/Events/Event_4/13.jpg';
import event4_image14 from '../../images/Events/Event_4/14.jpg';
import event4_image15 from '../../images/Events/Event_4/15.jpg';
import event4_image16 from '../../images/Events/Event_4/16.jpg';
import event4_image17 from '../../images/Events/Event_4/17.jpg';
import event4_image18 from '../../images/Events/Event_4/18.jpg';
import event4_image19 from '../../images/Events/Event_4/19.jpg';
import event4_image20 from '../../images/Events/Event_4/20.jpg';
import event4_image21 from '../../images/Events/Event_4/21.jpg';
import event4_image22 from '../../images/Events/Event_4/22.jpg';
import event4_image23 from '../../images/Events/Event_4/23.jpg';
import event4_image24 from '../../images/Events/Event_4/24.jpg';
import event4_image25 from '../../images/Events/Event_4/25.jpg';
import event4_image26 from '../../images/Events/Event_4/26.jpg';
import event4_image27 from '../../images/Events/Event_4/27.jpg';
import event4_image28 from '../../images/Events/Event_4/28.jpg';
import event4_image29 from '../../images/Events/Event_4/29.jpg';
import event4_image30 from '../../images/Events/Event_4/30.jpg';
import event4_image31 from '../../images/Events/Event_4/31.jpg';
import event4_image32 from '../../images/Events/Event_4/32.jpg';
import event4_image33 from '../../images/Events/Event_4/33.jpg';
import event4_image34 from '../../images/Events/Event_4/34.jpg';
import event4_image35 from '../../images/Events/Event_4/35.jpg';
import event4_image36 from '../../images/Events/Event_4/36.jpg';
import event4_image37 from '../../images/Events/Event_4/37.jpg';
import event4_image38 from '../../images/Events/Event_4/38.jpg';
import event4_image39 from '../../images/Events/Event_4/39.jpg';
import event4_image40 from '../../images/Events/Event_4/40.jpg';
import event4_image41 from '../../images/Events/Event_4/41.jpg';
import event4_image42 from '../../images/Events/Event_4/42.jpg';
import event4_image43 from '../../images/Events/Event_4/43.jpg';
import event4_image44 from '../../images/Events/Event_4/44.jpg';
import event4_image45 from '../../images/Events/Event_4/45.jpg';
import event4_image46 from '../../images/Events/Event_4/46.jpg';
import event4_image47 from '../../images/Events/Event_4/47.jpg';
import event4_image48 from '../../images/Events/Event_4/48.jpg';
import event4_image49 from '../../images/Events/Event_4/49.jpg';
import event4_image50 from '../../images/Events/Event_4/50.jpg';

// image routes for Event 5
import event5_image1 from '../../images/Events/Event_5/1.jpg';
import event5_image2 from '../../images/Events/Event_5/2.jpg';
import event5_image3 from '../../images/Events/Event_5/3.jpg';
import event5_image4 from '../../images/Events/Event_5/4.jpg';
import event5_image5 from '../../images/Events/Event_5/5.jpg';
import event5_image6 from '../../images/Events/Event_5/6.jpg';
import event5_image7 from '../../images/Events/Event_5/7.jpg';
import event5_image8 from '../../images/Events/Event_5/8.jpg';
import event5_image9 from '../../images/Events/Event_5/9.jpg';
import event5_image10 from '../../images/Events/Event_5/10.jpg';
import event5_image11 from '../../images/Events/Event_5/11.jpg';
import event5_image12 from '../../images/Events/Event_5/12.jpg';
import event5_image13 from '../../images/Events/Event_5/13.jpg';
import event5_image14 from '../../images/Events/Event_5/14.jpg';
import event5_image15 from '../../images/Events/Event_5/15.jpg';
import event5_image16 from '../../images/Events/Event_5/16.jpg';
import event5_image17 from '../../images/Events/Event_5/17.jpg';
import event5_image18 from '../../images/Events/Event_5/18.jpg';
import event5_image19 from '../../images/Events/Event_5/19.jpg';
import event5_image20 from '../../images/Events/Event_5/20.jpg';
import event5_image21 from '../../images/Events/Event_5/21.jpg';
import event5_image22 from '../../images/Events/Event_5/22.jpg';
import event5_image23 from '../../images/Events/Event_5/23.jpg';
import event5_image24 from '../../images/Events/Event_5/24.jpg';
import event5_image25 from '../../images/Events/Event_5/25.jpg';
import event5_image26 from '../../images/Events/Event_5/26.jpg';
import event5_image28 from '../../images/Events/Event_5/28.jpg';
import event5_image29 from '../../images/Events/Event_5/29.jpg';
import event5_image30 from '../../images/Events/Event_5/30.jpg';
import event5_image31 from '../../images/Events/Event_5/31.jpg';
import event5_image32 from '../../images/Events/Event_5/32.jpg';
import event5_image33 from '../../images/Events/Event_5/33.jpg';
import event5_image34 from '../../images/Events/Event_5/34.jpg';
import event5_image35 from '../../images/Events/Event_5/35.jpg';

// image routes for Event 6
import event6_image1 from '../../images/Events/Event_6/1.jpg';
import event6_image2 from '../../images/Events/Event_6/2.jpg';
import event6_image3 from '../../images/Events/Event_6/3.jpg';
import event6_image4 from '../../images/Events/Event_6/4.jpg';
import event6_image5 from '../../images/Events/Event_6/5.jpg';
import event6_image6 from '../../images/Events/Event_6/6.jpg';
import event6_image7 from '../../images/Events/Event_6/7.jpg';
import event6_image8 from '../../images/Events/Event_6/8.jpg';
import event6_image9 from '../../images/Events/Event_6/9.jpg';
import event6_image10 from '../../images/Events/Event_6/10.jpg';
import event6_image11 from '../../images/Events/Event_6/11.jpg';
import event6_image12 from '../../images/Events/Event_6/12.jpg';
import event6_image13 from '../../images/Events/Event_6/13.jpg';
import event6_image14 from '../../images/Events/Event_6/14.jpg';
import event6_image15 from '../../images/Events/Event_6/15.jpg';
import event6_image16 from '../../images/Events/Event_6/16.jpg';
import event6_image17 from '../../images/Events/Event_6/17.jpg';
import event6_image18 from '../../images/Events/Event_6/18.jpg';
import event6_image19 from '../../images/Events/Event_6/19.jpg';
import event6_image20 from '../../images/Events/Event_6/20.jpg';
import event6_image21 from '../../images/Events/Event_6/21.jpg';
import event6_image22 from '../../images/Events/Event_6/22.jpg';
import event6_image23 from '../../images/Events/Event_6/23.jpg';
import event6_image24 from '../../images/Events/Event_6/24.jpg';
import event6_image25 from '../../images/Events/Event_6/25.jpg';
import event6_image26 from '../../images/Events/Event_6/26.jpg';
import event6_image27 from '../../images/Events/Event_6/27.jpg';
import event6_image28 from '../../images/Events/Event_6/28.jpg';
import event6_image29 from '../../images/Events/Event_6/29.jpg';
import event6_image30 from '../../images/Events/Event_6/30.jpg';
import event6_image31 from '../../images/Events/Event_6/31.jpg';
import event6_image32 from '../../images/Events/Event_6/32.jpg';
import event6_image33 from '../../images/Events/Event_6/33.jpg';
import event6_image34 from '../../images/Events/Event_6/34.jpg';
import event6_image35 from '../../images/Events/Event_6/35.jpg';
import event6_image36 from '../../images/Events/Event_6/36.jpg';
import event6_image37 from '../../images/Events/Event_6/37.jpg';
import event6_image38 from '../../images/Events/Event_6/38.jpg';
import event6_image39 from '../../images/Events/Event_6/39.jpg';
import event6_image40 from '../../images/Events/Event_6/40.jpg';
import event6_image41 from '../../images/Events/Event_6/41.jpg';
import event6_image42 from '../../images/Events/Event_6/42.jpg';
import event6_image43 from '../../images/Events/Event_6/43.jpg';
import event6_image44 from '../../images/Events/Event_6/44.jpg';
import event6_image45 from '../../images/Events/Event_6/45.jpg';
import event6_image46 from '../../images/Events/Event_6/46.jpg';
import event6_image47 from '../../images/Events/Event_6/47.jpg';
import event6_image48 from '../../images/Events/Event_6/48.jpg';
import event6_image49 from '../../images/Events/Event_6/49.jpg';
import event6_image50 from '../../images/Events/Event_6/50.jpg';
import event6_image51 from '../../images/Events/Event_6/51.jpg';
import event6_image52 from '../../images/Events/Event_6/52.jpg';

// image routes for Event 7
import event7_image1 from '../../images/Events/Event_7/1.jpg';
import event7_image2 from '../../images/Events/Event_7/2.jpg';
import event7_image3 from '../../images/Events/Event_7/3.jpg';
import event7_image4 from '../../images/Events/Event_7/4.jpg';
import event7_image5 from '../../images/Events/Event_7/5.jpg';
import event7_image6 from '../../images/Events/Event_7/6.jpg';
import event7_image7 from '../../images/Events/Event_7/7.jpg';
import event7_image8 from '../../images/Events/Event_7/8.jpg';
import event7_image9 from '../../images/Events/Event_7/9.jpg';
import event7_image10 from '../../images/Events/Event_7/10.jpg';
import event7_image11 from '../../images/Events/Event_7/11.jpg';
import event7_image12 from '../../images/Events/Event_7/12.jpg';
import event7_image13 from '../../images/Events/Event_7/13.jpg';
import event7_image14 from '../../images/Events/Event_7/14.jpg';
import event7_image15 from '../../images/Events/Event_7/15.jpg';
import event7_image16 from '../../images/Events/Event_7/16.jpg';
import event7_image17 from '../../images/Events/Event_7/17.jpg';
import event7_image18 from '../../images/Events/Event_7/18.jpg';
import event7_image19 from '../../images/Events/Event_7/19.jpg';
import event7_image20 from '../../images/Events/Event_7/20.jpg';
import event7_image21 from '../../images/Events/Event_7/21.jpg';
import event7_image22 from '../../images/Events/Event_7/22.jpg';
import event7_image23 from '../../images/Events/Event_7/23.jpg';
import event7_image24 from '../../images/Events/Event_7/24.jpg';
import event7_image25 from '../../images/Events/Event_7/25.jpg';
import event7_image26 from '../../images/Events/Event_7/26.jpg';
import event7_image27 from '../../images/Events/Event_7/27.jpg';
import event7_image28 from '../../images/Events/Event_7/28.jpg';
import event7_image29 from '../../images/Events/Event_7/29.jpg';
import event7_image30 from '../../images/Events/Event_7/30.jpg';
import event7_image31 from '../../images/Events/Event_7/31.jpg';
import event7_image32 from '../../images/Events/Event_7/32.jpg';
import event7_image33 from '../../images/Events/Event_7/33.jpg';
import event7_image34 from '../../images/Events/Event_7/34.jpg';

// image routes for Event 8
import event8_image1 from '../../images/Events/Event_8/1.jpg';
import event8_image2 from '../../images/Events/Event_8/2.jpg';
import event8_image3 from '../../images/Events/Event_8/3.jpg';

// image routes for Event 9
import event9_image1 from '../../images/Events/Event_9/1.jpg';
import event9_image2 from '../../images/Events/Event_9/2.jpg';
import event9_image3 from '../../images/Events/Event_9/3.jpg';
import event9_image4 from '../../images/Events/Event_9/4.jpg';
import event9_image5 from '../../images/Events/Event_9/5.jpg';
import event9_image6 from '../../images/Events/Event_9/6.jpg';

// image routes for Event 10
import event10_image1 from '../../images/Events/Event_10/1.jpg';
import event10_image2 from '../../images/Events/Event_10/2.jpg';
import event10_image3 from '../../images/Events/Event_10/3.jpg';
import event10_image4 from '../../images/Events/Event_10/4.jpg';
import event10_image5 from '../../images/Events/Event_10/5.jpg';
import event10_image6 from '../../images/Events/Event_10/6.jpg';
import event10_image7 from '../../images/Events/Event_10/7.jpg';
import event10_image8 from '../../images/Events/Event_10/8.jpg';
import event10_image9 from '../../images/Events/Event_10/9.jpg';
import event10_image10 from '../../images/Events/Event_10/10.jpg';
import event10_image11 from '../../images/Events/Event_10/11.jpg';
import event10_image12 from '../../images/Events/Event_10/12.jpg';
import event10_image13 from '../../images/Events/Event_10/13.jpg';
import event10_image14 from '../../images/Events/Event_10/14.jpg';
import event10_image15 from '../../images/Events/Event_10/15.jpg';
import event10_image16 from '../../images/Events/Event_10/16.jpg';
import event10_image17 from '../../images/Events/Event_10/17.jpg';
import event10_image18 from '../../images/Events/Event_10/18.jpg';
import event10_image19 from '../../images/Events/Event_10/19.jpg';
import event10_image20 from '../../images/Events/Event_10/20.jpg';
import event10_image21 from '../../images/Events/Event_10/21.jpg';
import event10_image22 from '../../images/Events/Event_10/22.jpg';
import event10_image23 from '../../images/Events/Event_10/23.jpg';
import event10_image24 from '../../images/Events/Event_10/24.jpg';
import event10_image25 from '../../images/Events/Event_10/25.jpg';
import event10_image26 from '../../images/Events/Event_10/26.jpg';
import event10_image27 from '../../images/Events/Event_10/27.jpg';
import event10_image28 from '../../images/Events/Event_10/28.jpg';
import event10_image29 from '../../images/Events/Event_10/29.jpg';
import event10_image30 from '../../images/Events/Event_10/30.jpg';
import event10_image31 from '../../images/Events/Event_10/31.jpg';
import event10_image32 from '../../images/Events/Event_10/32.jpg';
import event10_image33 from '../../images/Events/Event_10/33.jpg';
import event10_image34 from '../../images/Events/Event_10/34.jpg';
import event10_image35 from '../../images/Events/Event_10/35.jpg';
import event10_image36 from '../../images/Events/Event_10/36.jpg';
import event10_image37 from '../../images/Events/Event_10/37.jpg';
import event10_image38 from '../../images/Events/Event_10/38.jpg';
import event10_image39 from '../../images/Events/Event_10/39.jpg';
import event10_image40 from '../../images/Events/Event_10/40.jpg';
import event10_image41 from '../../images/Events/Event_10/41.jpg';
import event10_image42 from '../../images/Events/Event_10/42.jpg';
import event10_image43 from '../../images/Events/Event_10/43.jpg';
import event10_image44 from '../../images/Events/Event_10/44.jpg';
import event10_image45 from '../../images/Events/Event_10/45.jpg';
import event10_image46 from '../../images/Events/Event_10/46.jpg';
import event10_image47 from '../../images/Events/Event_10/47.jpg';
import event10_image48 from '../../images/Events/Event_10/48.jpg';
import event10_image49 from '../../images/Events/Event_10/49.jpg';
import event10_image50 from '../../images/Events/Event_10/50.jpg';
import event10_image51 from '../../images/Events/Event_10/51.jpg';
import event10_image52 from '../../images/Events/Event_10/52.jpg';
import event10_image53 from '../../images/Events/Event_10/53.jpg';
import event10_image54 from '../../images/Events/Event_10/54.jpg';
import event10_image55 from '../../images/Events/Event_10/55.jpg';
import event10_image56 from '../../images/Events/Event_10/56.jpg';
import event10_image57 from '../../images/Events/Event_10/57.jpg';

// image routes for Event 11
import event11_image1 from '../../images/Events/Event_11/1.jpg';
import event11_image2 from '../../images/Events/Event_11/2.jpg';
import event11_image3 from '../../images/Events/Event_11/3.jpg';
import event11_image4 from '../../images/Events/Event_11/4.jpg';
import event11_image5 from '../../images/Events/Event_11/5.jpg';


class Events extends Component {
    constructor(props) {
        super(props);
        this.state = { modal12: false, modal13: false, autoplay: true };


        this.toggle12 = this.toggle12.bind(this);
        this.toggle13 = this.toggle13.bind(this);





    }

    //   Toggle Upcoming Events
    toggle12() {
        this.setState({
            modal12: !this.state.modal12
        });
    }
    toggle13() {
        this.setState({
            modal13: !this.state.modal13
        });
    }

    //   Toggle Previous Events

    onSelect = (active, direction) => {
        console.log(`active=${active} && direction=${direction}`);
    };
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

        const imgArr_event1 = [
            event1_image2, event1_image3, event1_image4, event1_image5, event1_image6, event1_image7, event1_image8,
        ];

        const imgArr_event3 = [
            event3_image1, event3_image2, event3_image3, event3_image4, event3_image5, event3_image6, event3_image7, event3_image8, event3_image9,
            event3_image10, event3_image11, event3_image12, event3_image13, event3_image14, event3_image15, event3_image16, event3_image17, event3_image18, event3_image19,
            event3_image20, event3_image21, event3_image22, event3_image23, event3_image24, event3_image25, event3_image26, event3_image27, event3_image28
        ];

        const imgArr_event4 = [
            event4_image1, event4_image2, event4_image3, event4_image4, event4_image5, event4_image6, event4_image7, event4_image8, event4_image9,
            event4_image10, event4_image11, event4_image12, event4_image13, event4_image14, event4_image15, event4_image16, event4_image17, event4_image18, event4_image19,
            event4_image20, event4_image21, event4_image22, event4_image23, event4_image24, event4_image25, event4_image26, event4_image27, event4_image28, event4_image29,
            event4_image30, event4_image31, event4_image32, event4_image33, event4_image34, event4_image35, event4_image36, event4_image37, event4_image38, event4_image39,
            event4_image40, event4_image41, event4_image42, event4_image43, event4_image44, event4_image45, event4_image46, event4_image47, event4_image48, event4_image49,
            event4_image50
        ];

        const imgArr_event5 = [
            event5_image1, event5_image2, event5_image3, event5_image4, event5_image5, event5_image6, event5_image7, event5_image8, event5_image9,
            event5_image10, event5_image11, event5_image12, event5_image13, event5_image14, event5_image15, event5_image16, event5_image17, event5_image18, event5_image19,
            event5_image20, event5_image21, event5_image22, event5_image23, event5_image24, event5_image25, event5_image26, event5_image28, event5_image29,
            event5_image30, event5_image31, event5_image32, event5_image33, event5_image34, event5_image35
        ];

        const imgArr_event6 = [
            event6_image1, event6_image2, event6_image3, event6_image4, event6_image5, event6_image6, event6_image7, event6_image8, event6_image9,
            event6_image10, event6_image11, event6_image12, event6_image13, event6_image14, event6_image15, event6_image16, event6_image17, event6_image18, event6_image19,
            event6_image20, event6_image21, event6_image22, event6_image23, event6_image24, event6_image25, event6_image26, event6_image27, event6_image28, event6_image29,
            event6_image30, event6_image31, event6_image32, event6_image33, event6_image34, event6_image35, event6_image36, event6_image37, event6_image38, event6_image39,
            event6_image40, event6_image41, event6_image42, event6_image43, event6_image44, event6_image45, event6_image46, event6_image47, event6_image48, event6_image49,
            event6_image50, event6_image51, event6_image52
        ];

        const imgArr_event7 = [
            event7_image1, event7_image2, event7_image3, event7_image4, event7_image5, event7_image6, event7_image7, event7_image8, event7_image9,
            event7_image10, event7_image11, event7_image12, event7_image13, event7_image14, event7_image15, event7_image16, event7_image17, event7_image18, event7_image19,
            event7_image20, event7_image21, event7_image22, event7_image23, event7_image24, event7_image25, event7_image26, event7_image27, event7_image28, event7_image29,
            event7_image30, event7_image31, event7_image32, event7_image33, event7_image34
        ];

        const imgArr_event8 = [
            event8_image1, event8_image2, event8_image3
        ];

        const imgArr_event9 = [
            event9_image1, event9_image2, event9_image3, event9_image4, event9_image5, event9_image6
        ];

        const imgArr_event10 = [
            event10_image1, event10_image2, event10_image3, event10_image4, event10_image5, event10_image6, event10_image7, event10_image8, event10_image9,
            event10_image10, event10_image11, event10_image12, event10_image13, event10_image14, event10_image15, event10_image16, event10_image17, event10_image18, event10_image19,
            event10_image20, event10_image21, event10_image22, event10_image23, event10_image24, event10_image25, event10_image26, event10_image27, event10_image28, event10_image29,
            event10_image30, event10_image31, event10_image32, event10_image33, event10_image34, event10_image35, event10_image36, event10_image37, event10_image38, event10_image39,
            event10_image40, event10_image41, event10_image42, event10_image43, event10_image44, event10_image45, event10_image46, event10_image47, event10_image48, event10_image49,
            event10_image50, event10_image51, event10_image52, event10_image53, event10_image54, event10_image55, event10_image56, event10_image57,
        ];

        const imgArr_event11 = [
            event11_image1, event11_image2, event11_image3, event11_image4, event11_image5,
        ];
        let { leftIcon, rightIcon } = this.state;
        return <div>
            <h1 className="display-1">Events</h1>
            <div className="row">
                <div className="col">
                    <iframe title="Meetings and Events" src="https://calendar.google.com/calendar/embed?showPrint=0&amp;showTabs=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ff6666&amp;src=lovechangingtheworld.org_lk5gh80s8hbnidsutdv2c89obs%40group.calendar.google.com&amp;color=%235F6B02&amp;src=lovechangingtheworld.org_6b8fgr51gh1c4emfg33ol76ppg%40group.calendar.google.com&amp;color=%23df230b&amp;ctz=America%2FLos_Angeles" style={{ border: "solid 1px #777" }} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
                </div>
                <div className="col">
                    <h4>Upcoming Events</h4>
                    <h5>New Event 1</h5>
                    <a className="btn-block" color="danger" onClick={this.toggle12}>
                        <img className="btnImg" src={placeholder1} alt="" />
                    </a>
                    <Modal isOpen={this.state.modal12} toggle={this.toggle12} className={this.props.className}>
                        <ModalHeader toggle={this.toggle12}>
                            New Event 1
                            </ModalHeader>
                        <ModalBody>
                            <p className="lead">New Event1 Details</p>
                            <p> Further details here... </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle12}>
                                Close
                    </Button>
                        </ModalFooter>
                    </Modal>

                    <h5>New Event 2</h5>
                    <a className="btn-block" color="danger" onClick={this.toggle13}>
                        <img className="btnImg" src={placeholder2} alt="" />
                    </a>
                    <Modal isOpen={this.state.modal13} toggle={this.toggle13} className={this.props.className}>
                        <ModalHeader toggle={this.toggle13}>
                            New Event 2
                            </ModalHeader>
                        <ModalBody>
                            <p className="lead">New Event2 Details</p>
                            <p> Further details here... </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={this.toggle13}>
                                Close
                    </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>

            <h1 id="prevEventsTitle">Previous Events</h1>

            {/* 1st Row */}

            <div className="row">
                <h1>Event 1</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event1.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>

            <div className="row">
                <h1>Event 3</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event3.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>

            <div className="row">
                <h1>Event 4</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event4.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>

            <div className="row">
                <h1>Event 5</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event5.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>

            <div className="row">
                <h1>Event 6</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event6.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>

            <div className="row">
                <h1>Event 7</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event7.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>

            <div className="row">
                <h1>Event 8</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event8.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>

            <div className="row">
                <h1>Event 9</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event9.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>

            <div className="row">
                <h1>Event 10</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event10.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>

            <div className="row">
                <h1>Event 11</h1>
                <div className="col-md-12" style={{ marginTop: 40, marginBottom: 200 }}>
                    <RBCarousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={7000} leftIcon={leftIcon} rightIcon={rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4}>
                        {imgArr_event11.map(function (image, index) {
                            return <div className="text-center">
                                <img key={index} src={image} style={{ height: 600 }} alt="" />
                            </div>;
                        })}
                    </RBCarousel>
                </div>
            </div>
        </div>;
    }
}

export default Events;