import {
    GET_USERS_REQUESTED,
    GET_USERS_SUCCESS,
    USERS_FAILED,
} from '../actions/actionTypes';

const initialState = {
    data: [],
    loading: true,
    error: null,
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUESTED:
            return { ...state };
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, ...action.payload],
            };
        case USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message
            };

        default:
            return state;
    }
}