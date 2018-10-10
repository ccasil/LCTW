import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import OurMission from "./components/pages/OurMission";
import Events from "./components/pages/Events";
import PastEvents from "./components/pages/PastEvents";
import Founder from "./components/pages/Founder";
import Executive from "./components/pages/Executive";
import Donations from "./components/pages/Donations";
import Shop from "./components/pages/Shop";
import Fundraisers from "./components/pages/Fundraisers";
import Programs from "./components/pages/Programs";
import Mailing from "./components/pages/Mailing";
import SponsorForm from "./components/pages/SponsorForm";
import VolunteerForm from "./components/pages/VolunteerForm";
import HomelessForm from "./components/pages/HomelessForm";
import Services from "./components/pages/Services";
import Staff from "./components/pages/Staff";
import Resources from "./components/pages/Resources";
import Membership from "./components/pages/Membership";


import "./App.css";

// http://www.bgmanteca.org/newpage-1
// https://lovechangingtheworld.weebly.com/

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Landing} />
          <div className="container text-justify">	          
            <Route path="/ourmission" component={OurMission} />
            <Route path="/services" component={Services} />
            <Route path="/events" component={Events} />
            <Route path="/pastevents" component={PastEvents} />
            <Route path="/founder" component={Founder} />
            <Route path="/executive" component={Executive} />
            <Route path="/staff" component={Staff} />
            <Route path="/donations" component={Donations} />
            <Route path="/shop" component={Shop} />
            <Route path="/fundraisers" component={Fundraisers} />
            <Route path="/programs" component={Programs} />
            <Route path="/mailing" component={Mailing} />
            <Route path="/sponsorform" component={SponsorForm} />
            <Route path="/volunteerform" component={VolunteerForm} />
            <Route path="/homelessform" component={HomelessForm} />
            <Route path="/resources" component={Resources} />
            <Route path="/membership" component={Membership} />
          </div> 
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
