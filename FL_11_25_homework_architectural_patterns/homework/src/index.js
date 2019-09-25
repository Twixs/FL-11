import './style.scss';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Spinner } from './components/spinner';
import USERS from './store/data';
import { allReducers } from './reducers';
import { fetchUsers } from './components/fetchUsers/fetchUsers';
import { searchComponent } from './components/search/search';
import { fetchUsersPending, fetchUsersSuccess, fetchUsersError } from './actions/action'

import configureStore from './store'
const strore = configureStore();

const search = searchComponent();
const displayData = fetchUsers();

