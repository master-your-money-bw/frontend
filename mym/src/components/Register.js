import React from 'react';

class Register extends React.Component {
    state = {
        credentials: {
            name: '',
            email: '',
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
        // push to backend to validate if user is in system
        this.props.history.push("/onboarding")
    }

    render() {
        return (
            <form>
            <h2>Register</h2>
                <div>
                    Name: <input name="" value={this.state.credentials.name} on/>
                </div>
                <div>
                    Email: <input name="" value={this.state.credentials.email} on/>
                </div>
                <div>
                    Password: <input name="" value={this.state.credentials.password} on/>
                </div>
                <div>
                    Retype Password: <input name="" value={this.state.credentials.verifyPassword} on/>
                </div>
                <button>Register</button>
            </form>
        )
    }
}

export default Register;