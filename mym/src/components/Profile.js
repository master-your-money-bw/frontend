import React from 'react';
import { connect } from 'react-redux';

const Profile = (props) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">Your Account</span>
                <p>Username: {props.user.username}</p>
                <p>Age: {props.user.age}</p>
                <p>Education: {props.user.education}</p>
                <p>Location: {props.user.location}</p>
                <p>Income: ${props.user.income}</p>
                <p>Transportation Costs: ${props.user.transportation}</p>
                <p>Food Costs: ${props.user.food}</p>
                <p>Clothing Costs: ${props.user.clothing}</p>
                <p>Bills: ${props.user.bills}</p>
                <p>Housing: ${props.user.housing}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {})(Profile);