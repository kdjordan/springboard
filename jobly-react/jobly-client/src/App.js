import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import SnackOrBoozeApi from "./Api";
import NavBar from "./Navbar";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Profile from "./Profile";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  //state will hold both of or menu item types : drinks and snacks
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // async function getItems(type) {
    //   let items = await SnackOrBoozeApi.getItems(type);
    //   let newItems
    //   //arrang our initial state as an array with named objects containing arrays of menuItems 
    //   type === 'snacks' ? newItems = {'snacks' : items} : newItems = {'drinks' : items}
    //   setMenuItems(mu => ([...mu, newItems]))
      setIsLoading(false);
    // }
    // //load initial state by getting data from API
    // getItems('snacks');
    // getItems('drinks');
  }, []);

  //function that will update our state when a new Item is added in the AddMenuItem component
  async function addItem({itemType, id, name, description, recipe, serve}) {
      //add newItem via API POST call
      let newItem = await SnackOrBoozeApi.addItem(itemType, {id, name, description, recipe, serve})
      //update State - we have a state that involves 2 item types : drinks and snacks 
      //we need to make sure we are updating the correct item type - so we use an Object lookup on the key to grab the right array
      //we then update that array and useEffect pushes out the updated state to all of our components
      setMenuItems(cur => 
        cur.map(obj => {
          if(Object.keys(obj)[0] === `${itemType}`) {
            obj[itemType] = [...obj[itemType], newItem]
            return obj
          }
          return obj
        })
      )
  }
  
  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }
  
  return (
    <div className="App">
        <NavBar />
        <main>
          <Switch>
            {/* <Route exact path="/">
              <Home />
            </Route> */}
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
            {/* <Route exact path="/notfound">
              <NotFound  />
            </Route> */}
            <Route>
              <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
          </Switch>
        </main>
    </div>
  );
}

export default App;
