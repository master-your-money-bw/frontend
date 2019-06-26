import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import Logout from './Logout';
import Profile from './Profile';
import OnTrack from './OnTrack';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUser(localStorage.getItem("token"))
    }

    render() {
        return (
            <div>
                <Logout />
                <h3>Overview</h3>
                <ul>
                    <Link to="/dashboard/track"><li>Expense Tracker</li></Link>
                    <OnTrack />
                </ul>
                <Profile />
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