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

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/ourmission" component={OurMission} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/founder" component={Founder} />
            <Route exact path="/treasurer" component={Treasurer} />
            <Route exact path="/graphics" component={Graphics} />
            <Route exact path="/executive" component={Executive} />
            <Route exact path="/donations" component={Donations} />
            <Route exact path="/contact" component={Contact} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
