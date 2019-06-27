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

  onUpdateExpense = e => {
      e.preventDefault()
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
          <form className="valign-wrapper" onSubmit={e => this.onUpdateExpense(e)}>
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
            <div className="input-field col s3">
              <label className="active" htmlFor="category">
                Category
              </label>
              <select className="form-control dropdown" id="category" name="category" style={{ display: "block" }} onChange={this.onInputChange}>
                  <option defaultValue="" disabled="disabled">-- select one --</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Food">Food</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Bills">Bills</option>
                  <option value="Housing">Housing</option>
                </select>
            </div>
            <div className="col s3">
                <div className="col">
                    <button onClick={e => this.onUpdateExpense(e)} className="waves-effect waves-light btn-small">update</button>
                </div>
                <div className="col">
                    <button onClick={this.toggleUpdate} className="waves-effect waves-light btn-small">cancel</button>
                </div>
            </div>
          </form>
        ) : (
          <div className="valign-wrapper">
            <div className="col s3">{this.props.expense.expensename}</div>
            <div className="col s3">{this.props.expense.amount}</div>
            <div className="col s3">{this.props.expense.category}</div>
            {!this.props.hideButton ? (
              <div className="col s3">
                <div className="col">
                  <button onClick={this.toggleUpdate} className="waves-effect waves-light btn-small">update</button>
                </div>
                <div className="col">
                  <button onClick={this.onDeleteExpense} className="waves-effect waves-light btn-small">delete</button>
                </div>
              </div>
            ) : (
              <div className="col s3"></div>
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
