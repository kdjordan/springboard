import React from "react";
import './Jobs.css'
import LocalStorage from "./LocalStorage"; 

export default function Logout({fn}) {
    LocalStorage.emptyLocalStorage()
    fn(true)
    return (
       <div>
        <h1>Logout</h1>
       </div>
    )
}