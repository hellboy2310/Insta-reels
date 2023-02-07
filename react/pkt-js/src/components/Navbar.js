import './Theme.css';
import React from 'react';
import { ThemeContext } from './ThemeChanger';
import {useContext} from 'react';
function Navbar(){
    return(
        <>
            <h1> navbar header</h1>
        <Options></Options>
        <Options></Options>
        <Options></Options>

        </>
    )
}


function Options(){
 let CTheme  = useContext(ThemeContext);   

 return(

    <div className={CTheme == 'light'?'light':'dark'}>
        <div>Navbar</div>

    </div>
 )
}


export default Navbar;