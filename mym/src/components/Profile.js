import React from 'react';
import { connect } from 'react-redux';
import { updateProfile } from '../actions';

class Profile extends React.Component {
    state = {
        isUpdating: false,
        updatedUser: {}
    }

    onToggleUpdate = () => {
        this.setState(prevState => ({ 
            isUpdating: !prevState.isUpdating,
            updatedUser: {
                ...this.props.user
            }
        }))
    }

    onInputChange = e => {
        this.setState({
            updatedUser: {
                ...this.state.updatedUser,
                [e.target.name]: e.target.value
            }
        })
    }

    onSubmitForm = e => {
        e.preventDefault();
        this.props.updateProfile(this.state.updatedUser)
        this.setState(prevState => ({ isUpdating: !prevState.isUpdating }))
    }

    render() {
        return (
            <div className="card container col s4">
                <div className="card-content">
                    <span className="card-title">Your Account</span>
                    {this.state.isUpdating ? 
                        (<form onSubmit={this.onSubmitForm} className="row">
                            <h6 className="card-content">Username: {this.props.user.username}</h6>
                            <div className="input-field col s4">
                                <label className="active" htmlFor="age">Age</label>
                                <input required type="number" onChange={this.onInputChange} name="age" value={this.state.updatedUser.age} id="age"/>
                            </div>
                            <div className="input-field col s4">
                                <label htmlFor="education" className="active">Education <span style={{ color: "red" }}>*</span></label>
                                <select className="form-control dropdown" id="education" name="education" style={{ display: "block" }} onChange={this.onInputChange}>
                                    <option defaultValue="" disabled="disabled">-- select one --</option>
                                    <option value="No formal education">No formal education</option>
                                    <option value="Primary education">Primary education</option>
                                    <option value="Secondary education">Secondary education or high school</option>
                                    <option value="GED">GED</option>
                                    <option value="Vocational qualification">Vocational qualification</option>
                                    <option value="Bachelor's degree">Bachelor's degree</option>
                                    <option value="Master's degree">Master's degree</option>
                                    <option value="Doctorate or higher">Doctorate or higher</option>
                                </select>
                            </div>
                            <div className="input-field col s4">
                                <label className="active" htmlFor="location">Location</label>
                                <input required type="text" onChange={this.onInputChange} name="location" value={this.state.updatedUser.location} id="location"/>
                            </div>
                            <div className="input-field col s4">
                                <label className="active" htmlFor="income">Income</label>
                                <input required type="number" onChange={this.onInputChange} name="income" value={this.state.updatedUser.income} id="income"/>
                            </div>
                            <div className="input-field col s4">
                                <label className="active" htmlFor="transportation">Transportation</label>
                                <input required type="number" onChange={this.onInputChange} name="transportation" value={this.state.updatedUser.transportation} id="transportation"/>
                            </div>
                            <div className="input-field col s4">
                                <label className="active" htmlFor="food">Food</label>
                                <input required type="number" onChange={this.onInputChange} name="food" value={this.state.updatedUser.food} id="food"/>
                            </div>
                            <div className="input-field col s4">
                                <label className="active" htmlFor="clothing">Clothing</label>
                                <input required type="number" onChange={this.onInputChange} name="clothing" value={this.state.updatedUser.clothing} id="clothing"/>
                            </div>
                            <div className="input-field col s4">
                                <label className="active" htmlFor="bills">Bills</label>
                                <input required type="number" onChange={this.onInputChange} name="bills" value={this.state.updatedUser.bills} id="bills"/>
                            </div>
                            <div className="input-field col s4">
                                <label className="active" htmlFor="housing">Housing</label>
                                <input required type="number" onChange={this.onInputChange} name="housing" value={this.state.updatedUser.housing} id="housing"/>
                            </div>
                            <div className="right-align">
                                <div className="col s4 offset-s4">
                                    <button className="waves-effect waves-light btn-small">update</button>
                                </div>
                                <div className="col s4">
                                    <button onClick={this.onToggleUpdate} className="waves-effect waves-light btn-small">cancel</button>
                                </div>
                            </div>
                        </form>) : 
                        (<div className="row">
                            <div>
                                <div className="col s6">
                                    <h6>Profile</h6>
                                    <div className="divider"></div>
                                    <p>Username: {this.props.user.username}</p>
                                    <p>Age: {this.props.user.age}</p>
                                    <p>Education: {this.props.user.education}</p>
                                    <p>Location: {this.props.user.location}</p>
                                </div>
                                <div className="col s6">
                                    <h6>Money Spent</h6>
                                    <div className="divider"></div>
                                    <p>Income: ${this.props.user.income}</p>
                                    <p>Transportation: ${this.props.user.transportation}</p>
                                    <p>Food: ${this.props.user.food}</p>
                                    <p>Clothing: ${this.props.user.clothing}</p>
                                    <p>Bills: ${this.props.user.bills}</p>
                                    <p>Housing: ${this.props.user.housing}</p>
                                </div>
                            </div>
                            <button onClick={this.onToggleUpdate} className="waves-effect waves-light btn-small">update</button>
                        </div>)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { updateProfile })(Profile);