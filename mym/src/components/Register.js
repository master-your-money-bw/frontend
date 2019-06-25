import React from "react";
import { connect } from "react-redux";
import { createUser, login } from "../actions";

class Register extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      verifyPassword: ""
    }
  };
  onInputChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmitLogin = e => {
    e.preventDefault();
    this.props
      .createUser(this.state.credentials)
      .then(res =>
        !this.props.error ? this.props.login(this.state.credentials) : null
      )
      .then(res => {
        !this.props.error && this.props.history.push("/onboarding");
      });
  };

  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <div className="card white">
            <div className="card-content">
              <span className="card-title">Register</span>
              <br />
              <form onSubmit={this.onSubmitLogin}>
                <div className="input-field">
                  <input
                    name="username"
                    value={this.state.credentials.name}
                    onChange={this.onInputChange}
                    type="text"
                    autoComplete="username"
                    id="username"
                  />
                  <label for="username" className="active">
                    Username:
                  </label>
                </div>
                <div className="input-field">
                  <input
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.onInputChange}
                    type="password"
                    autoComplete="new-password"
                    id="password"
                  />
                  <label for="password" className="active">
                    Password:{" "}
                  </label>
                </div>
                <div className="input-field">
                  <input
                    name="verifyPassword"
                    value={this.state.credentials.verifyPassword}
                    onChange={this.onInputChange}
                    type="password"
                    autoComplete="none"
                    id="verifyPassword"
                  />
                  <label for="verifyPassword" className="active">
                    Retype Password:{" "}
                  </label>
                  {this.state.credentials.password !==
                  this.state.credentials.verifyPassword ? (
                    <p>Passwords don't match</p>
                  ) : (
                    ""
                  )}
                </div>
                <button className="btn waves-effect waves-light">
                  Register
                  <i className="material-icons right">send</i>
                </button>
              </form>
              {this.props.error && <p>{this.props.error}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { createUser, login }
)(Register);
