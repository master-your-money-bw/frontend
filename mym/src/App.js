import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import OnboardingForm from './components/OnboardingForm';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage}/> {/* will be removed */}
      <Route path="/login" component={Login}/>
      <Route path="/onboarding" component={OnboardingForm}/>
      <Route path="/dashboard" component={Dashboard}/>
    </div>
  );
}

export default App;
