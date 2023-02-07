import { useEffect, useState } from "react";



function Ue1(){
    let[count,setCount] = useState(0);


    useEffect(()=>{
        document.title = `the count is ${count}`
    })

    return(
        <>
        <h1> This is a Counter {count} </h1>
        <button onClick={()=>setCount(count + 1)} >+</button>
        <button onClick={()=>setCount(count - 1)}>-</button>
        </>
        

    )
}

export default Ue1