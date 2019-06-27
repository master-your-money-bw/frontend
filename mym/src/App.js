import React from 'react';
import OnboardingForm from './components/OnboardingForm';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import ExpenseTracker from './components/ExpenseTracker';
import PrivateRoute from './components/PrivateRoute';
import { connect } from 'react-redux'
import { fetchUser } from './actions'
import { Route } from 'react-router-dom';

class App extends React.Component {
  componentDidMount() {
    localStorage.getItem("token") && this.props.fetchUser(localStorage.getItem("token"))
  }

  render() {
    return (
      <div>
        <Route path="/" component={Header}/>
        <PrivateRoute exact path="/onboarding" component={OnboardingForm}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute path="/dashboard/track" component={ExpenseTracker}/>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);