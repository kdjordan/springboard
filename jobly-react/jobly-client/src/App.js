import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'
import Jobly from "./Api";
import Routes from "./Routes";
import NavBar from "./Navbar";
import LocalStorage from "./LocalStorage";
import UserContext from './userContext'
import Login from "./Login";
import Signup from "./Signup";
import jwt from "jsonwebtoken";


function App() { 
const [isLoading, setIsLoading] = useState(false);
const [user, setUser] = useState(null);


useEffect(() => {
  function checkUser() {
    const token = LocalStorage.getLocalStorage()
    if (token) {
      const user = jwt.decode(token)
      console.log('got user from token ', user)
      setUser(l => (l = user))
    }
    setIsLoading(l => (l = false))
  }
  checkUser()
}, [])

async function processUser(user, token) {
  // got a user logging in or signing up => grab their info and put in localstorage
  // and localstorage
  try {
    console.log('received ', user, token)
    Jobly.token = token
    let curUser = await Jobly.getUser(user)
    LocalStorage.setLocalStorage(token)
    setUser(u => (u = curUser))
    console.log('set user to ', Jobly.token)
    
  } catch (error) {
    console.log(error)
  }
}

function logout() {
  setUser(u => (u = null))
}

if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <UserContext.Provider value={{user}}>
    <div className="App">
        <NavBar logout={logout} user={user}/>
        <main className="pt-5">
         <Routes user={user} processUser={processUser}/>
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
