import {useState} from 'react';
import ChildA from './ChildA';

function Parent(){
    const[firstName,setFirstName] = useState('bhavesh');
    const[lastName,setLastName] = useState('purohit');

    return(
        <ChildA firstName = {firstName} lastName = {lastName}/>
    )
}

export default Parent;