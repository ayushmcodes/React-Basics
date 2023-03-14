import React from "react";
import {useState} from "react";
import {useEffect} from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Favoritecolor(){
  const[color,setColor]=useState("red");
  return (
    <div>
    <h1>My favourite color is {color}!</h1>
    <button type="button" onClick={()=>setColor("blue")}>Blue</button>
    <button type="button" onClick={()=>setColor("red")}>Red</button>
    </div>
  );

}
//below is useState hook
function Car(){
  const [brand,setBrand]=useState("audi");
  const [color,setColor]=useState("red");
  const [model,setModel]=useState("sx");
  const [year,setYear]=useState(2022);
  const[cardetails,updatecardetails]=useState({
    brand:"skoda",
    color:"white",
    model:"cxi",
    year:2021
  });

  const updateColor=()=>{
    updatecardetails(val=>{
      return {...val,color:"blue"};
    });
  }

  const updatecolor=()=>{
    updatecardetails({...cardetails,color:"yelllow"})
  };

  return (
    <div>
    <h1>My {cardetails.brand}</h1>
    <p>It is a {cardetails.color} {cardetails.model} from {cardetails.year}</p>
    <button type="button" onClick={updatecolor}>Click to update color</button>
    </div>
  );

}

class CarClassComponent extends React.Component{

  constructor(){
    super();
    this.state={color:"red"};
  }

  render(){
    return <h2>Hi I am a Car class component of {this.state.color} color and brand is {this.props.brand}</h2>;
  }
}

class Component1 extends React.Component{
  render(){
    return <h2>I am component1</h2>;
  }
}

class Component2 extends React.Component{
  render(){
    return (
    <div>
    <h1>I am Component2</h1>
    <Component1/>
    </div>
    );
  }
}

class Component3 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      brand:"audi",
      color:"black",
      year:"2022"
    };
  }

  changecolor=()=>{
    this.setState({color:"red"});
  }

  render(){
    return(
      <div>
      <p>I have a {this.state.color} color {this.state.brand} which I bought in year {this.state.year}</p>
      <button type="button" onClick={this.changecolor}>Press to change car color!</button>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<CarClassComponent brand="audi"/>);

root.render(<Component3/>)