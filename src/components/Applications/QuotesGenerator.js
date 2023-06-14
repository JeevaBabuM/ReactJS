import React, { useEffect, useState } from "react";
import './QuotesGenerator.css'
import axios from "axios";

export default function QuotesGenerator() {
    // const url = "https://jsonplaceholder.typicode.com/posts/1";
    const url = "https://api.quotable.io/random";
    const [quote, setQuote] = useState('')

    useEffect(() => {
        axios.get(url)
        .then(res => {
        setQuote(res.data);  
    })},[])

    const getNewQuote = () => {
        axios.get(url)
        .then(res => {
        setQuote(res.data);})
        console.log('Feteched after button click')
    }

    console.log('rendered')
    return (
        <div className="quotesContent">
            <div className="quoteText">
                <p> Quote of the day : {quote.content} </ p>
            </div>
            <div className="quoteAuthor">
                <p> Author : {quote.author} </ p>
            </div>
            
            <button className="quoteButton" onClick={getNewQuote}>New Quote</button>
            
        </ div>
    )
}