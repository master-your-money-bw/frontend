import React from 'react';
import { connect } from 'react-redux';
import { login, fetchUser } from '../actions';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        loggingIn: false
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
        this.setState({ loggingIn: this.props.loggingIn })
        this.props.login(this.state.credentials)
            .then(res => this.props.fetchUser(localStorage.getItem("token")))
            .then(res => this.props.history.push("/dashboard"))
    }

    render() {
        return (
            <div className="row">
                <div className="col s6 offset-s3">
                    <div className="card white">
                        <div className="card-content">
                            {this.state.loggingIn ? (
                                <div class="preloader-wrapper big active">
                                    <div class="spinner-layer spinner-blue">
                                        <div class="circle-clipper left">
                                            <div class="circle"></div>
                                        </div>
                                        <div class="gap-patch">
                                            <div class="circle"></div>
                                        </div>
                                        <div class="circle-clipper right">
                                            <div class="circle"></div>
                                        </div>
                                    </div>
                                </div>
                            ) : (<div>
                                <span className="card-title">Sign In</span>
                                <br />
                                <form onSubmit={this.onSubmitLogin}>
                                    <div className="input-field">
                                        <input name="username" value={this.state.credentials.username} onChange={this.onInputChange} type="text" required autoComplete="username" id="username" className="validate"/>
                                        <label htmlFor="username" className="active">Username</label>
                                    </div>
                                    <div className="input-field">
                                        <input name="password" value={this.state.credentials.password} onChange={this.onInputChange} type="password" required autoComplete="current-password"/>
                                        <label htmlFor="password" className="active">Password</label>
                                    </div>
                                    <button className="btn waves-effect waves-light">Sign In
                                        <i className="material-icons right">send</i>
                                    </button>
                                </form>
                                <br />
                                <Link to="/register">New to Master Your Money? Create an account.</Link>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loggingIn: state.loggingIn
    }
}

export default connect(mapStateToProps, { login, fetchUser })(Login);