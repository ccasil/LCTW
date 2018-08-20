import React, { Component } from 'react'
import "../css/Events.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


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

// image routes for Event 2
import event2_image9 from '../../images/Events/Event_2/9.jpg';
import event2_image10 from '../../images/Events/Event_2/10.jpg';
import event2_image11 from '../../images/Events/Event_2/11.jpg';
import event2_image12 from '../../images/Events/Event_2/12.jpg';
import event2_image13 from '../../images/Events/Event_2/13.jpg';
import event2_image14 from '../../images/Events/Event_2/14.jpg';
import event2_image15 from '../../images/Events/Event_2/15.jpg';
import event2_image16 from '../../images/Events/Event_2/16.jpg';
import event2_image17 from '../../images/Events/Event_2/17.jpg';
import event2_image18 from '../../images/Events/Event_2/18.jpg';
import event2_image19 from '../../images/Events/Event_2/19.jpg';
import event2_image20 from '../../images/Events/Event_2/20.jpg';
import event2_image21 from '../../images/Events/Event_2/21.jpg';
import event2_image22 from '../../images/Events/Event_2/22.jpg';
import event2_image23 from '../../images/Events/Event_2/23.jpg';
import event2_image24 from '../../images/Events/Event_2/24.jpg';
import event2_image25 from '../../images/Events/Event_2/25.jpg';
import event2_image26 from '../../images/Events/Event_2/26.jpg';
import event2_image27 from '../../images/Events/Event_2/27.jpg';
import event2_image28 from '../../images/Events/Event_2/28.jpg';
import event2_image29 from '../../images/Events/Event_2/29.jpg';
import event2_image30 from '../../images/Events/Event_2/30.jpg';
import event2_image31 from '../../images/Events/Event_2/31.jpg';
import event2_image32 from '../../images/Events/Event_2/32.jpg';
import event2_image33 from '../../images/Events/Event_2/33.jpg';
import event2_image34 from '../../images/Events/Event_2/34.jpg';
import event2_image35 from '../../images/Events/Event_2/35.jpg';
import event2_image36 from '../../images/Events/Event_2/36.jpg';
import event2_image37 from '../../images/Events/Event_2/37.jpg';
import event2_image38 from '../../images/Events/Event_2/38.jpg';
import event2_image39 from '../../images/Events/Event_2/39.jpg';
import event2_image40 from '../../images/Events/Event_2/40.jpg';
import event2_image41 from '../../images/Events/Event_2/41.jpg';
import event2_image42 from '../../images/Events/Event_2/42.jpg';
import event2_image43 from '../../images/Events/Event_2/43.jpg';
import event2_image44 from '../../images/Events/Event_2/44.jpg';
import event2_image45 from '../../images/Events/Event_2/45.jpg';
import event2_image46 from '../../images/Events/Event_2/46.jpg';
import event2_image47 from '../../images/Events/Event_2/47.jpg';
import event2_image48 from '../../images/Events/Event_2/48.jpg';
import event2_image49 from '../../images/Events/Event_2/49.jpg';
import event2_image50 from '../../images/Events/Event_2/50.jpg';
import event2_image51 from '../../images/Events/Event_2/51.jpg';
import event2_image52 from '../../images/Events/Event_2/52.jpg';
import event2_image53 from '../../images/Events/Event_2/53.jpg';
import event2_image54 from '../../images/Events/Event_2/54.jpg';
import event2_image55 from '../../images/Events/Event_2/55.jpg';
import event2_image56 from '../../images/Events/Event_2/56.jpg';
import event2_image57 from '../../images/Events/Event_2/57.jpg';
import event2_image58 from '../../images/Events/Event_2/58.jpg';
import event2_image59 from '../../images/Events/Event_2/59.jpg';
import event2_image60 from '../../images/Events/Event_2/60.jpg';
import event2_image61 from '../../images/Events/Event_2/61.jpg';
import event2_image62 from '../../images/Events/Event_2/62.jpg';
import event2_image63 from '../../images/Events/Event_2/63.jpg';
import event2_image64 from '../../images/Events/Event_2/64.jpg';
import event2_image65 from '../../images/Events/Event_2/65.jpg';
import event2_image66 from '../../images/Events/Event_2/66.jpg';
import event2_image67 from '../../images/Events/Event_2/67.jpg';
import event2_image68 from '../../images/Events/Event_2/68.jpg';
import event2_image69 from '../../images/Events/Event_2/69.jpg';
import event2_image70 from '../../images/Events/Event_2/70.jpg';
import event2_image71 from '../../images/Events/Event_2/71.jpg';
import event2_image72 from '../../images/Events/Event_2/72.jpg';
import event2_image73 from '../../images/Events/Event_2/73.jpg';
import event2_image74 from '../../images/Events/Event_2/74.jpg';
import event2_image75 from '../../images/Events/Event_2/75.jpg';
import event2_image76 from '../../images/Events/Event_2/76.jpg';
import event2_image77 from '../../images/Events/Event_2/77.jpg';
import event2_image78 from '../../images/Events/Event_2/78.jpg';
import event2_image79 from '../../images/Events/Event_2/79.jpg';
import event2_image80 from '../../images/Events/Event_2/80.jpg';
import event2_image81 from '../../images/Events/Event_2/81.jpg';
import event2_image82 from '../../images/Events/Event_2/82.jpg';
import event2_image83 from '../../images/Events/Event_2/83.jpg';
import event2_image84 from '../../images/Events/Event_2/84.jpg';
import event2_image85 from '../../images/Events/Event_2/85.jpg';
import event2_image86 from '../../images/Events/Event_2/86.jpg';
import event2_image87 from '../../images/Events/Event_2/87.jpg';
import event2_image88 from '../../images/Events/Event_2/88.jpg';
import event2_image89 from '../../images/Events/Event_2/89.jpg';
import event2_image90 from '../../images/Events/Event_2/90.jpg';
import event2_image91 from '../../images/Events/Event_2/91.jpg';
import event2_image92 from '../../images/Events/Event_2/92.jpg';
import event2_image93 from '../../images/Events/Event_2/93.jpg';
import event2_image94 from '../../images/Events/Event_2/94.jpg';
import event2_image95 from '../../images/Events/Event_2/95.jpg';
import event2_image96 from '../../images/Events/Event_2/96.jpg';
import event2_image97 from '../../images/Events/Event_2/97.jpg';
import event2_image98 from '../../images/Events/Event_2/98.jpg';
import event2_image99 from '../../images/Events/Event_2/99.jpg';
import event2_image100 from '../../images/Events/Event_2/100.jpg';
import event2_image101 from '../../images/Events/Event_2/101.jpg';
import event2_image102 from '../../images/Events/Event_2/102.jpg';
import event2_image103 from '../../images/Events/Event_2/103.jpg';
import event2_image104 from '../../images/Events/Event_2/104.jpg';
import event2_image105 from '../../images/Events/Event_2/105.jpg';
import event2_image106 from '../../images/Events/Event_2/106.jpg';
import event2_image107 from '../../images/Events/Event_2/107.jpg';
import event2_image108 from '../../images/Events/Event_2/108.jpg';
import event2_image109 from '../../images/Events/Event_2/109.jpg';
import event2_image110 from '../../images/Events/Event_2/100.jpg';
import event2_image111 from '../../images/Events/Event_2/101.jpg';
import event2_image112 from '../../images/Events/Event_2/102.jpg';
import event2_image113 from '../../images/Events/Event_2/103.jpg';
import event2_image114 from '../../images/Events/Event_2/114.jpg';

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
        this.state = { modal1: false, modal2: false, modal3: false, modal4: false, modal5: false, modal6: false, modal7: false, modal8: false, modal9: false, modal10: false, modal11: false };
    
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);
        this.toggle3 = this.toggle3.bind(this);
        this.toggle4 = this.toggle4.bind(this);
        this.toggle5 = this.toggle5.bind(this);
        this.toggle6 = this.toggle6.bind(this);
        this.toggle7 = this.toggle7.bind(this);
        this.toggle8 = this.toggle8.bind(this);
        this.toggle9 = this.toggle9.bind(this);
        this.toggle10 = this.toggle10.bind(this);
        this.toggle11 = this.toggle11.bind(this);

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
      toggle6() {
        this.setState({
          modal6: !this.state.modal6
        });
      }
      toggle7() {
        this.setState({
          modal7: !this.state.modal7
        });
      }
      toggle8() {
        this.setState({
          modal8: !this.state.modal8
        });
      }
      toggle9() {
        this.setState({
          modal9: !this.state.modal9
        });
      }
      toggle10() {
        this.setState({
          modal10: !this.state.modal10
        });
      }
      toggle11() {
        this.setState({
          modal11: !this.state.modal11
        });
      }

      render() {
        return (
            <div>
                <h1 className="display-1">Events</h1>

                <h1>Upcoming Events</h1>
                <div className="row">
                    <div className="col">
                        <h3>New Event 1</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle12}>
                            <img className="btnImg" src={placeholder1} alt="Placeholder Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal12} toggle={this.toggle12} className={this.props.className}>
                            <ModalHeader toggle={this.toggle12}>New Event 1</ModalHeader>
                            <ModalBody>
                                <p className="lead">New Event1 Details</p>
                                <p> Further details here... </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle12}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="col">
                        <h3>New Event 2</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle13}>
                            <img className="btnImg" src={placeholder2} alt="Placeholder Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal13} toggle={this.toggle13} className={this.props.className}>
                            <ModalHeader toggle={this.toggle13}>New Event 2</ModalHeader>
                            <ModalBody>
                                <p className="lead">New Event2 Details</p>
                                <p> Further details here... </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle13}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>

                <h1 id="prevEventsTitle">Previous Events</h1>

                {/* 1st Row */}
                <div className="row">
                    <div className="col moveLeft">
                        <h3>Event 1</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle1}>
                            <img className="btnImg" src={event1_image2} alt="Modal Image 2"></img>
                        </a>
                        <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={this.props.className}>
                            <ModalHeader toggle={this.toggle1}>Event1</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event1 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event1_image2} alt="Modal Image 2"></img>
                                    <img src={event1_image3} alt="Modal Image 3"></img>
                                    <img src={event1_image4} alt="Modal Image 4"></img>
                                    <img src={event1_image5} alt="Modal Image 5"></img>
                                    <img src={event1_image6} alt="Modal Image 6"></img>
                                    <img src={event1_image7} alt="Modal Image 7"></img>
                                    <img src={event1_image8} alt="Modal Image 8"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle1}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="col moveLeft">
                        <h3>Event 2</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle2}>
                            <img className="btnImg" src={event2_image9} alt="Modal Image 9"></img>
                        </a>
                        <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
                            <ModalHeader toggle={this.toggle2}>Event2</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event2 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event2_image9} alt="Modal Image 9"></img>
                                    <img src={event2_image10} alt="Modal Image 10"></img>
                                    <img src={event2_image11} alt="Modal Image 10"></img>
                                    <img src={event2_image12} alt="Modal Image 10"></img>
                                    <img src={event2_image13} alt="Modal Image 10"></img>
                                    <img src={event2_image14} alt="Modal Image 10"></img>
                                    <img src={event2_image15} alt="Modal Image 10"></img>
                                    <img src={event2_image16} alt="Modal Image 10"></img>
                                    <img src={event2_image17} alt="Modal Image 10"></img>
                                    <img src={event2_image18} alt="Modal Image 10"></img>
                                    <img src={event2_image19} alt="Modal Image 10"></img>
                                    <img src={event2_image20} alt="Modal Image 10"></img>
                                    <img src={event2_image21} alt="Modal Image 10"></img>
                                    <img src={event2_image22} alt="Modal Image 10"></img>
                                    <img src={event2_image23} alt="Modal Image 10"></img>
                                    <img src={event2_image24} alt="Modal Image 10"></img>
                                    <img src={event2_image25} alt="Modal Image 10"></img>
                                    <img src={event2_image26} alt="Modal Image 10"></img>
                                    <img src={event2_image27} alt="Modal Image 10"></img>
                                    <img src={event2_image28} alt="Modal Image 10"></img>
                                    <img src={event2_image29} alt="Modal Image 10"></img>
                                    <img src={event2_image30} alt="Modal Image 10"></img>
                                    <img src={event2_image31} alt="Modal Image 10"></img>
                                    <img src={event2_image32} alt="Modal Image 10"></img>
                                    <img src={event2_image33} alt="Modal Image 10"></img>
                                    <img src={event2_image34} alt="Modal Image 10"></img>
                                    <img src={event2_image35} alt="Modal Image 10"></img>
                                    <img src={event2_image36} alt="Modal Image 10"></img>
                                    <img src={event2_image37} alt="Modal Image 10"></img>
                                    <img src={event2_image38} alt="Modal Image 10"></img>
                                    <img src={event2_image39} alt="Modal Image 10"></img>
                                    <img src={event2_image40} alt="Modal Image 10"></img>
                                    <img src={event2_image41} alt="Modal Image 10"></img>
                                    <img src={event2_image42} alt="Modal Image 10"></img>
                                    <img src={event2_image43} alt="Modal Image 10"></img>
                                    <img src={event2_image44} alt="Modal Image 10"></img>
                                    <img src={event2_image45} alt="Modal Image 10"></img>
                                    <img src={event2_image46} alt="Modal Image 10"></img>
                                    <img src={event2_image47} alt="Modal Image 10"></img>
                                    <img src={event2_image48} alt="Modal Image 10"></img>
                                    <img src={event2_image49} alt="Modal Image 10"></img>
                                    <img src={event2_image50} alt="Modal Image 10"></img>
                                    <img src={event2_image51} alt="Modal Image 10"></img>
                                    <img src={event2_image52} alt="Modal Image 10"></img>
                                    <img src={event2_image53} alt="Modal Image 10"></img>
                                    <img src={event2_image54} alt="Modal Image 10"></img>
                                    <img src={event2_image55} alt="Modal Image 10"></img>
                                    <img src={event2_image56} alt="Modal Image 10"></img>
                                    <img src={event2_image57} alt="Modal Image 10"></img>
                                    <img src={event2_image58} alt="Modal Image 10"></img>
                                    <img src={event2_image59} alt="Modal Image 10"></img>
                                    <img src={event2_image60} alt="Modal Image 10"></img>
                                    <img src={event2_image61} alt="Modal Image 10"></img>
                                    <img src={event2_image62} alt="Modal Image 10"></img>
                                    <img src={event2_image63} alt="Modal Image 10"></img>
                                    <img src={event2_image64} alt="Modal Image 10"></img>
                                    <img src={event2_image65} alt="Modal Image 10"></img>
                                    <img src={event2_image66} alt="Modal Image 10"></img>
                                    <img src={event2_image67} alt="Modal Image 10"></img>
                                    <img src={event2_image68} alt="Modal Image 10"></img>
                                    <img src={event2_image69} alt="Modal Image 10"></img>
                                    <img src={event2_image70} alt="Modal Image 10"></img>
                                    <img src={event2_image71} alt="Modal Image 10"></img>
                                    <img src={event2_image72} alt="Modal Image 10"></img>
                                    <img src={event2_image73} alt="Modal Image 10"></img>
                                    <img src={event2_image74} alt="Modal Image 10"></img>
                                    <img src={event2_image75} alt="Modal Image 10"></img>
                                    <img src={event2_image76} alt="Modal Image 10"></img>
                                    <img src={event2_image77} alt="Modal Image 10"></img>
                                    <img src={event2_image78} alt="Modal Image 10"></img>
                                    <img src={event2_image79} alt="Modal Image 10"></img>
                                    <img src={event2_image80} alt="Modal Image 10"></img>
                                    <img src={event2_image81} alt="Modal Image 10"></img>
                                    <img src={event2_image82} alt="Modal Image 10"></img>
                                    <img src={event2_image83} alt="Modal Image 10"></img>
                                    <img src={event2_image84} alt="Modal Image 10"></img>
                                    <img src={event2_image85} alt="Modal Image 10"></img>
                                    <img src={event2_image86} alt="Modal Image 10"></img>
                                    <img src={event2_image87} alt="Modal Image 10"></img>
                                    <img src={event2_image88} alt="Modal Image 10"></img>
                                    <img src={event2_image89} alt="Modal Image 10"></img>
                                    <img src={event2_image90} alt="Modal Image 10"></img>
                                    <img src={event2_image91} alt="Modal Image 10"></img>
                                    <img src={event2_image92} alt="Modal Image 10"></img>
                                    <img src={event2_image93} alt="Modal Image 10"></img>
                                    <img src={event2_image94} alt="Modal Image 10"></img>
                                    <img src={event2_image95} alt="Modal Image 10"></img>
                                    <img src={event2_image96} alt="Modal Image 10"></img>
                                    <img src={event2_image97} alt="Modal Image 10"></img>
                                    <img src={event2_image98} alt="Modal Image 10"></img>
                                    <img src={event2_image99} alt="Modal Image 10"></img>
                                    <img src={event2_image100} alt="Modal Image 10"></img>
                                    <img src={event2_image101} alt="Modal Image 10"></img>
                                    <img src={event2_image102} alt="Modal Image 10"></img>
                                    <img src={event2_image103} alt="Modal Image 10"></img>
                                    <img src={event2_image104} alt="Modal Image 10"></img>
                                    <img src={event2_image105} alt="Modal Image 10"></img>
                                    <img src={event2_image106} alt="Modal Image 10"></img>
                                    <img src={event2_image107} alt="Modal Image 10"></img>
                                    <img src={event2_image108} alt="Modal Image 10"></img>
                                    <img src={event2_image109} alt="Modal Image 10"></img>
                                    <img src={event2_image110} alt="Modal Image 10"></img>
                                    <img src={event2_image111} alt="Modal Image 10"></img>
                                    <img src={event2_image112} alt="Modal Image 10"></img>
                                    <img src={event2_image113} alt="Modal Image 10"></img>
                                    <img src={event2_image114} alt="Modal Image 10"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle2}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="col moveLeft">
                        <h3>Event 3</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle3}>
                            <img className="btnImg" src={event3_image1} alt="Modal Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}>
                            <ModalHeader toggle={this.toggle3}>Event3</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event3 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event3_image1} alt="Modal Image 1"></img>
                                    <img src={event3_image2} alt="Modal Image 1"></img>
                                    <img src={event3_image3} alt="Modal Image 1"></img>
                                    <img src={event3_image4} alt="Modal Image 1"></img>
                                    <img src={event3_image5} alt="Modal Image 1"></img>
                                    <img src={event3_image6} alt="Modal Image 1"></img>
                                    <img src={event3_image7} alt="Modal Image 1"></img>
                                    <img src={event3_image8} alt="Modal Image 1"></img>
                                    <img src={event3_image9} alt="Modal Image 1"></img>
                                    <img src={event3_image10} alt="Modal Image 1"></img>
                                    <img src={event3_image11} alt="Modal Image 1"></img>
                                    <img src={event3_image12} alt="Modal Image 1"></img>
                                    <img src={event3_image13} alt="Modal Image 1"></img>
                                    <img src={event3_image14} alt="Modal Image 1"></img>
                                    <img src={event3_image15} alt="Modal Image 1"></img>
                                    <img src={event3_image16} alt="Modal Image 1"></img>
                                    <img src={event3_image17} alt="Modal Image 1"></img>
                                    <img src={event3_image18} alt="Modal Image 1"></img>
                                    <img src={event3_image19} alt="Modal Image 1"></img>
                                    <img src={event3_image20} alt="Modal Image 1"></img>
                                    <img src={event3_image21} alt="Modal Image 1"></img>
                                    <img src={event3_image22} alt="Modal Image 1"></img>
                                    <img src={event3_image23} alt="Modal Image 1"></img>
                                    <img src={event3_image24} alt="Modal Image 1"></img>
                                    <img src={event3_image25} alt="Modal Image 1"></img>
                                    <img src={event3_image26} alt="Modal Image 1"></img>
                                    <img src={event3_image27} alt="Modal Image 1"></img>
                                    <img src={event3_image28} alt="Modal Image 1"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle3}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="col moveLeft">
                        <h3>Event 4</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle4}>
                            <img className="btnImg" src={event4_image1} alt="Banner Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal4} toggle={this.toggle4} className={this.props.className}>
                            <ModalHeader toggle={this.toggle4}>Event4</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event4 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event4_image1} alt="Banner Image 1"></img>
                                    <img src={event4_image2} alt="Banner Image 2"></img>
                                    <img src={event4_image3} alt="Banner Image 3"></img>
                                    <img src={event4_image4} alt="Banner Image 4"></img>
                                    <img src={event4_image5} alt="Banner Image 5"></img>
                                    <img src={event4_image6} alt="Banner Image 6"></img>
                                    <img src={event4_image7} alt="Banner Image 7"></img>
                                    <img src={event4_image8} alt="Banner Image 8"></img>
                                    <img src={event4_image9} alt="Banner Image 9"></img>
                                    <img src={event4_image10} alt="Banner Image 10"></img>
                                    <img src={event4_image11} alt="Banner Image 1"></img>
                                    <img src={event4_image12} alt="Banner Image 2"></img>
                                    <img src={event4_image13} alt="Banner Image 3"></img>
                                    <img src={event4_image14} alt="Banner Image 4"></img>
                                    <img src={event4_image15} alt="Banner Image 5"></img>
                                    <img src={event4_image16} alt="Banner Image 6"></img>
                                    <img src={event4_image17} alt="Banner Image 7"></img>
                                    <img src={event4_image18} alt="Banner Image 8"></img>
                                    <img src={event4_image19} alt="Banner Image 9"></img>
                                    <img src={event4_image20} alt="Banner Image 10"></img>
                                    <img src={event4_image21} alt="Banner Image 1"></img>
                                    <img src={event4_image22} alt="Banner Image 2"></img>
                                    <img src={event4_image23} alt="Banner Image 3"></img>
                                    <img src={event4_image24} alt="Banner Image 4"></img>
                                    <img src={event4_image25} alt="Banner Image 5"></img>
                                    <img src={event4_image26} alt="Banner Image 6"></img>
                                    <img src={event4_image27} alt="Banner Image 7"></img>
                                    <img src={event4_image28} alt="Banner Image 8"></img>
                                    <img src={event4_image29} alt="Banner Image 9"></img>
                                    <img src={event4_image30} alt="Banner Image 10"></img>
                                    <img src={event4_image31} alt="Banner Image 1"></img>
                                    <img src={event4_image32} alt="Banner Image 2"></img>
                                    <img src={event4_image33} alt="Banner Image 3"></img>
                                    <img src={event4_image34} alt="Banner Image 4"></img>
                                    <img src={event4_image35} alt="Banner Image 5"></img>
                                    <img src={event4_image36} alt="Banner Image 6"></img>
                                    <img src={event4_image37} alt="Banner Image 7"></img>
                                    <img src={event4_image38} alt="Banner Image 8"></img>
                                    <img src={event4_image39} alt="Banner Image 9"></img>
                                    <img src={event4_image40} alt="Banner Image 10"></img>
                                    <img src={event4_image41} alt="Banner Image 1"></img>
                                    <img src={event4_image42} alt="Banner Image 2"></img>
                                    <img src={event4_image43} alt="Banner Image 3"></img>
                                    <img src={event4_image44} alt="Banner Image 4"></img>
                                    <img src={event4_image45} alt="Banner Image 5"></img>
                                    <img src={event4_image46} alt="Banner Image 6"></img>
                                    <img src={event4_image47} alt="Banner Image 7"></img>
                                    <img src={event4_image48} alt="Banner Image 8"></img>
                                    <img src={event4_image49} alt="Banner Image 9"></img>
                                    <img src={event4_image50} alt="Banner Image 10"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle4}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                {/* 2nd Row */}    
                <div className="row">
                    <div className="col">
                        <h3>Event 5</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle5}>
                            <img className="btnImg" src={event5_image1} alt="Banner Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className}>
                            <ModalHeader toggle={this.toggle5}>Event5</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event5 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event5_image1} alt="Banner Image 1"></img>
                                    <img src={event5_image2} alt="Banner Image 2"></img>
                                    <img src={event5_image3} alt="Banner Image 3"></img>
                                    <img src={event5_image4} alt="Banner Image 4"></img>
                                    <img src={event5_image5} alt="Banner Image 5"></img>
                                    <img src={event5_image6} alt="Banner Image 6"></img>
                                    <img src={event5_image7} alt="Banner Image 7"></img>
                                    <img src={event5_image8} alt="Banner Image 8"></img>
                                    <img src={event5_image9} alt="Banner Image 9"></img>
                                    <img src={event5_image10} alt="Banner Image 10"></img>
                                    <img src={event5_image11} alt="Banner Image 11"></img>
                                    <img src={event5_image12} alt="Banner Image 12"></img>
                                    <img src={event5_image13} alt="Banner Image 13"></img>
                                    <img src={event5_image14} alt="Banner Image 14"></img>
                                    <img src={event5_image15} alt="Banner Image 15"></img>
                                    <img src={event5_image16} alt="Banner Image 16"></img>
                                    <img src={event5_image17} alt="Banner Image 17"></img>
                                    <img src={event5_image18} alt="Banner Image 18"></img>
                                    <img src={event5_image19} alt="Banner Image 19"></img>
                                    <img src={event5_image20} alt="Banner Image 20"></img>
                                    <img src={event5_image21} alt="Banner Image 21"></img>
                                    <img src={event5_image22} alt="Banner Image 22"></img>
                                    <img src={event5_image23} alt="Banner Image 23"></img>
                                    <img src={event5_image24} alt="Banner Image 24"></img>
                                    <img src={event5_image25} alt="Banner Image 25"></img>
                                    <img src={event5_image26} alt="Banner Image 26"></img>
                                    <img src={event5_image28} alt="Banner Image 28"></img>
                                    <img src={event5_image29} alt="Banner Image 29"></img>
                                    <img src={event5_image30} alt="Banner Image 30"></img>
                                    <img src={event5_image31} alt="Banner Image 31"></img>
                                    <img src={event5_image32} alt="Banner Image 32"></img>
                                    <img src={event5_image33} alt="Banner Image 33"></img>
                                    <img src={event5_image34} alt="Banner Image 34"></img>
                                    <img src={event5_image35} alt="Banner Image 35"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle5}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="col">
                        <h3>Event 6</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle6}>
                            <img className="btnImg" src={event6_image1} alt="Banner Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal6} toggle={this.toggle6} className={this.props.className}>
                            <ModalHeader toggle={this.toggle6}>Event6</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event6 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event6_image1} alt="Banner Image 1"></img>
                                    <img src={event6_image2} alt="Banner Image 2"></img>
                                    <img src={event6_image3} alt="Banner Image 3"></img>
                                    <img src={event6_image4} alt="Banner Image 4"></img>
                                    <img src={event6_image5} alt="Banner Image 5"></img>
                                    <img src={event6_image6} alt="Banner Image 6"></img>
                                    <img src={event6_image7} alt="Banner Image 7"></img>
                                    <img src={event6_image8} alt="Banner Image 8"></img>
                                    <img src={event6_image9} alt="Banner Image 9"></img>
                                    <img src={event6_image10} alt="Banner Image 10"></img>
                                    <img src={event6_image11} alt="Banner Image 11"></img>
                                    <img src={event6_image12} alt="Banner Image 12"></img>
                                    <img src={event6_image13} alt="Banner Image 13"></img>
                                    <img src={event6_image14} alt="Banner Image 14"></img>
                                    <img src={event6_image15} alt="Banner Image 15"></img>
                                    <img src={event6_image16} alt="Banner Image 16"></img>
                                    <img src={event6_image17} alt="Banner Image 17"></img>
                                    <img src={event6_image18} alt="Banner Image 18"></img>
                                    <img src={event6_image19} alt="Banner Image 19"></img>
                                    <img src={event6_image20} alt="Banner Image 20"></img>
                                    <img src={event6_image21} alt="Banner Image 21"></img>
                                    <img src={event6_image22} alt="Banner Image 22"></img>
                                    <img src={event6_image23} alt="Banner Image 23"></img>
                                    <img src={event6_image24} alt="Banner Image 24"></img>
                                    <img src={event6_image25} alt="Banner Image 25"></img>
                                    <img src={event6_image26} alt="Banner Image 26"></img>
                                    <img src={event6_image27} alt="Banner Image 27"></img>
                                    <img src={event6_image28} alt="Banner Image 28"></img>
                                    <img src={event6_image29} alt="Banner Image 29"></img>
                                    <img src={event6_image30} alt="Banner Image 30"></img>
                                    <img src={event6_image31} alt="Banner Image 31"></img>
                                    <img src={event6_image32} alt="Banner Image 32"></img>
                                    <img src={event6_image33} alt="Banner Image 33"></img>
                                    <img src={event6_image34} alt="Banner Image 34"></img>
                                    <img src={event6_image35} alt="Banner Image 35"></img>
                                    <img src={event6_image36} alt="Banner Image 36"></img>
                                    <img src={event6_image37} alt="Banner Image 37"></img>
                                    <img src={event6_image38} alt="Banner Image 38"></img>
                                    <img src={event6_image39} alt="Banner Image 39"></img>
                                    <img src={event6_image40} alt="Banner Image 40"></img>
                                    <img src={event6_image41} alt="Banner Image 41"></img>
                                    <img src={event6_image42} alt="Banner Image 42"></img>
                                    <img src={event6_image43} alt="Banner Image 43"></img>
                                    <img src={event6_image44} alt="Banner Image 44"></img>
                                    <img src={event6_image45} alt="Banner Image 45"></img>
                                    <img src={event6_image46} alt="Banner Image 46"></img>
                                    <img src={event6_image47} alt="Banner Image 47"></img>
                                    <img src={event6_image48} alt="Banner Image 48"></img>
                                    <img src={event6_image49} alt="Banner Image 49"></img>
                                    <img src={event6_image50} alt="Banner Image 50"></img>
                                    <img src={event6_image51} alt="Banner Image 51"></img>
                                    <img src={event6_image52} alt="Banner Image 52"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle6}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="col">
                        <h3>Event 7</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle7}>
                            <img className="btnImg" src={event7_image1} alt="Banner Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal7} toggle={this.toggle7} className={this.props.className}>
                            <ModalHeader toggle={this.toggle7}>Event7</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event7 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event7_image1} alt="Banner Image 1"></img>
                                    <img src={event7_image2} alt="Banner Image 2"></img>
                                    <img src={event7_image3} alt="Banner Image 3"></img>
                                    <img src={event7_image4} alt="Banner Image 4"></img>
                                    <img src={event7_image5} alt="Banner Image 5"></img>
                                    <img src={event7_image6} alt="Banner Image 6"></img>
                                    <img src={event7_image7} alt="Banner Image 7"></img>
                                    <img src={event7_image8} alt="Banner Image 8"></img>
                                    <img src={event7_image9} alt="Banner Image 9"></img>
                                    <img src={event7_image10} alt="Banner Image 10"></img>
                                    <img src={event7_image11} alt="Banner Image 11"></img>
                                    <img src={event7_image12} alt="Banner Image 12"></img>
                                    <img src={event7_image13} alt="Banner Image 13"></img>
                                    <img src={event7_image14} alt="Banner Image 14"></img>
                                    <img src={event7_image15} alt="Banner Image 15"></img>
                                    <img src={event7_image16} alt="Banner Image 16"></img>
                                    <img src={event7_image17} alt="Banner Image 17"></img>
                                    <img src={event7_image18} alt="Banner Image 18"></img>
                                    <img src={event7_image19} alt="Banner Image 19"></img>
                                    <img src={event7_image20} alt="Banner Image 20"></img>
                                    <img src={event7_image21} alt="Banner Image 21"></img>
                                    <img src={event7_image22} alt="Banner Image 22"></img>
                                    <img src={event7_image23} alt="Banner Image 23"></img>
                                    <img src={event7_image24} alt="Banner Image 24"></img>
                                    <img src={event7_image25} alt="Banner Image 25"></img>
                                    <img src={event7_image26} alt="Banner Image 26"></img>
                                    <img src={event7_image27} alt="Banner Image 27"></img>
                                    <img src={event7_image28} alt="Banner Image 28"></img>
                                    <img src={event7_image29} alt="Banner Image 29"></img>
                                    <img src={event7_image30} alt="Banner Image 30"></img>
                                    <img src={event7_image31} alt="Banner Image 31"></img>
                                    <img src={event7_image32} alt="Banner Image 32"></img>
                                    <img src={event7_image33} alt="Banner Image 33"></img>
                                    <img src={event7_image34} alt="Banner Image 34"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle7}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="col">
                        <h3>Event 8</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle8}>
                            <img className="btnImg" src={event8_image1} alt="Banner Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal8} toggle={this.toggle8} className={this.props.className}>
                            <ModalHeader toggle={this.toggle8}>Event8</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event8 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event8_image1} alt="Banner Image 1"></img>
                                    <img src={event8_image2} alt="Banner Image 2"></img>
                                    <img src={event8_image3} alt="Banner Image 3"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle8}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>

                {/* 3rd Row */}
                <div className="row spaceToFooter">
                    <div className="col">
                        <h3>Event 9</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle9}>
                            <img className="btnImg" src={event9_image1} alt="Banner Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal9} toggle={this.toggle9} className={this.props.className}>
                            <ModalHeader toggle={this.toggle9}>Event9</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event9 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event9_image1} alt="Banner Image 1"></img>
                                    <img src={event9_image2} alt="Banner Image 2"></img>
                                    <img src={event9_image3} alt="Banner Image 3"></img>
                                    <img src={event9_image4} alt="Banner Image 4"></img>
                                    <img src={event9_image5} alt="Banner Image 5"></img>
                                    <img src={event9_image6} alt="Banner Image 6"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle9}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="col">
                        <h3>Event 10</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle10}>
                            <img className="btnImg" src={event10_image1} alt="Banner Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal10} toggle={this.toggle10} className={this.props.className}>
                            <ModalHeader toggle={this.toggle10}>Event10</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event10 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event10_image1} alt="Banner Image 1"></img>
                                    <img src={event10_image2} alt="Banner Image 2"></img>
                                    <img src={event10_image3} alt="Banner Image 3"></img>
                                    <img src={event10_image4} alt="Banner Image 4"></img>
                                    <img src={event10_image5} alt="Banner Image 5"></img>
                                    <img src={event10_image6} alt="Banner Image 6"></img>
                                    <img src={event10_image7} alt="Banner Image 7"></img>
                                    <img src={event10_image8} alt="Banner Image 8"></img>
                                    <img src={event10_image9} alt="Banner Image 9"></img>
                                    <img src={event10_image10} alt="Banner Image 10"></img>
                                    <img src={event10_image11} alt="Banner Image 1"></img>
                                    <img src={event10_image12} alt="Banner Image 2"></img>
                                    <img src={event10_image13} alt="Banner Image 3"></img>
                                    <img src={event10_image14} alt="Banner Image 4"></img>
                                    <img src={event10_image15} alt="Banner Image 5"></img>
                                    <img src={event10_image16} alt="Banner Image 6"></img>
                                    <img src={event10_image17} alt="Banner Image 7"></img>
                                    <img src={event10_image18} alt="Banner Image 8"></img>
                                    <img src={event10_image19} alt="Banner Image 9"></img>
                                    <img src={event10_image20} alt="Banner Image 10"></img>
                                    <img src={event10_image21} alt="Banner Image 1"></img>
                                    <img src={event10_image22} alt="Banner Image 2"></img>
                                    <img src={event10_image23} alt="Banner Image 3"></img>
                                    <img src={event10_image24} alt="Banner Image 4"></img>
                                    <img src={event10_image25} alt="Banner Image 5"></img>
                                    <img src={event10_image26} alt="Banner Image 6"></img>
                                    <img src={event10_image27} alt="Banner Image 7"></img>
                                    <img src={event10_image28} alt="Banner Image 8"></img>
                                    <img src={event10_image29} alt="Banner Image 9"></img>
                                    <img src={event10_image30} alt="Banner Image 10"></img>
                                    <img src={event10_image31} alt="Banner Image 1"></img>
                                    <img src={event10_image32} alt="Banner Image 2"></img>
                                    <img src={event10_image33} alt="Banner Image 3"></img>
                                    <img src={event10_image34} alt="Banner Image 4"></img>
                                    <img src={event10_image35} alt="Banner Image 5"></img>
                                    <img src={event10_image36} alt="Banner Image 6"></img>
                                    <img src={event10_image37} alt="Banner Image 7"></img>
                                    <img src={event10_image38} alt="Banner Image 8"></img>
                                    <img src={event10_image39} alt="Banner Image 9"></img>
                                    <img src={event10_image40} alt="Banner Image 10"></img>
                                    <img src={event10_image41} alt="Banner Image 1"></img>
                                    <img src={event10_image42} alt="Banner Image 2"></img>
                                    <img src={event10_image43} alt="Banner Image 3"></img>
                                    <img src={event10_image44} alt="Banner Image 4"></img>
                                    <img src={event10_image45} alt="Banner Image 5"></img>
                                    <img src={event10_image46} alt="Banner Image 6"></img>
                                    <img src={event10_image47} alt="Banner Image 7"></img>
                                    <img src={event10_image48} alt="Banner Image 8"></img>
                                    <img src={event10_image49} alt="Banner Image 9"></img>
                                    <img src={event10_image50} alt="Banner Image 10"></img>
                                    <img src={event10_image51} alt="Banner Image 1"></img>
                                    <img src={event10_image52} alt="Banner Image 2"></img>
                                    <img src={event10_image53} alt="Banner Image 3"></img>
                                    <img src={event10_image54} alt="Banner Image 4"></img>
                                    <img src={event10_image55} alt="Banner Image 5"></img>
                                    <img src={event10_image56} alt="Banner Image 6"></img>
                                    <img src={event10_image57} alt="Banner Image 7"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle10}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>

                    <div className="col">
                        <h3>Event 11</h3>
                        <a className="btn-block" color="danger" onClick={this.toggle11}>
                            <img className="btnImg" src={event11_image1} alt="Banner Image 1"></img>
                        </a>
                        <Modal isOpen={this.state.modal11} toggle={this.toggle11} className={this.props.className}>
                            <ModalHeader toggle={this.toggle11}>Event11</ModalHeader>
                            <ModalBody>
                                <p className="lead">Event11 Details</p>
                                <ul className="list-unstyled">
                                    <img src={event11_image1} alt="Banner Image 1"></img>
                                    <img src={event11_image2} alt="Banner Image 2"></img>
                                    <img src={event11_image3} alt="Banner Image 3"></img>
                                    <img src={event11_image4} alt="Banner Image 4"></img>
                                    <img src={event11_image5} alt="Banner Image 5"></img>
                                </ul>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="secondary" onClick={this.toggle11}>Close</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                
                </div>

                </div>
            </div>
            )
        }
    }

    export default Events;