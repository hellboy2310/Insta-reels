import logo from './logo.svg';
import './App.css';
import Ue1 from './Components/Ue1';
import Ue2 from './Components/Ue2';
import Ue3 from './Components/Ue3';
import Parent from './Components/Context/Parent';
import Test from './Components/Context/Test';
import ThemeChanger from './Components/Context/ThemeChanger';
import ContextNormal from './Components/Context/ContextNormalvsmemo/ContextNormal';
import ContextMemo from './Components/Context/ContextNormalvsmemo/ContextMemo';

function App() {

 
  return (
    <div className="App">
     {/* <Ue1/> */}
     {/* <Ue2/> */}
     {/* <Parent/> */}
     {/* <Test/> */}
     {/* <ThemeChanger/> */}
     {/* <ContextNormal/> */}
     <ContextMemo/>
     
    </div>
  );
}

export default App;
