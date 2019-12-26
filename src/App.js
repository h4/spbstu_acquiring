import React from "react";
import "./App.css";
import {ApolloProvider} from '@apollo/react-hooks';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {
  LoginPage, ForgotPasswordPage, RegisterPage, SettingsPage,
  LogoutPage, MainPage, InquiriesPage, HistoryPage, PaymentPage
} from './pages';
import {client} from './services';


function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
