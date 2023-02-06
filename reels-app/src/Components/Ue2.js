import {useState,useEffect} from 'react';


function Ue2(){
    const[count,setCount] = useState(0);
    const[Name,setName] = useState('hellboy');
    
    useEffect(()=>{
        document.title = `count ${count},name ${Name}`;
      },[]);
    
    
    return(
        <>
        <h1>The count is {count}</h1>
        <h1>name is {Name}</h1>
        <button onClick={()=>setCount(count + 1) }>OnClick</button>
        <button onClick={()=>setName("bhavesh")}>Onchange</button>
        </>
    )

}

export default Ue2;