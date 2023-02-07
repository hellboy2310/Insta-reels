
import {useState} from 'react';
import ChildA from './ChildA';

function Parent(){

const [firstName,setFirstName] = useState("adam");
const [lastName,setLastName]  = useState("smith")


return(
    <div>
        <ChildA firstName = {firstName} lastName = {lastName}/>
    </div>
)

}

export default Parent