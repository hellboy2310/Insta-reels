import {useState,useEffect} from "react"




function Ue1() {

    const[count,setCount] = useState(0);

    useEffect(()=>{
        document.title = `the count is ${count}`
    })    


    return (
        <div>
            <h1>This is a counter {count}</h1>
            <button onClick={()=>setCount(count+1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
        </div>
    )
}

export default Ue1;