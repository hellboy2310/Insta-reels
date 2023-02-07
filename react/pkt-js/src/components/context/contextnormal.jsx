import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";


let context = createContext('hello');
export default function ContextNormal(){
    const[message,setmessage] = useState('fake message');
    const changeMessage = () =>{
        setmessage("message updated");
    }
    console.log("context normal rendered");
return(
    <>
        <div>Context Normal</div>
        <button onClick={changeMessage}>Click</button>
        <context.Provider value={message}>
            <Parent></Parent>
        </context.Provider>
    </>
    )

}


function Parent(){
    console.log("parent rendered");
return(
    <>
    
    <div>I am a parent</div>
    <Children></Children>
    </>
)
}

function Children(){
    console.log("children rendered");
    return(
        <>
        <div>I am a children</div>
        <Grandchildren></Grandchildren>
        </>
    )
}

function Grandchildren(){
    console.log("Grandchildren rendered");
    let message = useContext(context);
return(
    <>
        <div>I am a grandchildren</div>
        <div>God send this {message}</div>
    </>
)
}