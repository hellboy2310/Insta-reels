import React, { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";



export const ThemeContext  = React.createContext("");

function App(){
let[theme,setTheme] = useState("light");


const handleTheme = () =>{
    if(theme == 'light'){
        setTheme("dark");
    }
    else{
        setTheme("light");
    }
}


return(
    <ThemeContext.Provider value = {theme}>

    <button onClick={handleTheme} >ChangeTheme</button>
    <Navbar></Navbar>
    <Footer></Footer>

    </ThemeContext.Provider>
)


}

export default App;