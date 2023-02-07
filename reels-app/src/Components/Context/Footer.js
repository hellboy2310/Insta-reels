import { useContext } from "react"
import { Context } from './ThemeChanger';


function Footer(){
    return(
        <>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        </>
    )
}


function Options(){
    let CTheme = useContext(Context);
    return(
        <div className= {CTheme == 'light'?'light':'dark'}>
            options
        </div>
    )
}

export default Footer