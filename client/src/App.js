import Login from './components/Login';
import Signup from './components/Signup';
import Hello from './components/Hello';
import React,{useState} from 'react'
import { Route, Switch ,Redirect} from 'react-router';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
            <Login setIsLoggedIn={setIsLoggedIn}/>
        </Route>
        <Route path="/register">
            <Signup/>
        </Route>
        <Route path="/home">
          <Hello/>
        </Route>
      </Switch>
      {
        isLoggedIn? <Redirect to='/home'/>:<Redirect to='/'/>
      }
    </div>
  );
}

export default App;
