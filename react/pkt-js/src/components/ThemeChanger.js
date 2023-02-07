import React,{useState} from 'react';
import Navbar from './Navbar'
import Footer from './Footer'


export const  ThemeContext = React.createContext("");

function App(){
    let[theme,setTheme] = useState('light');
    
    const handletheme = ()=>{
        if(theme == 'light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    }
    
    
    
    return(
        <ThemeContext.Provider value={theme}>
           <Navbar></Navbar> 
            <Footer></Footer>
            <button onClick={handletheme}>ChangeTheme</button>

        </ThemeContext.Provider>
    )
}

export default App;