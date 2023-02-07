import React,{useState,useContext} from 'react';

let context = React.createContext(null);


function Test(){
const[firstName,setFirstName] = useState('Bhavesh')
const[lastName,setlastName] = useState('messi')

    return(
        <context.Provider value = {{firstName,lastName}}>
            <h1>This is a Parent component</h1>
            <ChildA/>
        </context.Provider>
    )
}


function ChildA(){
    return(
        <div>
            <h1> this is a child a component</h1>
            <ChildB/>
        </div>
    )
}

function ChildB(){
    return(
        <div>
            <h1>this is a child B component</h1>
            <ChildC/>
        </div>
    )
}

function ChildC(){
const {firstName,lastName} = useContext(context);
    return(
    <div>
        <h1>this is a child c component</h1>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
    </div>
)
}

export default Test;