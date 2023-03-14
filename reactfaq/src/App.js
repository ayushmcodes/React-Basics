import React from 'react';
import './App.css';
import Question from './Question';
import './styles.css';

function App() {
  return (
    <React.Fragment>
    <h1>Project:FAQ/Accordian</h1>
    <div className="container">
    <h2>Frequently asked questions</h2>
    <div className="questions">
    {
      questionarray.map((question)=>{return <Question title={question.title} info={question.info}/>})
    }
    </div>
    </div>
    </React.Fragment>
  );
}

const questionarray = [
  {
    id:1,
    title:"What is React.js?",
    info:"React.js is an open-source JavaScript library used for building user interfaces (UIs). Developed and maintained by Facebook, React.js allows developers to build reusable UI components and manage the state of these components with ease."
  },
  {
    id:2,
    title:"What are the benefits of using React.js?",
    info:"React.js offers several benefits, including improved performance, better code maintainability, and a more modular codebase. With React.js, developers can create reusable UI components that can be used across different projects, resulting in more efficient and consistent development."
  },
  {
    id:3,
    title:"How does React.js differ from other JavaScript frameworks?",
    info:"Unlike other JavaScript frameworks, React.js is focused solely on the UI layer of an application. It is not a full-stack framework and does not include tools for server-side rendering, routing, or other backend tasks. Additionally, React.js uses a virtual DOM to efficiently manage and update the UI, while other frameworks may use a more traditional approach of manipulating the actual DOM directly."
  }
]

export default App;
