import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AllParties } from "../components/AllParties"
import { Header } from "../components/Header"
import SingleParty from "../components/SingleParty"
import { HeaderTabs } from "../components/HeaderTabs"



export const Routers = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HeaderTabs} />
        <Route path="/allParties/:id" component={SingleParty} />
        <Route exact path="/allParties" component={AllParties} />
      </Switch>
    </Router >
  )
}
