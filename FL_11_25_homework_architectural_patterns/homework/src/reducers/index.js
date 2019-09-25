import searchCounter from './search';
import { usersReducer, getUsers, getUsersPending, getUsersError } from './fetch'
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    search: searchCounter,
    users: usersReducer
});