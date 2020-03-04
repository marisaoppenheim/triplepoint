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
import SingleDealAllDetails from "../components/SingleDealAllDetails";
import { AllDeals } from "../components/AllDeals"


export const Routers = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HeaderTabs} />
        <Route path="/allParties/:id" component={SingleParty} />
        <Route exact path="/allParties" component={AllParties} />
        <Route exact path="/deals/:id" component={SingleDealAllDetails} />
        <Route exact path="/deals" component={AllDeals} />
      </Switch>
    </Router >
  )
}
