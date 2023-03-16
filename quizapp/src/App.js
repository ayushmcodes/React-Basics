import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css'
import { useState } from 'react';

function Question(){

  const questionarr=["What is the main concept of React?","What is the most common way to manage state in React?","What is JSX in React?","What is the purpose of virtual DOM in React?"]

  const optionarr=[{1:"Object-Oriented Programming",2:"Functional Programming",3:"Procedural Programming",4:"Imperative Programming","ans":"Functional Programming"},{1:"Using class components",2:"Using Redux",3:"Using Hooks",4:"Using Context API",ans:"Using Hooks"},{1:"A JavaScript extension that allows you to write HTML-like code",2:"A JavaScript library for building user interfaces",3:"A tool for transpiling React code",4:" A package manager for React applications",ans:"A JavaScript extension that allows you to write HTML-like code"},{1:"To speed up rendering of React components",2:"To allow React to work with databases",3:"To simplify the process of writing React components",4:"To reduce the number of HTTP requests in React applications",ans:"To speed up rendering of React components"}]

  const[count,updatecount]=useState(1)
  const[question,updatequestion]=useState(questionarr[0]);
  const[options,updateoptions]=useState(optionarr[0])
  const[score,updatescore]=useState(0)

  const update=(event)=>{
    var b=event.target.innerHTML==optionarr[count-1].ans
    console.log(typeof(b))
    if(b==true)
    {
      updatescore(score+1)
      console.log(score);
    }
    if(count==4)
    {
      document.getElementById("child1").remove();
      document.getElementById("child2").remove();
      document.getElementById("score").style.display="block";
    }
    if(count<4)
    {
    updatecount(count+1)
    updatequestion(questionarr[count])
    updateoptions(optionarr[count])
    }

  }

  return(
    <div id="parent">
    <h3 id="score">Score {score}/4</h3>;
    <div id="child1">
    <h2>Question {count}/4</h2>
    <h3>{question}</h3>
    </div>

    <div id="child2">
    <ul>
    <li onClick={update}><h4>{options[1]}</h4></li>
    <li onClick={update}><h4>{options[2]}</h4></li>
    <li onClick={update}><h4>{options[3]}</h4></li>
    <li onClick={update}><h4>{options[4]}</h4></li>
    </ul>
    </div>
    </div>
  );
}


function App() {
  return (
    <React.Fragment>
    <h1>React Quiz</h1>
    <div id="card">
    <Question/>
    </div>
    </React.Fragment>
  );
}

export default App;
