import React, { useContext } from 'react';
import {ThemeContext} from './ThemeChanger'

function Footer(){
    return(
        <>
        <div>footer</div>
        <FooterText></FooterText>
        </>
    )
}



function FooterText(){
    let CTheme = useContext(ThemeContext);

    return(
        <div className={CTheme == 'light'?'light':'dark'}>
            FooterText
        </div>
        
        )
}

export default Footer;