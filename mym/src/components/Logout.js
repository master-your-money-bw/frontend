import React from 'react';
import { Link } from 'react-router-dom';

// when you log out, you are redirected to login page...
// solution can be to do what banks do when you logout - show a different screen and logout there

const Logout = (props) => {
    const logout = () => {
        localStorage.removeItem("token");
    }

    return (
        <Link to="/">
            <button onClick={logout}>Logout</button>
        </Link>
    )
}

export default Logout;