import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SignUp from './Components/User/Signup';
import Signin from './Components/User/Login';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {

  var history = createBrowserHistory();

  return (
    <>
       <Router history={history}>
      <Switch>
        <Route exact path="/">
          {/* <Home/> */}
        </Route>
        <Route exact path="/sign-in">
          <Signin/>
        </Route>
        <Route exact path="/sign-up">
          <SignUp/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
