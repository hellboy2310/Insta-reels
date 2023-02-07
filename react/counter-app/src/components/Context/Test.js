import React, { useContext, useState } from "react"



let context = React.createContext(null);

function Test(){
    const[firstName,setFirstName]  = useState("adam");
    const[lastName,setLastName] = useState("smith");
    
    
    return(
        <context.Provider value = {{firstName,lastName}}>
            <h1>This is parent component</h1>
            <ChildA/>
        </context.Provider>
    )
}


function ChildA(){
    return(
        <>
        <h1>This is a child A component</h1>
        <ChildB/>
        
        </>
    )
}

function ChildB(){
    return(
    <>
            <h1>This is a childB component</h1>
        <ChildC/>
    </>
    

    )
}


function ChildC(){
    
    const {firstName,lastName} = useContext(context);
    return(
        <>
            <h1>This is a childC</h1>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
        </>
        
        
    )
}



export default Test;
