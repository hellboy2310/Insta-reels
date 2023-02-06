import { useState, useContext } from 'react';
import React from 'react';


let context = React.createContext('null');

function Test() {

    const [FirstName, setFirstName] = useState("bhavesh");
    const [LastName, setLastName] = useState("Purohit");


    return (
        <context.Provider value={{ FirstName, LastName }}>
            <ChildA />

        </context.Provider>

    )
}


function ChildA() {
    return (
        <>
            <h1>This is ChildA</h1>
            <ChildB />
        </>

    )


}

function ChildB() {

return(
    <>
    <h2>This is ChildB</h2>
    <ChildC />
</>

)

}

function ChildC() {
    const { FirstName, LastName } = useContext(context);
   
   return(
    <>
    <h1>This is ChildC</h1>
    <h1>{FirstName}</h1>
    <h1>{LastName}</h1>
</>
   )
   

}


export default Test;