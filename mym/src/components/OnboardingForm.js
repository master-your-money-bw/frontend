import React from "react";
import { connect } from 'react-redux';
import { updateProfile } from '../actions';

class OnboardingForm extends React.Component {
  state = {
    profile: {
      age: "",
      location: "",
      income: "",
      education: "",
      transportation: '',
      food: '',
      clothing: '',
      bills: '',
      housing: ''
    }
  };

  onInputChange = e => {
    this.setState({
      profile: {
        ...this.state.profile,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.updateProfile(this.state.profile)
    this.props.history.push("/dashboard")
  }

  render() {
    return (
      <form onSubmit={this.onSubmitForm} className="container row">
        <h2>Profile</h2>
        <div className="col s6">
          <div>
            <label htmlFor="age" className="active">Age</label>
            <input required name="age" value={this.state.profile.age} onChange={this.onInputChange} type="number" id="age"/>
          </div>
          <div>
            <label htmlFor="location" className="active">Location</label>
            <input required name="location" value={this.state.profile.location} onChange={this.onInputChange} type="text" id="location"/>
          </div>
          <div>
            <label htmlFor="education" className="active">Education</label>
            <input required name="education" value={this.state.profile.education} onChange={this.onInputChange} type="text" id="education"/>
          </div>
        </div>
        <div className="col s6">
          <div>
            <label htmlFor="income" className="active">Income</label>
            <input required name="income" value={this.state.profile.income} onChange={this.onInputChange} type="number" id="income"/>
          </div>
          <div>
            <label htmlFor="transportation" className="active">Transportation</label>
            <input required name="transportation" value={this.state.profile.transportation} onChange={this.onInputChange} type="number" id="transportation"/>
          </div>
          <div>
            <label htmlFor="food" className="active">Food</label>
            <input required name="food" value={this.state.profile.food} onChange={this.onInputChange} type="number" id="food"/>
          </div>
          <div>
            <label htmlFor="clothing" className="active">Clothing</label>
            <input required name="clothing" value={this.state.profile.clothing} onChange={this.onInputChange} type="number" id="clothing"/>
          </div>
          <div>
            <label htmlFor="bills" className="active">Bills</label>
            <input required name="bills" value={this.state.profile.bills} onChange={this.onInputChange} type="number" id="bills"/>
          </div>
          <div>
            <label htmlFor="housing" className="active">Housing</label>
            <input required name="housing" value={this.state.profile.housing} onChange={this.onInputChange} type="number" id="housing"/>
          </div>
        </div>
        <button className="waves-effect waves-light btn-small">Next</button>
      </form>
    );
  }
}

export default connect(null, { updateProfile })(OnboardingForm);
