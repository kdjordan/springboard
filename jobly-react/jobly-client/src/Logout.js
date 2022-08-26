import React from "react";
import './Jobs.css'
import { useHistory } from "react-router-dom";
import LocalStorage from "./LocalStorage"; 

export default function Logout() {
    const history = useHistory()
    LocalStorage.emptyLocalStorage()
    history.push('/')
    return (
       <div>
        <p>logout</p>
       </div>
    )
}