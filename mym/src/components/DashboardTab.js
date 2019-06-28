import React from "react";
import { Link } from "react-router-dom";

const DashboardTab = props => {
  return (
    <div className="row">
      <ul className="tabs">
        <li className="tab col s6">
          <Link to="/dashboard" className="blue-text text-darken-4">
            Overview
          </Link>
        </li>
        <li className="tab col s6">
          <Link to="/dashboard/track" className="blue-text text-darken-4">
            Expense Tracker
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashboardTab;
