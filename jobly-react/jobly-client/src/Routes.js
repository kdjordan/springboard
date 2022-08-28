import { Switch, Route } from "react-router-dom";
import React from "react";
import CompanyList from "./companies/CompanyList";
import CompanyDetail from "./companies/CompanyDetail";
import Home from "./Home";
import JobList from "./jobs/JobList";
import Profile from "./Profile";


export default function Routes({ processUser }) {  
    return (
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
              <Route exact path="/companies">
            <CompanyList />
            </Route>
            <Route exact path="/companies/:handle">
              <CompanyDetail />
            </Route>
              <Route exact path="/jobs">
            <JobList />
            </Route>
              <Route exact path="/profile">
            <Profile processUser={processUser}/>
            </Route>
        </Switch>
    )
}