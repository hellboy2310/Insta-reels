import {Component} from 'react';
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';  

class NavBar extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div style={{display:"flex"}}>
            <Link to='/' style={{textDecoration:'none'}}><h2 style = {{padding:'1rem',color:'purple'}} >MoviesApp</h2></Link>
            <Link to ="/favourites" style={{textDecoration:'none'}}><h2 style = {{padding:'1rem',color:'purple'}}>Favourites</h2></Link>
            </div>

            
            
        )
    }
    
}

export default NavBar;