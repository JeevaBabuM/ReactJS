import React from "react";
import { Link, Outlet } from "react-router-dom";

function Applications() {
    return (
        <>
            <div>
                <nav>
                    <Link to='calculator'> Calculator </Link>
                    <Link to='calcreducer' > Calculator - Reducer </Link>
                    <Link> App 3 </Link>                        
                </nav>
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Applications