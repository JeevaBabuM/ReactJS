import React from "react";
import './Application.css'
import { Link, Outlet } from "react-router-dom";

function Applications() {
    return (
        <>
            <div className="appHeaders">
                <nav>
                    <Link to='calculator'> Calculator </Link>
                    <Link to='calcreducer' > Calculator - Reducer </Link>
                    <Link to='quotesgenerator' > Quotes Generator </Link>                        
                </nav>
            </div>
            <div className="appContent">
                <Outlet />
            </div>
        </>
    )
}

export default Applications