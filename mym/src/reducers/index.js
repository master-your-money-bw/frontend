// import actions
import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
    FETCH_USER_DATA_START, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAIL,
    UPDATE_PROFILE_START, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAIL
} from '../actions';

const initializeState = {
    user: '',
    logginIn: false,
    loggedIn: false,
    fetchingProfile: false,
    updatingProfile: false
}

export default function(state = initializeState, action ) {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                error: '',
                loggedIn: true
            };
        case LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                error: action.payload
            };
        case FETCH_USER_DATA_START:
            return {
                ...state,
                fetchingProfile: true,
                error: ''
            };
        case FETCH_USER_DATA_SUCCESS:
            return {
                ...state,
                fetchingProfile: false,
                error: '',
                user: action.payload
            };
        case FETCH_USER_DATA_FAIL:
            return {
                ...state,
                fetchingProfile: false,
                error: action.payload
            };
        case UPDATE_PROFILE_START:
            return {
                ...state,
                updatingProfile: true,
                error: ''
            }
        case UPDATE_PROFILE_SUCCESS:
            return {
                ...state,
                updatingProfile: false,
                error: '',
                user: action.payload
            }
        case UPDATE_PROFILE_FAIL:
            return {
                ...state,
                updatingProfile: false,
                error: action.payload
            }
        default: 
            return state;
    }
}