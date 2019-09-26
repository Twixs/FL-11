import './style.scss';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import USERS from './store/data';
import { fetchUsers } from './components/fetchUsers/fetchUsers';
import { searchComponent } from './components/search/search';
import { fetchUsersPending, fetchUsersSuccess, fetchUsersError } from './actions/action'

import configureStore from './store'
export const store = configureStore();

const search = searchComponent();

store.dispatch(fetchUsersSuccess(USERS));
const state = store.getState().users;
fetchUsers(state.users)