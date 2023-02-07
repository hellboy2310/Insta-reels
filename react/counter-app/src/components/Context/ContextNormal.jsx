import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

export let Context = createContext("hello");

export default function ContextNormal(){
    const[message,setMessage] = useState("fake message");
    
    const changeMessage = ()=>{
        setMessage("Message updated");
    }
    console.log("rendered context Normal");
    
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

function Parent(){
    console.log("Rendered parent");
    return(
        <>
        <div>I am a Parent</div>
        <Children></Children>
        </>
    )
}

function Children(){
   
   console.log("rendered Children");
    return(
        <>
        <div>I am a children</div>
        <GrandChildren></GrandChildren>
        </>
    )
}


function GrandChildren(){
    let message = useContext(Context);
    console.log("rendered Grandchildren");
    return(
        <>
        <div>------------------------</div>
        <div>I am a GrandChildren</div>
        <div>God send this message {message}</div>
        </>
    )
}