import React from "react";
import '../App.css';
import { SideBarData } from "./SideBarData";

function SideBar(){
    return(
       <div className="SideBar">
            <ul className="SideBarContainer">
                {
                    SideBarData.map((value,key) => {
                        return(
                        <li 
                        key={key}
                        id={window.location.pathname === value.link ? "active" : ""}
                        className="SideBarList"
                        onClick={() => {window.location.pathname = value.link}}> 
                            <div> {value.title} </div>
                        </li>)
                    })
                }
            </ul>
       </div>
    )
}

export default SideBar