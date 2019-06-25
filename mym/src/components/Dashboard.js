import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import Logout from './Logout';

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Logout />
                <h3>Overview</h3>
                <ul>
                    <Link to="/dashbaord/track"><li>Expense Tracker</li></Link>
                    <li>On Track?</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps, { fetchUser })(Dashboard);