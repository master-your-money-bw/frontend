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
      <form onSubmit={this.onSubmitForm}>
        <h2>Profile</h2>
        <div>
          <p>Age range:</p>
          <input required name="age" value={this.state.profile.age} onChange={this.onInputChange} type="number"/>
        </div>
        <div>
          <p>Location:</p>
          <input required name="location" value={this.state.profile.location} onChange={this.onInputChange} type="text"/>
        </div>
        <div>
          <p>Current income bracket/salary per year/income earned per month:</p>
          <input required name="income" value={this.state.profile.income} onChange={this.onInputChange} type="number"/>
        </div>
        <div>
          <p>Level of Education:</p>
          <input required name="education" value={this.state.profile.education} onChange={this.onInputChange} type="text"/>
        </div>
        <div>
          <p>Transportation costs (e.g. car loan, insurance, fuel, etc):</p>
          <input required name="transportation" value={this.state.profile.transportation} onChange={this.onInputChange} type="number"/>
        </div>
        <div>
          <p>Food costs:</p>
          <input required name="food" value={this.state.profile.food} onChange={this.onInputChange} type="number"/>
        </div>
        <div>
          <p>Clothing:</p>
          <input required name="clothing" value={this.state.profile.clothing} onChange={this.onInputChange} type="number"/>
        </div>
        <div>
          <p>Bills:</p>
          <input required name="bills" value={this.state.profile.bills} onChange={this.onInputChange} type="number"/>
        </div>
        <div>
          <p>Housing:</p>
          <input required name="housing" value={this.state.profile.housing} onChange={this.onInputChange} type="number"/>
        </div>
        <button>Next</button>
      </form>
    );
  }
}

export default connect(null, { updateProfile })(OnboardingForm);
