import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// import { clearCurrentProfile } from "./actions/profileActions";


import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Login from "./components/auth/Login";

import Register from "./components/auth/Register";

import EventfulForm from "./components/eventfuls/EventfulForm";


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
import Dashboard from "./components/dashboard/Dashboard";
import Eventful from "./components/eventful/Eventful";

import "./App.css";

// http://www.bgmanteca.org/newpage-1
// https://lovechangingtheworld.weebly.com/


// Check for token
if (localStorage.jwtToken) {
 // Set auth token header auth
 setAuthToken(localStorage.jwtToken);
 // Decode token and get user info and exp
 const decoded = jwt_decode(localStorage.jwtToken);
 // Set user and isAuthenticated
 store.dispatch(setCurrentUser(decoded));

 // Check for expired token
 const currentTime = Date.now() / 1000;
 if (decoded.exp < currentTime) {
   // Logout user
   store.dispatch(logoutUser());
   // Redirect to login
   window.location.href = "/login";
 }
}

class App extends Component {
  render() {
    return <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />

            <Route exact path="/" component={Landing} />
            <div className="container text-justify">
            <Route exact path="/ourmission" component={OurMission} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/pastevents" component={PastEvents} />
            <Route exact path="/founder" component={Founder} />
            <Route exact path="/executive" component={Executive} />
            <Route exact path="/staff" component={Staff} />
              <Route exact path="/donations" component={Donations} />
              <Route exact path="/shop" component={Shop} />
              <Route exact path="/fundraisers" component={Fundraisers} />
              <Route exact path="/programs" component={Programs} />
              <Route exact path="/mailing" component={Mailing} />
              <Route exact path="/sponsorform" component={SponsorForm} />
              <Route exact path="/volunteerform" component={VolunteerForm} />
              <Route exact path="/homelessform" component={HomelessForm} />
              <Route exact path="/resources" component={Resources} />
              <Route exact path="/membership" component={Membership} />

              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Switch>
              <PrivateRoute exact path="/eventfuls" component={EventfulForm} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/eventful/:id" component={Eventful} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>;
  }
}

export default App;
