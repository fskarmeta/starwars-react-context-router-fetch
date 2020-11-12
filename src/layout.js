import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { People } from "./views/people";
import { Planets } from "./views/planets";
import { Vehicles } from "./views/vehicles";
import { IndividualPeopleCard } from "./views/individualPeople";
import { IndividualPlanetCard } from "./views/individualPlanet";
import { IndividualVehicleCard } from "./views/individualVehicle";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import "./styles/body.css";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div className="d-flex flex-column">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/planets">
              <Planets />
            </Route>
            <Route exact path="/people">
              <People />
            </Route>
            <Route exact path="/vehicles">
              <Vehicles />
            </Route>
            <Route exact path="/iPlanetCard/:id">
              <IndividualPlanetCard />
            </Route>
            <Route exact path="/iPeopleCard/:id">
              <IndividualPeopleCard />
            </Route>
            <Route exact path="/iVehicleCard/:id">
              <IndividualVehicleCard />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
