import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import LoginPage from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import RegisterPage from './pages/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/remember">
          <ForgotPassword/>
        </Route>
        <Route path="/register">
          <RegisterPage/>
        </Route>
        <Route path="/">
          <LoginPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
