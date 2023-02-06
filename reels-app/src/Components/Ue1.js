import { useState,useEffect } from "react";


function Ue1(){
    const[count,setCount] = useState(0);
    
    useEffect(()=>{
        document.title = `the count is ${count}`
    })


    return(
        <>
        <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
        </>
        
        
    )
}

export default Ue1;