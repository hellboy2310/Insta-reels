import { useState } from "react";

function Login(){
    const[email,setEmail] = useState('');
    const[pass,setpass]  = useState('');
    
    const trackEmail = (e) =>{
        setEmail(e.target.value);
    }
    const trackPass = (e) =>{
        setpass(e.target.value);
    }

    const handlebutton = () =>{
        alert(email  + " " + pass);
    }


    return(
        <div>
            <input placeholder="enter your email" onChange={trackEmail} type = 'email'></input>
            <br></br>
            <input placeholder="enter your password" onChange = {trackPass} type = 'password'></input>
            <br></br>
            <button onClick={handlebutton}>Login</button>

        </div>
    )
}
export default Login;