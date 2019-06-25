import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import OnboardingForm from './components/OnboardingForm';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import ExpenseTracker from './components/ExpenseTracker';
import Register from './components/Register';
import PrivateRoute from './components/PrivateRoute';
import Homepage from './components/Homepage';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={Homepage}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component ={Register}/>
      <PrivateRoute exact path="/onboarding" component={OnboardingForm}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute path="/dashboard/track" component={ExpenseTracker}/>
    </div>
  );
}

export default App;