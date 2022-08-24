import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Routes from "./Routes";
import NavBar from "./Navbar";
import LocalStorage from "./LocalStorage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState()
  const history = useHistory()

  useEffect(() => {
    const user = LocalStorage.getLocalStorage()
    //check for logged in user = if so - redirect to profile
    if (user) {
      setUser(u => ([ ...u, user]))
      setIsLoggedIn(true)
      // history.push('./profile')  
    }
    setIsLoading(false)
  }, []);
 
  
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  
  return (
    <div className="App">
        <NavBar status={isLoggedIn} />
        <main className="pt-5">
         <Routes status={isLoggedIn} user={user}/>
        </main>
    </div>
  );
}

export default App;
