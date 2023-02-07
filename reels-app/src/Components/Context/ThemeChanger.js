import React, { useState } from "react"
import Footer from "./Footer";
import NavBar from "./NavBar";

import './ThemeChange.css';

export const Context = React.createContext("");

function ThemeChanger(){



   
   const[theme,setTheme] = useState('light');

 const  handleTheme  = () => {
    if(theme == 'light'){
        setTheme('dark');
    }
    else{
        setTheme('light');
    }
}


   return(
        <>
        <Context.Provider value = {theme}>
            <button onClick = {handleTheme}>ChangeTheme</button>
            <Footer></Footer>
            <NavBar></NavBar>

        </Context.Provider>
        
        
        </>
        
    )
}


export default ThemeChanger;