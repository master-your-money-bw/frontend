import React from "react";
import ExpenseList from "./ExpenseList";
import AddExpense from "./AddExpense";
import { connect } from "react-redux";
import { getUserExpenses } from "../actions";
import DashboardTab from "./DashboardTab";
import { Link } from "react-router-dom";

const margin = {
  marginLeft: "auto",
  marginRight: "auto"
};

class ExpenseTracker extends React.Component {
  componentDidMount() {
    this.props.getUserExpenses();
  }

  render() {
    return (
      <div>
        <DashboardTab />
        <div className="row valign-wrapper">
          <Link to="/dashboard" className="col s3">
            <button className="btn teal accent-3" style={margin}>
              Back to Overview
              <i className="material-icons left">arrow_back</i>
            </button>
          </Link>
          <AddExpense />
        </div>
        <ExpenseList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

export default connect(
  mapStateToProps,
  { getUserExpenses }
)(ExpenseTracker);
