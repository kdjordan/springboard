import React, { useEffect, useState } from "react";
import './App.css'
import Jobly from "./Api";
import Routes from "./Routes";
import NavBar from "./Navbar";
import LocalStorage from "./LocalStorage";
import UserContext from './UserContext'

import jwt from "jsonwebtoken";
import Loading from "./common/Loading";


function App() { 
const [isLoading, setIsLoading] = useState(false);
const [currentUser, setCurrentUser] = useState(null);
const [token, setToken] = useState(LocalStorage.getLocalStorage());



useEffect(() => {
  async function getUser() {
    if (token) {
      let { username }  = jwt.decode(token)
      Jobly.token = token
      let curUser = await Jobly.getUser(username)
      setCurrentUser(l => (l = curUser))
    }
    setIsLoading(l => (l = false))
  }
  getUser()
}, [token])

async function login(form) {
  // got a user logging in  => grab their token and put in localstorage
  try {
    let token = await Jobly.login(form) 
    setToken(token)
    LocalStorage.setLocalStorage(token)
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

async function signup(form) {
  // got a user signing up => grab their token and put in localstorage
  console.log('logging ')
  try {
    let token = await Jobly.signup(form) 
    setToken(token)
    LocalStorage.setLocalStorage(token)
    return { success: true }
  } catch (error) {
    return { success: false, error }
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
         <Routes login={login} signup={signup}/>
        </main>
    </div>
    </UserContext.Provider>
  );
}

export default App;
