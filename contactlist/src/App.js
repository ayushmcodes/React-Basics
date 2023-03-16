import React, { useEffect, useState } from 'react';
import './App.css';
import './styles.css'

function ContactCard(props)
{
  return(
    <React.Fragment>
    <div id="card">
    <img src={props.avatar} alt="" />
    <div>
    <h3>{props.name}</h3>
    <h3>{props.email}</h3>
    <h3>{props.age}</h3>
    </div>
    </div>
    </React.Fragment>
    
  );
}

function App() {

  const[contacts,setContact]=useState([])
  const[clicked,isclicked]=useState(false)

  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=10")
    .then((res)=>res.json())
    .then((json)=>{
      console.log(json.results)
      setContact(json.results)
    })
  },[clicked])

  function refresh()
  {
    isclicked()
  }
  
  return (
    <React.Fragment>
    
    <h1>Contact List</h1>
    <div id="box">
    {contacts.map((contact)=>(<ContactCard avatar={contact.picture.large} name={contact.name.first} email={contact.email} age={contact.dob.age}/>))}
    </div>
    <button onClick={()=>isclicked(!clicked)}>Refresh</button>
    
    </React.Fragment>
  );
}



export default App;