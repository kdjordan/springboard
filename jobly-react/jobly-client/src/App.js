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
const [applicationIDs, setApplicationIDs] = useState([]);
const [token, setToken] = useState(LocalStorage.getLocalStorage());



useEffect(() => {
  async function getUser() {
    if (token) {
      let { username }  = jwt.decode(token)
      Jobly.token = token
      let curUser = await Jobly.getUser(username)
      setCurrentUser(curUser)
      console.log(curUser.applications)
      setApplicationIDs(curUser.applications)
    }
    setIsLoading(false)

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
  try {
    let token = await Jobly.signup(form) 
    setToken(token)
    LocalStorage.setLocalStorage(token)
    return { success: true }
  } catch (error) {
    return { success: false, error }
  }
}

function hasApplied(id) {
  return (applicationIDs.indexOf(id) > -1 ? true : false)
}

function applyToJob(id) {
  console.log(applicationIDs, hasApplied(id))
  if (hasApplied(id)) return
    Jobly.applyToJob(currentUser.username, id)
    setApplicationIDs([...applicationIDs, id])
}

function logout() {
  LocalStorage.setLocalStorage(null)
  setCurrentUser(null)
}

if (isLoading) {
    return <Loading />
  }

  return (
    <UserContext.Provider value={{currentUser, setCurrentUser, hasApplied, applyToJob}}>
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
