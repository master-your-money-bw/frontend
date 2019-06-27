import React from 'react';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';
import Profile from './Profile';
import OnTrack from './OnTrack';
import LatestExpenses from './LatestExpenses';
import DashboardTab from './DashboardTab';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.fetchUser(localStorage.getItem("token"))
    }

    render() {
        return (
            <div>
                <DashboardTab />
                <LatestExpenses />
                <div className="row">
                    <OnTrack />
                    <Profile />
                </div>
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