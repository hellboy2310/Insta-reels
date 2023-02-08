
import { useState,createContext } from "react";
import Parent from "./Parent";
export let Context = createContext('hello');

function ContextMemo(){
    console.log("Memo function");
    const[message,setMessage] = useState('fake message');
    
    return(
        <>
        <div>this is context Memo</div>
        <button onClick={()=>setMessage('message updated')}>OnChange</button>
        <Context.Provider value = {message}>
            <Parent></Parent>
        </Context.Provider>
        </>
    )
}

export default ContextMemo;