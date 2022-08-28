import { Switch, Route } from "react-router-dom";
import React from "react";
import CompanyList from "./companies/CompanyList";
import CompanyDetail from "./companies/CompanyDetail";
import PrivateRoute from "./common/PrivateRoute";
import Home from "./Home";
import JobList from "./jobs/JobList";
import Profile from "./Profile";
import Login from "./Login";
import Signup from "./Signup";

export default function Routes({ login, signup }) {  
    return (
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
                <Login login={login}/>
            </Route>
            <Route exact path="/signup">
              <Signup signup={signup}/>
            </Route>
            <PrivateRoute exact path="/companies">
              <CompanyList />
            </PrivateRoute>
            <PrivateRoute exact path="/companies/:handle">
              <CompanyDetail />
            </PrivateRoute>
            <PrivateRoute exact path="/jobs">
              <JobList />
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
        </Switch>
    )
}