import { useState } from "react";

export default function Question(props){
    const [isOpen,setOpen]=useState("false");

    return (
        <section>
        <div className={isOpen?"open":"closed"}>
        <h4>{props.title}</h4>
        <button onClick={()=>setOpen(!isOpen)}>{isOpen?"-":'+'}</button>
        </div>
        {isOpen && <p>{props.info}</p>}
        </section>
    );
}