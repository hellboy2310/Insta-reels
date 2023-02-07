import { useState,useEffect } from "react";


function Counter(){
    const[count,setCount] = useState(0);
    const[Text,setText] = useState('');

    useEffect(()=>{
        document.title = `this is ${count} times`;
    })
    
    return(
        <>
            <h1 >{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <input onChange = {(e)=>setText(e.target.value)}></input>    
        <h4>{Text}</h4>
            </>
            )
}

export default Counter;