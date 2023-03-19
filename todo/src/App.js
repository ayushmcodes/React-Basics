import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import {AiFillPlusSquare} from "react-icons/ai";



function App() {

    
    function extractinput(){
        let text="";
        text=document.getElementById("input1").value;
        console.log(text);
    }

    return (
        <React.Fragment>
            <h1>ToDo made using React</h1>
            <div id="div1">
                <input type="text" id="input1"/>
                <AiFillPlusSquare id="addicon" onClick={extractinput} />
                <select id="input2">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="left">Left</option>
                    <div>
                    </div>
                    
                </select>
            </div>

            <div id="cardholder"></div>
        </React.Fragment>
    );
}

export default App;
