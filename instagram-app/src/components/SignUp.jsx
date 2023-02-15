import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";

function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loader, setLoader] = useState(false);
    const [user, setUser] = useState("");
    const [error, setError] = useState("")


    const createUser = async () => {
        try {
            setLoader(true);
            let userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
        }
        catch (error) {
            setError(error);
            setTimeout(() => {
                setError('');
            }, 2000);
        }
        setLoader(false);
    }

    const Emailhandler = (e) => {
        setEmail(e.target.value);
    }
    const Passwordhandler = (e) => {
        setPassword(e.target.value);
    }
    const Namehandler = (e) => {
        setName(e.target.value);
    }

    return (

        <>
        {
            error != ''?<h1>{error.message}</h1>:
            loader == true?<h1>...loading</h1>:
            user != '' ?<h1>user is {user.uid}</h1>:
                <div>
                <input type="email" onChange={Emailhandler} placeholder="Enter your email" value={email}></input>
                <br></br>
                <input type="password" onChange={Passwordhandler} placeholder="Enter your password" value={password}></input>
                <br></br>
                <input type="text" onChange={Namehandler} value={name} placeholder="Enter your text"></input>
                <br></br>
                <button onClick={createUser}>SignUp</button>
            </div>
        }
        
        </>
        
    )
}

export default SignUp;