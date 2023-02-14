import {createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

function SignUp(){
    
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[name,setName] = useState("");


    const createUser = async()=>{
      let userCredential =   await createUserWithEmailAndPassword(auth, email, password);
          console.log(userCredential.user);
    }

    const Emailhandler = (e) =>{
        setEmail(e.target.value);
    }
    const Passwordhandler = (e) =>{
        setPassword(e.target.value);
    }
    const Namehandler  = (e) =>{
        setName(e.target.value);
    }

    return(
        <div>
            <input type  = "email"  onChange={Emailhandler} placeholder="Enter your email" value={email}></input>
            <br></br>
            <input type = "password" onChange={Passwordhandler} placeholder="Enter your password" value = {password}></input>
            <br></br>
            <input type="text" onChange={Namehandler}  value = {name} placeholder="Enter your text"></input>            
            <br></br>
            <button onClick={createUser}>SignUp</button>
        </div>
    )
}

export default SignUp;