import React from 'react';
import { connect } from 'react-redux';
import { login, fetchUser } from '../actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        if (localStorage.getItem("token")) {
            this.props.history.push("/dashboard")
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
            .then(res => this.props.fetchUser(localStorage.getItem("token")))
            .then(res => this.props.age ? this.props.history.push("/onboarding") : this.props.history.push("/dashboard"))
    }

    render() {
        return (
            <div>
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
                <Link to="/register">New to Master Your Money? Create an account.</Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: {
            age: state.user.age
        }
    }
}

export default connect(mapStateToProps, { login, fetchUser })(Login);