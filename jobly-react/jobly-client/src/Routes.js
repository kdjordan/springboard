import { Switch, Route } from "react-router-dom";
import "./App.css";
import Jobly from "./Api";
import Companies from "./Companies";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Jobs from "./Jobs";
import Profile from "./Profile";



export default function Routes({status}) {
    // const [isLoading, setIsLoading] = useState(true);
    //state will hold both of or menu item types : drinks and snacks
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Jobly.getCompanies('jobs')
  
    // useEffect(() => {
      // async function getItems(type) {
      //   let items = await SnackOrBoozeApi.getItems(type);
      //   let newItems
      //   //arrang our initial state as an array with named objects containing arrays of menuItems 
      //   type === 'snacks' ? newItems = {'snacks' : items} : newItems = {'drinks' : items}
      //   setMenuItems(mu => ([...mu, newItems]))
        // setIsLoading(false);
      // }
      // //load initial state by getting data from API
      // getItems('snacks');
      // getItems('drinks');
    // }, []);
  
    //function that will update our state when a new Item is added in the AddMenuItem component
    // async function addItem({itemType, id, name, description, recipe, serve}) {
        
    //     let newItem = await SnackOrBoozeApi.addItem(itemType, {id, name, description, recipe, serve})
        
    //     setMenuItems(cur => 
    //       cur.map(obj => {
    //         if(Object.keys(obj)[0] === `${itemType}`) {
    //           obj[itemType] = [...obj[itemType], newItem]
    //           return obj
    //         }
    //         return obj
    //       })
    //     )
    // }
    // Jobly.getCompanies('jobs')

    return (
        <Switch>
            <Route exact path="/login">
                <Login/>
            </Route>
              <Route exact path="/signup">
            <Signup />
            </Route>
              <Route exact path="/">
            <Home status={status}/>
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
            <Route>
            <p>Hmmm. I can't seem to find what you want.</p>
            </Route>
        </Switch>
    )
}