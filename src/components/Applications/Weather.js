import React, { useEffect, useState } from "react";
import axios from 'axios';

function Weather(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return (
    <>
        <h1> Weather App</h1>
        <div>
            <input placeholder="City/Town" 
            style={{
            width: '300px',
            display: 'inline-block',
            padding: '10px 0px 10px 30px',
            lineHeight: '120%',
            position: 'relative',
            borderRadius: '20px',
            outline: 'none',
            fontSize: '20px'}}
            onChange={e => e.target.value}/>

            <button style={{
                padding: '10px 0px 10px 30px',
                color:'brown'}}
                onClick={() => alert('Button click')}
                >Search</button>
        </div>

        <div>
            <p> {posts.title} </p>
            <p> {posts.body}  </p>
        </div>
    </>)

    // a61c097efb8d437eb2685825232904
}

export default Weather