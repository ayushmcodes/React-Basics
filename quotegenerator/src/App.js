import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import './styles.css'

function App() {

  let x = Math.floor(Math.random() * 100);

  const [quotes,setQuotes]=useState([])
  const [quote,setQuote]=useState(null)
  
  useEffect(()=>{
    console.log(1);
    fetch("https://type.fit/api/quotes")
    .then((res)=>res.json())
    .then((json)=>{
      setQuotes(json);
      setQuote(json[x].text)
    })
  },[]);


  function updateQuote()
  {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)].text);
    
  }


  return (
    <React.Fragment>
    <h2>Quote Generator</h2>
    <div id="card">
    <h1>{quote}</h1>
    <button onClick={updateQuote}>New Quote</button>
    </div>
    </React.Fragment>
  )
}

export default App;
