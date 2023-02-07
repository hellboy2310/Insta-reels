import {useState} from "react";


function Ue1(){
    const[count,setCount] = useState(0);
    const[name,setName] = useState("bhavesh");

    return(
        <div>
            <h1>This is a counter {count}</h1>
        <h1>{name}</h1>
        <button onClick={()=>setCount(count + 1)}>+</button>
        <button onClick={()=>setName("hellboy")}>ChangeName</button>
        </div>
        
    )

}

export default Ue1;