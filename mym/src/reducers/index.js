// import actions
import {
    LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL,
    FETCH_USER_DATA_START, FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAIL
} from '../actions';

const initializeState = {
    token: ''
}

export default function(state = initializeState, action ) {
    switch (action.type) {
        case LOGIN_START:
            return {};
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload
            };
        case LOGIN_FAIL:
            return {};
        case FETCH_USER_DATA_START:
            return {};
        case FETCH_USER_DATA_SUCCESS:
            return {};
        case FETCH_USER_DATA_FAIL:
            return {};
        default: 
            return state;
    }
}