import React from "react";
import { connect } from "react-redux";
import { createUser, login, fetchUser } from "../actions";
import { Link } from "react-router-dom";

class Register extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      verifyPassword: ""
    },
    error: ""
  };

  componentDidMount() {
    this.setState({ error: "" });
    this.props.fetchUser(localStorage.getItem("token")).then(res => {
      if (this.props.user.age) this.props.history.push("/dashboard");
    });
  }

  componentWillUnmount() {
    this.setState({ error: "" });
  }

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
        !this.props.error
          ? this.props.login(this.state.credentials)
          : this.setState({ error: this.props.error })
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
              {!this.state.error ? (
                <div>
                  <br />
                  <br />
                </div>
              ) : (
                <span style={{ color: "red" }}>{this.state.error}</span>
              )}
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
                  <label htmlFor="username" className="active">
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
                  <label htmlFor="password" className="active">
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
                  <label htmlFor="verifyPassword" className="active">
                    Retype Password:{" "}
                  </label>
                  {this.state.credentials.password !==
                  this.state.credentials.verifyPassword ? (
                    <span style={{ color: "red" }}>Passwords don't match</span>
                  ) : (
                    <div style={{ height: "21px" }} />
                  )}
                </div>
                <button className="btn teal accent-3">
                  Register
                  <i className="material-icons right">send</i>
                </button>
              </form>
              <br />
              <Link to="/login">
                <span>Already have an account? Click here.</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    user: {
      age: state.user.age
    }
  };
};

export default connect(
  mapStateToProps,
  { createUser, login, fetchUser }
)(Register);
