import {  useState } from "react";
import { auth } from "../firebase"
import {signInWithEmailAndPassword, signOut , onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function Login(){
    
    const [email,setEmail] = useState("");
    const [password,setPass] = useState("");
    const [user,setUser]  = useState(null);
    const [loader,setLoader] = useState(false);
    const [error,setError] = useState("");
    const [mainLoader,setMainLoader] = useState(true);    

    const trackemail = function(e){
        setEmail(e.target.value);
    }

    const trackpass = function(e){
        setPass(e.target.value);
    }

    const printDetails = async function(){
        try{
            setLoader(true);
            let userCred  = await signInWithEmailAndPassword(auth,email,password);
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
    const logOut = async function(){
        await signOut(auth);
        setUser(null);
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              setUser(user);
              // ...
            } else {
              // User is signed out
              // ...
              setUser(null);
            }
            setMainLoader(false);
          },[]);
    })

    return(

        <div>
         {
            mainLoader == true?<h1>Page is loading...</h1>:
            error != ""?<h1>error is {error}</h1>:
            loader == true?<h1>...loading</h1>:
            user != null ?<><h1>user is {user.uid}</h1> <button onClick={logOut}>Log out</button> </>:
             <>
             <input type = "text" placeholder="email" onChange={trackemail}/>
                <br></br>
                <input type = "text" placeholder="password" onChange={trackpass}/>
                <br></br>
                <button onClick={printDetails}>Login</button>
             
             </>
       
         }
                 
    </div>
    )
}

export default Login;