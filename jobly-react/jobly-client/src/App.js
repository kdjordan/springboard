import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import './App.css'
import Jobly from "./Api";
import Routes from "./Routes";
import NavBar from "./Navbar";
import LocalStorage from "./LocalStorage";
import UserContext from './UserContext'
import Login from "./Login";
import Signup from "./Signup";
import jwt from "jsonwebtoken";
import Loading from "./common/Loading";


function App() { 
const [isLoading, setIsLoading] = useState(false);
const [currentUser, setCurrentUser] = useState(null);
const [token, setToken] = useState(LocalStorage.getLocalStorage());



useEffect(() => {
  async function getUser() {
    if (token) {
      // console.log('token in stoarge', token )
      let { username }  = jwt.decode(token)
      // console.log('decoded username ', username)
      Jobly.token = token
      let curUser = await Jobly.getUser(username)
      setCurrentUser(l => (l = curUser))
    }
    setIsLoading(l => (l = false))
  }
  getUser()
}, [token])

async function processUser(token) {
  // got a user logging in or signing up => grab their info and put in localstorage
  // and localstorage
  try {
    setToken(token)
    LocalStorage.setLocalStorage(token)
  } catch (error) {
    console.log(error)
  }
}

function logout() {
  LocalStorage.setLocalStorage(null)
  setCurrentUser(u => (u = null))
}

if (isLoading) {
    return <Loading />
  }

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser}}>
    <div className="App">
        <NavBar logout={logout} />
        <main className="pt-5">
         <Routes user={currentUser} processUser={processUser}/>
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
