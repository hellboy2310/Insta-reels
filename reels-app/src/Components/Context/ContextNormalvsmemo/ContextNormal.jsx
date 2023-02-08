
import {useContext, useState,createContext} from 'react';

let ThemeContext = createContext('hi');


function ContextNormal(){ console.log("rendered Children  normal");
   
   const[message,setMessage] = useState('hello');
   

    return(
        <>
       
        <div>This is ContextNormal</div>
        <button onClick={()=>setMessage('message update')}>ChangeTheme</button>
       
        <ThemeContext.Provider value = {message}>
                <Parent></Parent>
           
        </ThemeContext.Provider>
            
            
        </>
        
    )
}


function Parent(){
    console.log("rendered Parent");
    return(
        <>
                <div>I am a parent</div>
            <Children></Children>
            
        </>
        
    )
}


function Children(){
   
   console.log("rendered Children");
    return(
        <>
                <div>I am a Children</div>
            <GrandChildren></GrandChildren>
            
        </>
    )
}


function GrandChildren(){
     console.log("rendered Grandchildren");
    let message = useContext(ThemeContext);
    return(
<>  
<div>`God sent this message ${message}`</div>

</>

    )
}





export default ContextNormal;