import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    onInputChange = e => {
        this.setState({ credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }})
    }

    onSubmitLogin = e => {
        e.preventDefault();
        this.props.login(this.state.credentials)
            .then(res => this.props.history.push("/onboarding"))
    }

    render() {
        return (
            <form onSubmit={this.onSubmitLogin}>
                <h2>Sign In</h2>
                <div>
                    <p>Username</p>
                    <input name="username" value={this.state.credentials.username} onChange={this.onInputChange} type="text" required autoComplete="username"/>
                </div>
                <div>
                    <p>Password</p>
                    <input name="password" value={this.state.credentials.password} onChange={this.onInputChange} type="password" required autoComplete="current-password"/>
                </div>
                <button>Sign In</button>
            </form>
        )
    }
}

export default connect(null, { login })(Login);