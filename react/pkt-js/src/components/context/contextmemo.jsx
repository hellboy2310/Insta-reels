import React,{ useState } from "react";
import Parent from './Parent'

export let Context = React.createContext("hello");

function ContextMemo(){
    const[message,setMessage] = useState('fake message');

    const handleChange = () =>{
        setMessage('message has been updated');
    }

    return(
        <>
        <div>Context Memo</div>
        <button onClick={handleChange}>click</button>
        <Context.Provider value = {message}>
        <Parent></Parent>
        </Context.Provider>
        
        </>
    )
}

export default ContextMemo;