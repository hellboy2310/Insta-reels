//this is the second useeffect in which only component did update will work rather than changing againn and again it will change only once and that will not change after

import { useEffect,useState } from 'react';
 
function Ue2(){
    const[count,setCount] = useState(0); 
    const{Text,setText} = useState('');

    useEffect(()=>{
        document.title = `the count is ${count}`;
    },[])

    return(
        <div>
            <h1>this is a counter {count}</h1>
            <button onClick={()=>setCount(count + 1)}>+</button>

        </div>
    )
}

export default Ue2;