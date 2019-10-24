import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import AppRouter from './Routes/AppRouter';
import { createBrowserHistory } from 'history'
import axiosWithAuth from '../src/components/Utils/axiosWithAuth';

import configureStore from './Redux/store/configureStore';
const store = configureStore();

// * HISTORY OBJ
const history = createBrowserHistory();

// * TOKEN
const token = localStorage.getItem('token')

// * CHECK CURRENT TOKEN IF EXPIRED.g
axiosWithAuth().get('/users/getuserinfo')
    .then(res => console.log(`APP ROUTER AXIOS CALL`, res))
    .catch(err => {
        const status = err.response.status

        console.log('SOMETHING', status, history)

        // ? IF A STORAGE SAVED DATA OF 'token' EXIST, DELETE IT & REDIRECT
        if (status === 401 || !!token === false) {
            localStorage.removeItem('token')

            // * THEN PUSH TO LOGIN AND RECEIVE NEW TOKEN
            return history.replace('/')
        }
    })

// console.log('INDEX SETTINGS', history);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
