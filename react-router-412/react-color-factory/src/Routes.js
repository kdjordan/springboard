import React, { useState } from 'react'
import { 
    Switch,
    Redirect,
    Route
} from 'react-router-dom'
import ColorForm from './ColorForm'
import Colors from './Colors'
import ColorDetail from './ColorDetail'

function Routes() {
    const INITIAL_STATE = [
        {
            name: 'super red',
            color: '#FF0000'
        }
    ]
    const [colors, setColors] = useState(INITIAL_STATE)

    function addColor(data) {
        let newColor = {
            name: data.name,
            color: data.color
        }
        setColors(c => [...c, newColor])
    }

    return (
    <>
        <Switch>
            <Route exact path='/colors'>
                <Colors colors={colors} />
            </Route>
            <Route exact path='/colors/new'>
                <ColorForm addColor={addColor} />
            </Route>
            <Route path='/colors/:color'>
                <ColorDetail colors={colors} />
            </Route>
            <Route>
                <Redirect to="/colors"/>
            </Route>
        </Switch>
    </>
    )
}

export default Routes