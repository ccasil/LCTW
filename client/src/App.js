import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import OurMission from "./components/pages/OurMission";
import Events from "./components/pages/Events";
import Founder from "./components/pages/Founder";
import Treasurer from "./components/pages/Treasurer";
import Graphics from "./components/pages/Graphics";
import Executive from "./components/pages/Executive";
import Donations from "./components/pages/Donations";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import Sponsors from "./components/pages/Sponsors";

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
            <Route exact path="/ourmission" component={OurMission} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/founder" component={Founder} />
            <Route exact path="/treasurer" component={Treasurer} />
            <Route exact path="/graphics" component={Graphics} />
            <Route exact path="/executive" component={Executive} />
            <Route exact path="/donations" component={Donations} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/sponsors" component={Sponsors} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
