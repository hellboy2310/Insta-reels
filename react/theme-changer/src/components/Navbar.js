import React, { useContext } from 'react';
import './Theme.css'
import {ThemeContext} from './ThemeChanger'

function Navbar(){
    return(
        <>
        <div>Navbar</div>
        <Options></Options>
        <Options></Options>
        
        </>
        )
}

function Options(){
    let CTheme = useContext(ThemeContext);

    return(

        <div className={CTheme == 'light'?'light':'dark'}>
            Navbar
        </div>
    )
}

export default Navbar;