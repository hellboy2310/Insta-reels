import logo from './logo.svg';
import './App.css';
import Feed from './components/Feed';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import Profile from './components/Profile';
import Signup from './components/Signup';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/feed">
        <Feed></Feed>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/signup">
        <Signup></Signup>
      </Route>
      <Route path="/profile">
        <Profile></Profile>
      </Route>
      <Route>
        <PageNotFound></PageNotFound>
      </Route>
    </Switch>
  );
}

export default App;
