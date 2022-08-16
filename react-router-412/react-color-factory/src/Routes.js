import React from 'react'
import { 
    Switch,
    Redirect,
    Route
} from 'react-router-dom'
import ColorForm from './ColorForm'
import Colors from './Colors'
import ColorDetail from './ColorDetail'

function Routes() {
    return (
    <>
        <Switch>
        <Route exact path='/colors/new'>
            <ColorForm />
        </Route>
        <Route exact path='/colors'>
            <Colors />
        </Route>
        <Route path='/colors/:color'>
            <ColorDetail />
        </Route>
        <Route>
            <Redirect to="/colors"/>
        </Route>
            
        </Switch>
    </>
    )
}

export default Routes