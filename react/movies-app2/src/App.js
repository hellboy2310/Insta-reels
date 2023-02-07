import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import Banner from './Components/Banner';
import MovieList from './Components/MovieList';
// import NavBar from './Components/Navbar';
import Fav from './Components/Fav';
import { BrowserRouter ,Routes, Route, Link, Router } from 'react-router-dom';

function App() {
  return (
    <>

   <BrowserRouter>
   <NavBar/>
   <Routes>
   
    
    <Route exact path='/' element = {<><Banner/> <MovieList/></>}></Route>
    <Route exact path='/favourites' element = {<Fav/>}></Route>
    </Routes>
   </BrowserRouter>
   
    </>
   
  );
}

export default App;
