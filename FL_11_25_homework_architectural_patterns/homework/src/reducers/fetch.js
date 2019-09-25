import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/action';

const initialState = {
    users: [],
    error: null,
}

export function usersReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: action.payload
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getUsers = state => state.users;
export const getUsersError = state => state.error;