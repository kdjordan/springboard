import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'
import Routes from "./Routes";
import NavBar from "./Navbar";
import LocalStorage from "./LocalStorage";
import UserContext from './userContext'
import Login from "./Login";
import Signup from "./Signup";


function App() { 
const [isLoading, setIsLoading] = useState(false);
const [user, setUser] = useState({});


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
  setUser(u => (u = user))
}

function logout() {
  setUser(u => (u = {}))
}

if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <UserContext.Provider value={user}>
    <div className="App">
        <NavBar logout={logout}/>
        <main className="pt-5">
         <Routes user={user}/>
         <Switch>
            <Route exact path="/login">
                <Login processUser={processUser}/>
            </Route>
            <Route exact path="/signup">
              <Signup processUser={processUser}/>
            </Route>
         </Switch>
        </main>
    </div>
    </UserContext.Provider>
  );
}

export default App;
