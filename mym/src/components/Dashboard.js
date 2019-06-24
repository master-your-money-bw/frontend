import React from 'react';
import ExpenseTracker from './ExpenseTracker';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h3>Overview</h3>
            <ul>
                <Link to="/track"><li>Expense Tracker</li></Link>
                <li>On Track?</li>
            </ul>
        </div>
    )
}

export default Dashboard;