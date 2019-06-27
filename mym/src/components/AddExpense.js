import React from "react";
import { connect } from "react-redux";
import { addExpense, getUserExpenses } from "../actions";

const margin = {
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "20px",
  marginBottom: "20px"
}

class AddExpense extends React.Component {
  state = {
    expense: {
      date: "",
      expensename: "",
      amount: "",
      category: ""
    }
  };

  onInputChange = e => {
    this.setState({
      expense: {
        ...this.state.expense,
        [e.target.name]: e.target.value
      }
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    // add to backend data
    // exit out of modal
    this.props.addExpense(this.state.expense)
        .then(res => this.props.getUserExpenses())
        .then(res => this.setState({ expense: {
            date: '',
            expensename: '',
            amount: '',
            category: ''
        }}))
  };

  render() {
    return (
      <div className="container card center-align" style={margin}>
        <div className="card-content">
          <form onSubmit={e => this.onSubmitForm(e)}>
            <h3>Add Expense</h3>
            <div>
              {/* <div className="input-field">
                <label className="active" htmlFor="date">
                  Date
                </label>
                <input
                  required
                  type="date"
                  onChange={this.onInputChange}
                  name="date"
                  value={this.state.expense.date}
                  id="date"
                />
              </div>*/}
              <div className="input-field">
                <label className="active" htmlFor="expensename">
                  Name
                </label>
                <input
                  required
                  type="text"
                  onChange={this.onInputChange}
                  name="expensename"
                  value={this.state.expense.expensename}
                  id="expensename"
                />
              </div>
              <div className="input-field">
                <label className="active" htmlFor="amount">
                  Amount
                </label>
                <input
                  required
                  type="number"
                  onChange={this.onInputChange}
                  name="amount"
                  value={this.state.expense.amount}
                  id="amount"
                />
              </div>
              <div className="input-field">
                <label className="active" htmlFor="category">
                  Category
                </label>
                <input
                  required
                  type="text"
                  onChange={this.onInputChange}
                  name="category"
                  value={this.state.expense.category}
                  id="category"
                />
              </div>
            </div>
            <button className="btn waves-effect waves-light">
              Add Expense
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addExpense, getUserExpenses }
)(AddExpense);
