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
            .then(res => {
                if (!this.props.user.location) this.props.history.push("/onboarding")
            })
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
        user: state.user
    }
}

export default connect(mapStateToProps, { fetchUser })(Dashboard);