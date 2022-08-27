import { Switch, Route } from "react-router-dom";
import React from "react";
import Companies from "./companies/Companies";
import Home from "./Home";
import Jobs from "./Jobs";
import Profile from "./Profile";


export default function Routes({ processUser }) {  
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
            <Profile processUser={processUser}/>
            </Route>
        </Switch>
    )
}