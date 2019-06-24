import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import OnboardingForm from './components/OnboardingForm';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import ExpenseTracker from './components/ExpenseTracker';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
    <Header />
      <Route path="/" exact component={Homepage}/> {/* will be removed */}
      <Route path="/login" component={Login}/>
      <Route path="/onboarding" component={OnboardingForm}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/track" component={ExpenseTracker}/>
      <Route path="/register" component ={Register}/>
    </div>
  );
}

export default App;
