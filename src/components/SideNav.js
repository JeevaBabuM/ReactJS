import React from "react";
import '../App.css';
import { useNavigate } from "react-router";
import { SideNavData } from "./SideNavData";

function SideNav(){
    const navigate = useNavigate()
    return(
       <div className="SideNav">
            <ul className="SideNavContainer">
                {
                    SideNavData.map((value,key) => {
                        return(
                        <li 
                        key={key}
                        id={window.location.pathname === '/' + value.title ? "active" : ""}
                        className="SideNavList"
                        onClick={() => {navigate(value.title)}}> 
                            <div> {value.title} </div>
                        </li>)
                    })
                }
            </ul>
       </div>
    )
}

export default SideNav