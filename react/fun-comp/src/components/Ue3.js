
import {useEffect,useState} from 'react';

function Ue3(){
    
    const[count,setCount] = useState(0);
    const[Name,setName] = useState('bhavesh');

    useEffect(()=>{
        document.title = `the count is ${count} name is ${Name}`;
    },[count,Name]);


    return(
        <div>
            <h1>this is a counter {count} and his name is {Name}</h1>

            <button onClick = {()=>setCount(count+1)}>+</button>
            <button onClick = {()=>setName('hellboy')}>changeName</button>

        </div>    
    )
}


export default Ue3;