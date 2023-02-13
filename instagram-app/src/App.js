import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import SignUp from './components/SignUp';
import { Switch, Route } from 'react-router-dom';
//In this code we have installed react-router-dom@5.3.1 to understand switch 


function App() {
  return (
    <div>
      <Switch>
        <Route path='/feed'>
          <Feed></Feed>
        </Route>
        <Route path = '/login'>
          <Login></Login>
        </Route>
        <Route path = '/profile'>
          <Profile></Profile>
        </Route>
        <Route path = '/Signup'>
          <SignUp></SignUp>
        </Route>
        <PageNotFound></PageNotFound>
      </Switch>
    </div>
  );
}

export default App;
