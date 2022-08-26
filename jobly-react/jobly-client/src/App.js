import React, { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import './App.css'
import Routes from "./Routes";
import NavBar from "./Navbar";
import LocalStorage from "./LocalStorage";
import UserContext from './userContext'
import Login from "./Login";
import Logout from "./Logout";
import Signup from "./Signup";


function App() { 
const [isLoading, setIsLoading] = useState(false);
const [user, setUser] = useState({});
const history = useHistory()

useEffect(() => {
  function checkUser() {
    const status = LocalStorage.getLocalStorage()
    if (status) {
      setUser(l => (l = status))
    }
    setIsLoading(l => (l = false))
  }
  checkUser()
}, [])

function processUser(user) {
  // console.log('got user in app ', user)
  setUser(u => (u = user))
  // console.log('the user now is ', user)
}

function logOut(bool) {
  if(bool) {
    setUser(u => u = {})
    history.push('/')
  }
}

if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <UserContext.Provider value={user}>
    <div className="App">
        <NavBar />
        <main className="pt-5">
         <Routes user={user}/>
         <Switch>
            <Route exact path="/login">
                <Login processUser={processUser}/>
            </Route>
            <Route exact path="/signup">
              <Signup processUser={processUser}/>
            </Route>
            <Route exact path="/logout">
              <Logout fn={logOut}/>
            </Route>
         </Switch>
        </main>
    </div>
    </UserContext.Provider>
  );
}

export default App;
