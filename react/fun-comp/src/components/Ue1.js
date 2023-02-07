import {useState,useEffect} from 'react'


function Ue1(){

    useEffect(()=>{
        document.title  = `the counter ${count}`
    })


    const[count,setCount] = useState(0);
    const[Text,setText] = useState('');

    return(
        <div>
            <input onChange={(e)=>setText(e.target.value)} type = 'text'></input>
            <h1 onClick={()=>setCount(count + 1)}>this is counter {count}</h1>
            <h1>{Text}</h1>
        </div>
    )

}
export default Ue1;