import logo from './logo.svg';
import './App.css';
import {AiFillEdit,AiFillDelete} from "react-icons/ai";
import { useState } from 'react';

function Item({content,deleteitem,index,edititem}){
  return(
    <>
      <li className="item">
        <input value={content} className="p" readOnly={true} id={index}/>
        <div id="iconholder">
        <AiFillEdit onClick={()=>edititem(index)}/>
        <AiFillDelete onClick={()=>deleteitem(index)}/>
        </div>
      </li>
    </>
  );
}


function App() {
  const [items,updateItems]=useState([])

  function deleteitem(index){
    var newarr=[]
    for(var i=0;i<items.length;i++)
    {
      if(i!=index)
      newarr.push(items[i])
    }
    updateItems(newarr)
  }

  function edititem(index){
    console.log(document.getElementById(index).readOnly)
    document.getElementById(index).readOnly=false;
  }

  const addnewitem=(event)=>{
    event.preventDefault();
    const form=event.target
    const newitem=form.inputbar.value
    const updateitemlist=[...items,newitem]
    updateItems(updateitemlist)
    form.reset();
  }

  return (
    <>
    <h1>Notes App</h1>
      <div id="box">
        <form id="form" onSubmit={addnewitem}>
          <input type="text" name="inputbar" autoComplete='off'/>
          <button>ADD</button>
        </form>
        <ul id="list">
        {items.map((x,index)=>(<Item content={x} deleteitem={deleteitem} index={index} edititem={edititem}/>))}
        </ul>
      </div>
    </>
  );
}

export default App;
