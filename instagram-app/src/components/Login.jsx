import { useEffect, useState } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


function Login() {
    const [email, setEmail] = useState('');
    const [pass, setpass] = useState('');
    const [user, setUser] = useState(null); //user will tell if the user is logged in or not if it is logged in it will display the contents to UI
    const [loader, setLoader] = useState(false);//when the user will press the login button it will make the user wait for a while by setloader == true means the data is yet to be displayed and setloader == false means data in visible on UI
    const [error, setError] = useState("");//if the use enters wrong details then this will work
    // const [mainLoader, setMainLoader] = useState(true);//check if the user is already logged in
    const trackEmail = (e) => {
        setEmail(e.target.value);
    }
    const trackPass = (e) => {
        setpass(e.target.value);
    }

    const handlebutton = async () => {
        try {
            setLoader(true);//it means that it will go in loading state
            let userCredential = await signInWithEmailAndPassword(auth, email, pass);//this is given to us by firebase
            setUser(userCredential.user);//it will set the setUser to the uid given in the firebase
        }

        catch (err) {
            setError(err.message);//the error will be stored in here

            setTimeout(() => {
                setError("");
            }, 2000);//we don't want to display the error for more then 2 seconds that is why we have used settimeout
        }
        setLoader(false);

    }


    const logout = async () => {
        await signOut(auth);
        setUser(null);
    }

    useEffect(() => {
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
            // setMainLoader(false);
        });

    }, [])



    return (
        <>
            {
            // mainLoader == true?<h1>...PageLoading</h1>:
            error != "" ? <h1>{error}</h1> :
                loader == true ? <h1>...loading</h1> :
                    user != null ? <h1>User is{user.uid} <button onClick={logout}>logout</button></h1> :

                        <>

                            <input placeholder="enter your email" onChange={trackEmail} type='email'></input>
                            <br></br>
                            <input placeholder="enter your password" onChange={trackPass} type='password'></input>
                            <br></br>
                            <button onClick={handlebutton}>Login</button>


                        </>
            }

        </>



    )
}
export default Login;