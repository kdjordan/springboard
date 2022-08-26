import { Switch, Route } from "react-router-dom";
import Companies from "./Companies";
import Home from "./Home";
import Jobs from "./Jobs";
import Profile from "./Profile";


export default function Routes({user}) {  
  user = user.token === undefined ? false : user
    return (
        <Switch>
            <Route exact path="/">
              <Home user={user}/>
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