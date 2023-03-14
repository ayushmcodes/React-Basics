import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import './style.css';



function Meter(){
  const [temp,updatetemp]=useState(25);

  return(
    <React.Fragment>
    <div id={temp>30?"meterred":"meterblue"}>
    <h3>{temp+"°C"}</h3>
    </div>
    <div id="buttonpannel">
    <button onClick={()=>updatetemp(temp+1)}>+</button>
    <button onClick={()=>updatetemp(temp-1)}>-</button>
    </div>
    </React.Fragment>
  );
}


function App() {
  return (
    <div id="card">
    <Meter/>
    
    </div>
  );
}

export default App;
