import { useContext } from "react"
import { Context } from "./ThemeChanger";
function NavBar(){
return(
    <>
    <Nav/>
    <Nav/>
    <Nav/>
    <Nav/>
    <Nav/>
    </>
)
}

function Nav(){
   
    let cTheme = useContext( Context);
    return(

        <div className={cTheme == 'light'?'light':'dark'}>
            OptionsNav
        </div>
    )
}

export default NavBar;

