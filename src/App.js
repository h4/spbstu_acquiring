import React from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {LoginPage, ForgotPasswordPage, RegisterPage, SettingsPage,
  LogoutPage, MainPage, InquiriesPage, HistoryPage, PaymentPage} from './pages';
import Inquiries from './pages/Inquiries';

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
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/inquiries">
          <InquiriesPage/>
        </Route>
        <Route path="/history">
          <HistoryPage/>
        </Route>
        <Route path="/payment">
          <PaymentPage/>
        </Route>
        <Route path="/">
          <MainPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
