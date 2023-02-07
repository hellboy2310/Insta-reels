import { useContext, useState } from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import React from "react";

export const ThemeContext  = React.createContext('');


function App(){
    let[theme,setTheme] = useState('light');


    const changetheme = ()=>{
        if(theme == 'light'){
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }

    return(
        <>
        <ThemeContext.Provider value={theme}>
        <Navbar></Navbar>
        <Footer></Footer>
        <button onClick={changetheme}>changetheme</button>
        
        </ThemeContext.Provider>
        </>
        
    )
}

export default App;