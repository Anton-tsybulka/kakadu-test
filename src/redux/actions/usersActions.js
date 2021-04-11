import {
    GET_USERS_REQUESTED,
} from './actionTypes';

export const getUsers = (data) => {
    return {
        type: GET_USERS_REQUESTED,
        payload: data,
    };
};