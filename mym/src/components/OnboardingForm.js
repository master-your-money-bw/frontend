import React from "react";
import { connect } from 'react-redux';

class OnboardingForm extends React.Component {
  state = {
    profile: {
      age: "",
      location: "",
      income: "",
      education: ""
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

  onSubmitLogin = e => {
    e.preventDefault();
    // push to backend to validate if user is in system
    this.props.history.push("/dashboard")
}

  render() {
    return (
      <form onSubmit={this.onSubmitLogin}>
        <h2>Profile</h2>
        <div>
          <p>Age range:</p>
          <input required name="age" value={this.state.profile.age} onChange={this.onInputChange} type=""/>
        </div>
        <div>
          <p>Location:</p>
          <input required name="location" value={this.state.profile.location} onChange={this.onInputChange} type=""/>
        </div>
        <div>
          <p>Current income bracket/salary per year/income earned per month:</p>
          <input required name="income" value={this.state.profile.income} onChange={this.onInputChange} type=""/>
        </div>
        <div>
          <p>Level of Education:</p>
          <input required name="education" value={this.state.profile.education} onChange={this.onInputChange} type=""/>
        </div>
        <button>Next</button>
      </form>
    );
  }
}

export default connect(null, {})(OnboardingForm);
