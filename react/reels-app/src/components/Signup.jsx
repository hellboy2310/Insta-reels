import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import {collection, addDoc} from "firebase/firestore";


function Signup(){
    
    const [email,setEmail]  = useState("");
    const  [pass,setPass] = useState("");
    const [name,setName] = useState("");
    const [user,setUser] = useState("");
    const [loader,setLoader] = useState(false);
    const [error,setError] = useState("");
    

    async function processSignup(){
        try{
            setLoader(true);
            let userCred  = await createUserWithEmailAndPassword(auth,email,pass);

            const docRef = await addDoc(collection(db,"users"),{
                email,
                name,
                reelsIds:[],
                profileImgUrl:"",
                userId:userCred.user.uid
            });

            setUser(userCred.user);
        }
        catch(err){
            setError(err.message);
            setTimeout(()=>{
                setError("");
            },2000);
        }
        setLoader(false);
    }

    return(

        <>
        {
            error != ""?<h1>Error is {error}</h1>:
            loader == true?<h1>...loading</h1>:
            user != ""?<h1>user is {user.uid}</h1>:
            <div>
            <input type = "email" value = {email} onChange = {(e) =>setEmail(e.target.value)} placeholder="email"/><br></br>
            <input type = "password" value = {pass}  onChange = {(e)=>setPass(e.target.value)} placeholder="password"/><br></br>
            <input type = "text"  value = {name} onChange = {(e)=>setName(e.target.value)} placeholder="Name"/><br></br>
            <button type = "click"onClick={processSignup}>sign up</button>
        </div>
        }
        
        </>

        
    )
}

export default Signup;