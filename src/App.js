import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {LoginPage, ForgotPasswordPage, RegisterPage, SettingsPage, LogoutPage} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/remember">
          <ForgotPasswordPage/>
        </Route>
        <Route path="/register">
          <RegisterPage/>
        </Route>
        <Route path="/settings">
          <SettingsPage/>
        </Route>
        <Route path="/logout">
          <LogoutPage/>
        </Route>
        <Route path="/">
          <LoginPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
