import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Ue1 from './components/Ue1';
import Parent from './components/Context/Parent';
import Test from './components/Context/Test';
import ThemeChanger from './components/Context/ThemeChanger'
import ContextNormal from './components/Context/ContextNormal'
import ContextMemo from './components/Context/ContextMemo';


function App() {
  return(
    
    // <ThemeChanger/>
    // <ContextNormal/>
    <ContextMemo/>
    );
  
}

export default App;
