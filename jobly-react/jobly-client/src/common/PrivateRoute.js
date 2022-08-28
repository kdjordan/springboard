import React from "react"
import { Route, Redirect } from "react-router-dom"
import LocalStorage from "../LocalStorage";

export default function PrivateRoute({ exact, path, children}) {
    
    if(!LocalStorage.getLocalStorage()) {
        return <Redirect to='login' />
    }

    return (
        <Route exact={exact} path={path}>
          {children}
        </Route>
    );
}