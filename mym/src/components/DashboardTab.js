import React from 'react';
import { Link } from 'react-router-dom';

const DashboardTab = () => {
    return (
        <div className="row">
            <ul className="tabs">
                <li className="tab col s3 offset-s3"><Link to="/dashboard">Overview</Link></li>
                <li className="tab col s3 "><Link to="/dashboard/track">Expense Tracker</Link></li>
            </ul>
        </div>
    )
}

export default DashboardTab;