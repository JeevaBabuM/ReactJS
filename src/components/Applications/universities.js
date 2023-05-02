import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Universities() {
    const url = "http://universities.hipolabs.com/search"; //?country=United+States
    const [univ, setUniv] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setUniv(res.data);
            })
    }, [])

    return (
        <div className="UniversityContent">
            <div>
                <label> Select Country : </label>
                <select name="universities">
                    <option> university 1 </option>
                    <option> university 2 </option>
                </select>
            </div>

            <button className="GetUniversityButton"
                style={{ background: "#8A2387" }}>List Universities</button>

            <div className="UniversitiesList">
                <p> "alpha_two_code", "name", "web_pages",  "domains", "country"</ p>
                <p> {univ} </p>
            </ div>
        </ div>
    )
}