import React, { useState } from "react";
import './QuotesGenerator.css'
import axios from "axios";

function QuotesGenerator() {
    const url = "https://api.quotable.io/random";
    const [quote, setQuote] = useState('')

    axios.get("https://api.quotable.io/random")
    .then(res => {  
      const apiResponse = res.data;  
      setQuote({ apiResponse });  
    })  
    const getNewQuote = () => {
        alert('apiResponse')
    }
    return (
        <div className="quotesContent">
            <div className="quoteText">
                <p> quote </ p>
            </div>
            <div className="quoteAuthor">
                <p> author Name </ p>
            </div>
            
            <button className="quoteButton" onClick={getNewQuote}>New Quote</button>
            
        </ div>
    )
}

export default QuotesGenerator