import {useState,useEffect} from 'react';

function Ue3() {
    const [count, setCount] = useState(0);
    const [Name, setName] = useState('hellboy');


    useEffect(()=>{
        document.title = `count ${count} name ${Name}`;
    },[Name,count])

    return (
            <>
                <h1>{count}</h1>
                <h1>{Name}</h1>
                <button onClick={()=>setCount(count + 1)}>+1</button>
                <button onClick={()=>setName('bhavesh')}>Onchange</button>
            </>
        )
}

export default Ue3;