import React from "react";
import { Link } from "react-router-dom";
import Calculator from "./Applications/Calculator";

function Applications() {
    return (
        <nav>
            <Link> Calculator </Link>
            <Link> BMI Calculator </Link>
            <Link> To do List </Link>                        
        </nav>
    )
}

export default Applications