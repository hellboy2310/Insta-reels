import { useContext } from "react";
import { ThemeContext } from "./ThemeChanger";
import './Theme.css'

function Navbar(){
    return(
        <>
        <div>Navbar</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        </>
        )
}


function Options(){
    let CTheme = useContext(ThemeContext);
    return<div className={CTheme == 'light'?'light':'dark'}>options</div>
}

export default Navbar;