import React from "react";
import { connect } from "react-redux";
import { updateExpense, getUserExpenses, deleteExpense } from "../actions";

class Expense extends React.Component {
  state = {
    newExpense: {
      id: this.props.expense.expenseid,
      expensename: this.props.expense.expensename,
      category: this.props.expense.category,
      amount: this.props.expense.amount
    },
    updating: false
  };

  toggleUpdate = () => {
    this.setState(prevState => ({ updating: !prevState.updating }));
  };

  onInputChange = e => {
    this.setState({
      newExpense: {
        ...this.state.newExpense,
        [e.target.name]: e.target.value
      }
    });
  };

  onUpdateExpense = () => {
    this.props
      .updateExpense(this.state.newExpense)
      .then(res => this.props.getUserExpenses())
      .then(res =>
        this.setState(prevState => ({ updating: !prevState.updating }))
      );
  };

  onDeleteExpense = () => {
    this.props
      .deleteExpense(this.props.expense)
      .then(res => this.props.getUserExpenses());
  };

  render() {
    return (
      <li className="collection-item row">
        {this.state.updating ? (
          <div className="valign-wrapper">
            <div className="input-field col s3">
              <label className="active" htmlFor="expensename">
                Expense Name
              </label>
              <input
                required
                type="text"
                onChange={this.onInputChange}
                name="expensename"
                value={this.state.newExpense.expensename}
                id="expensename"
              />
            </div>
            <div className="input-field col s3">
              <label className="active" htmlFor="category">
                Category
              </label>
              <input
                required
                type="text"
                onChange={this.onInputChange}
                name="category"
                value={this.state.newExpense.category}
                id="category"
              />
            </div>
            <div className="input-field col s3">
              <label className="active" htmlFor="amount">
                Amount
              </label>
              <input
                required
                type="number"
                onChange={this.onInputChange}
                name="amount"
                value={this.state.newExpense.amount}
                id="amount"
              />
            </div>
            <div className="col s3">
                <div className="col">
                    <button onClick={this.onUpdateExpense} className="waves-effect waves-light btn-small">update</button>
                </div>
                <div className="col">
                    <button onClick={this.toggleUpdate} className="waves-effect waves-light btn-small">cancel</button>
                </div>
            </div>
          </div>
        ) : (
          <div className="valign-wrapper">
            <div className="col s3">Name: {this.props.expense.expensename}</div>
            <div className="col s3">Amount: {this.props.expense.amount}</div>
            <div className="col s3">Category: {this.props.expense.category}</div>
            {!this.props.hideButton && (
              <div className="col s3">
                <div className="col">
                  <button onClick={this.toggleUpdate} className="waves-effect waves-light btn-small">update</button>
                </div>
                <div className="col">
                  <button onClick={this.onDeleteExpense} className="waves-effect waves-light btn-small">delete</button>
                </div>
              </div>
            )}
          </div>
        )}
      </li>
    );
  }
}

export default connect(
  null,
  { updateExpense, getUserExpenses, deleteExpense }
)(Expense);
