import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions';
import { connect } from 'react-redux';

class Dashboard extends React.Component {
    componentDidMount() {
        if (localStorage.getItem('token')) this.props.fetchUser(this.props.token);
    }

    render() {
        return (
            <div>
                <h3>Overview</h3>
                <ul>
                    <Link to="/track"><li>Expense Tracker</li></Link>
                    <li>On Track?</li>
                    <ExpenseTracker />
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