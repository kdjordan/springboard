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
        <Route to='/dogs'>
            <DogList dogs={dogs}/>
        </Route>
        <Route to='/dogs/:name'>
            <DogListFilter dogs={dogs}/>
        </Route>
        <Route>
            <Redirect to="/notFound"/>
        </Route>
            
        </Switch>
    </>
    )
}

export default Routes