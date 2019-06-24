import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        credentials: {
            email: '',
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
        // push to backend to validate if user is in system
        // this.props.history.push("/dashboard")
    }

    render() {
        console.log(this.props)
        return (
            <form onSubmit={this.onSubmitLogin}>
                <h2>Sign In</h2>
                <div>
                    <p>Email</p>
                    <input name="email" value={this.state.credentials.email} onChange={this.onInputChange} type="email" required autoComplete="username"/>
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

export default connect(null, {})(Login);