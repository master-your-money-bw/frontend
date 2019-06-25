import React from 'react';
import { connect } from 'react-redux';
import { createUser, login } from '../actions';

class Register extends React.Component {
    state = {
        credentials: {
            username: '',
            password: '',
            verifyPassword: ''
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
        this.props.createUser(this.state.credentials)
            .then(res => 
                !this.props.error ? this.props.login(this.state.credentials) : null
            )
            .then(res => {
                !this.props.error && this.props.history.push("/onboarding")
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitLogin}>
                    <h2>Register</h2>
                    <div>
                        Username: <input name="username" value={this.state.credentials.name} onChange={this.onInputChange} type="text" autoComplete="username"/>
                    </div>
                    <div>
                        Password: <input name="password" value={this.state.credentials.password} onChange={this.onInputChange} type="password" autoComplete="new-password"/>
                    </div>
                    <div>
                        Retype Password: <input name="verifyPassword" value={this.state.credentials.verifyPassword} onChange={this.onInputChange} type="password" autoComplete="none"/>
                        {this.state.credentials.password !== this.state.credentials.verifyPassword ? <p>Passwords don't match</p> : ''}
                    </div>
                    <button>Register</button>
                </form>
                {this.props.error && <p>{this.props.error}</p>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.error
    }
}

export default connect(mapStateToProps, { createUser, login })(Register);