import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import classes from './App.module.css';
import Login from './Pages/Login/Login';
import AdminDash from './Pages/AdminDash/AdminDash';
import ExecDash from './Pages/ExecDash/ExecDash';
import Topbar from './Components/Topbar/Topbar';


function App() {

  const [loginStatus, setloginStatus] = useState(false)

  const handleuserLogin = () => {
    localStorage.setItem('loginStatus', true);
    // alert("true")
    setloginStatus( true )
  }

  const handleuserLogout = () => {
    localStorage.setItem('loginStatus', false);
    // alert("false")
    setloginStatus( false )

  }
  return (
    <div className="App">
      <Router>
      <Topbar loginStatus={loginStatus} handleuserLogout={handleuserLogout}/>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard/admin' component={AdminDash} />
          <Route exact path='/dashboard/executive' component={ExecDash} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
