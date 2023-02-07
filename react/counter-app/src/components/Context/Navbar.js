import { useContext } from "react"
import { ThemeContext } from "./ThemeChanger"
import './Theme.css'

function Navbar(){
    return(
    <>
        <div>NavBar</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>

        <div>-------------------------</div>
    </>

    )
}

function Options(){
    let CTheme = useContext(ThemeContext);

    
}

export default Navbar;