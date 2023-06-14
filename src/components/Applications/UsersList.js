import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UsersList() {
    const url = "https://jsonplaceholder.typicode.com/users"
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setUsers(res.data);
            })
    }, [])

    console.log(users)

    return (
        <div className="UsersContent">
            <div>
                <label> Select User : </label>
                <select name="users">
                    {
                        users.map((value, key) => {
                            return (<option key={key}> {value.name} </option>)
                        })
                    }
                </select>
            </div>

            <button className="GetUsersDetails"
                style={{ background: "#8A2387" }}>Get User Details</button>

            <div className="UsersList">
                <p>Total Number of users : {users.length} </p>
                {
                    users.map((value, key) => {
                        return (<p> {JSON.stringify(value)} </p>)
                    })
                }
            </ div>
        </ div>
    )
}