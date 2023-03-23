import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {FcHeadset} from "react-icons/fc"
import { FcIpad,FcElectronics,FcCalculator} from 'react-icons/fc';
import {FaGoogle, FaRegSun} from "react-icons/fa";
import {AiFillApple,AiOutlineGoogle} from "react-icons/ai";
function App() {
  const [icon,setIcon]=useState("apple");

  /**function changeIcon(icon){
    if(icon=="apple")
    return "google";
    else
    return "apple";
  }*/

  const changeIcon=(icon)=>{
    if(icon=="apple")
    return "google";
    else
    return "apple";
  }

  return (
    <>
    <div>
      <p>
        For coding you need some good <FcHeadset/> 
      </p>
    </div>

    <div>
      <li>Ipad<FcIpad/></li>
      <li>Calculator<FcCalculator/></li>
      <li>Electronics<FcElectronics/></li>
      <FaRegSun onClick={()=>alert("Icon clicked")}/>
    </div>

    <div>
      <button onClick={()=>setIcon((old)=>changeIcon(old))}>Change</button>
      <p>I work at:{icon=="apple" ? <AiFillApple/>:<AiOutlineGoogle/>}</p>
    </div>
    </>
  );
}

export default App;
