import React from 'react'
import { 
    Switch,
    Redirect,
    Route
} from 'react-router-dom'
import DogList from './DogList'
import DogListFilter from './DogListFilter'

function Routes({dogs}) {
    return (
    <>
        <Switch>
        <Route exact path='/dogs'>
            <DogList dogs={dogs}/>
        </Route>
        <Route path='/dogs/:name'>
            <DogListFilter dogs={dogs}/>
        </Route>
        <Route>
            <Redirect to="/dogs"/>
        </Route>
            
        </Switch>
    </>
    )
}

export default Routes