import React from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import Profile from './Profile';
import OnTrack from './OnTrack';
import LatestExpenses from './LatestExpenses';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUser(localStorage.getItem("token"))
    }

    render() {
        return (
            <div>
                <h3>Overview</h3>
                <ul>
                    <li><Link to="/dashboard/track" className="col s4">Expense Tracker</Link></li>
                    <LatestExpenses />
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