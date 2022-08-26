import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Jobly from "./Api";
import Companies from "./Companies";
import Home from "./Home";
import Jobs from "./Jobs";
import Profile from "./Profile";


export default function Routes() {  
    return (
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
              <Route exact path="/companies">
            <Companies />
            </Route>
              <Route exact path="/companies/:name">
            <Companies />
            </Route>
              <Route exact path="/jobs">
            <Jobs />
            </Route>
              <Route exact path="/profile">
            <Profile />
            </Route>
        </Switch>
    )
}