import React from "react";
import { connect } from "react-redux";
import { getUserExpenses } from "../actions";
import Expense from "./Expense";

const bold = {
  fontWeight: "bold"
}
class LatestExpenses extends React.Component {
  componentDidMount() {
    this.props.getUserExpenses();
  }

  render() {
    return (
      <ul className="collection container">
            <li className="collection-item">Last 5 Expenses</li>
            <li className="collection-item row">
                <div className="col s3" style={bold}>Expense</div>
                <div className="col s3" style={bold}>Amount</div>
                <div className="col s3" style={bold}>Category</div>
            </li>

          {this.props.expenses
            .reverse()
            .slice(0, 5)
            .map(expense => (
              <Expense expense={expense} key={expense.expenseid} hideButton />
            ))}
      </ul>
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
)(LatestExpenses);
