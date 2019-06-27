import React from 'react';
import { Link } from 'react-router-dom';

const DashboardTab = props => {
    return (
        <div className="row">
            <ul className="tabs">
                <li className="tab col s6"><Link to="/dashboard">Overview</Link></li>
                <li className="tab col s6"><Link to="/dashboard/track">Expense Tracker</Link></li>
            </ul>
        </div>
    )
}

export default DashboardTab;