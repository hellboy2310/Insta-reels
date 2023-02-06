import {useState} from 'react';
import ChildA from './ChildA';


function Parent(){
    const[name,setName] = useState('bhavesh');
    const[lastname,setLastName] = useState("purohit");


    return(
        <>
            <h1>this is a parent Components</h1>    
            <ChildA fname = {name} lname ={lastname}/>
        </>
        
    )
}
export default Parent;
