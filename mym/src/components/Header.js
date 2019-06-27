import React, { useState, useEffect } from 'react'
import { Link, Route } from 'react-router-dom';
import Login from './Login'
import Register from './Register';

const Header = props => {
    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(true)
    const [logout, setLogout] = useState(false)

    const path = props.history.location.pathname;
    const loggedIn = localStorage.getItem("token");

    useEffect(() => {
        switch (path) {
        case "/login":
            setLogin(false)
            break;
        case "/register":
            setRegister(false)
            break;
        case "/dashboard":
            setLogin(false)
            setRegister(false)
            setLogout(true)
            break;
        default:
            return
    }}, [path])

    const onToggleLogin = () => {
        setLogin(false)
        setRegister(true)
    }

    const onToggleRegister = () => {
        setRegister(false)
        setLogin(true)
    }

    const onToggleReset = () => {
        setRegister(true)
        setLogin(true)
    }

    const onLogo = () => {
        !loggedIn && onToggleReset()

    }

    const onLogout = () => {
        localStorage.removeItem("token");
        onToggleReset()
        setLogout(false)
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo center" onClick={onLogo}>Master Your Money</Link>
                    <ul id="nav-mobile" className="right">
                        {login && <li><Link to="/login" onClick={onToggleLogin}>Login</Link></li>}
                        {register && <li><Link to="/register" onClick={onToggleRegister}>Register</Link></li>}
                        {logout && 
                            <div>
                                <li><Link to="/dashboard">Overview</Link></li>
                                <li onClick={onLogout}><Link to="/">Logout</Link></li>
                            </div>
                        }
                    </ul>
                </div>
            </nav>
            <Route path="/login" component={Login}/>
            <Route path="/register" component ={Register}/>
        </div>
    );
}

export default Header;