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
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';

function App(props) {
  return (
    <div className="App">
    <Header />
      <Route path="/" exact component={Homepage}/> {/* will be removed */}
      <Route path="/login" component={Login}/>
      {!props.loggedIn && <Route path="/register" component ={Register}/>}
      <PrivateRoute exact path="/dashboard" component={Dashboard}/>
      <PrivateRoute exact path="/track" component={ExpenseTracker}/>
      <PrivateRoute exact path="/onboarding" component={OnboardingForm}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn
  }
}

export default connect(mapStateToProps, {})(App);
