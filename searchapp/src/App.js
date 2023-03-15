import React from 'react';
import './App.css';
import './styles.css'
import { useState } from 'react';


function App() {
  const mainlist=["Java","C++","Python","JavaScript","Angular","HTML","CSS"]
  var[list,updatelist]=useState([]);

  updatelist=(event)=>{
    console.log(event.target.value);
    var newlist=[];
    for(var i=0;i<mainlist.length && event.target.value!="";i++)
    {
      if(mainlist[i].indexOf(event.target.value)>=0)
      {
        newlist.push(mainlist[i]);
      }
    }

    list=newlist;
    console.log("updated list len is "+list.length);
    
    var listholder=document.getElementById("listholder");
    while(listholder.hasChildNodes()){
      listholder.removeChild(listholder.firstChild);
    }

    var ul=document.createElement("ul");

    
    for(var i=0;i<list.length;i++)
    {
      var li=document.createElement("li");
      li.innerHTML=list[i];
      ul.append(li);
    }
    if(ul.hasChildNodes())
    {
      listholder.appendChild(ul);
    }
  }


  return (
    <React.Fragment>
    <h3>Type to Search in List</h3>
    <div id="card">
    <div id="inputholder"><input id="input" type="text" onChange={updatelist}/></div>
    <div id="listholder">
    </div>
    </div>
    </React.Fragment>
  );
}

export default App;
