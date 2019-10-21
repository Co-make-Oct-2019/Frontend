import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// * REDUCERS
import userReducer from '../reducers/user';
import postReducer from '../reducers/post';
import commentReducer from '../reducers/comment';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {

    const store = createStore(
        combineReducers({
            user: userReducer,
            post: postReducer,
            comment: commentReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
}