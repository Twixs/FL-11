import searchCounter from './search';
import { usersReducer, getUsers, getUsersError } from './fetch'
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    search: searchCounter,
    users: usersReducer
});