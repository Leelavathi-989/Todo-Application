import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { TodoReducer } from './reducers/TodoReducer';

const reducer = combineReducers({
    // contains all the reducers
    Todo: TodoReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;