import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AllParties } from "../components/AllParties"
import { Header } from "../components/Header"

export const Routers = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/allParties">
          <AllParties />
        </Route>
      </Switch>
    </Router >
  )
}
