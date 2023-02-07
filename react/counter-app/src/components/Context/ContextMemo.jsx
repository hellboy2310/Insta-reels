import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"
import Parent from './Parent'

export let Context = createContext("hello");

export default function ContextMemo(){
    const[message,setMessage] = useState("fake message");
    
    const changeMessage = ()=>{
        setMessage("Message updated");
    }
    console.log("rendered context Memo");
    
    return(

        <div>
             <div>Context Normal</div>
        <button onClick={changeMessage}>Click Button</button>
        <Context.Provider value = {message}>
            <Parent></Parent>
        </Context.Provider>

        </div>
       
    )
}