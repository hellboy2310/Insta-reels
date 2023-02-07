import { useState } from "react";


function Counter(){
    let[count,setCount] = useState(0);
    let[text,setText] = useState("");

    
        return(
            <>
            <h1>This is a counter{count}</h1>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={()=>setCount(count - 1)}>-</button>
            <input  onChange={(e)=>setText(e.target.value)}></input>
                <h1>{text}</h1>
            </>
        )
    }



export default Counter;