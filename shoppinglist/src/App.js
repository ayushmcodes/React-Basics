import './App.css';
import { useState } from 'react';

function Item({item,remove}){
  return (
    <>
    <li>
      {item}<button className='delete' onClick={remove}>x</button>
    </li>
    </>
  );
}


function App() {
  const [items,setItems]=useState([])

  function onSubmit(event){
    event.preventDefault();
    const form = event.target;
    console.log(form)
    const input = form.inputbar;
    console.log(input)
    const newItems = [...items, input.value];
    setItems(newItems);
    form.reset();
  }

  function removeitem(e){
    console.log("item removed");
  }

  return (
    <>
    <h2>Shopping List</h2>
    <div id="box">
    <form onSubmit={onSubmit}>
      <input type="text" name="inputbar" id="inputbar" placeholder="Add a new item" />
      <button>ADD</button>
    </form>
    <ul>
    {items.map((item)=>(<Item item={item} remove={removeitem}/>))}
    </ul>
    </div>
    </>
  );
}

export default App;
