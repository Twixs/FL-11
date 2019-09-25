import './style.scss';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Spinner } from './components/spinner';
import USERS from './store/data';
import { allReducers } from './reducers';
import {fetchUsers} from './components/fetchUsers/fetchUsers';
import {searchComponent} from './components/search/search';
import { fetchUsersPending, fetchUsersSuccess, fetchUsersError } from './actions/action'
import { fetchData } from './store/mockAPI';

const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const search = searchComponent();
const displayData = fetchUsers();

function loadData() {
    return (dispatch) => {
        fetchData()
            .then(data => {
                dispatch(fetchUsersSuccess(data))
            })
    }
}

loadData();

// ** import {createStore} from 'redux';
// ** import myTestReducer from './reducers/my_test_reducer.js';
// ** import MyTestComponent from './components/my_test_component';

// ** const store = createStore(myTestReducer);

// ** const testComponent = new MyTestComponent(store);

// ** testComponent.init()
