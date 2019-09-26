import { FETCH_USERS_SUCCESS, FETCH_USERS_ERROR } from '../actions/action';

export function usersReducer(state = [], action) {
    switch(action.type) {
        case FETCH_USERS_SUCCESS:
            return {
                users: action.payload
            }
        case FETCH_USERS_ERROR:
            return {
                error: action.error
            }
        default: 
            return state;
    }
}

export const getUsers = state => state.users;
export const getUsersError = state => state.error;