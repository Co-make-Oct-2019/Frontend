import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import axiosWithAuth from '../components/Utils/axiosWithAuth';

// * IMPORTS (COMPONENTS / IMPORTS)

// ? ROUTES
import PrivateRoute from './PrivateRoute';

// ? COMPONENTS
import DashBoard from '../components/DashBoard/DashBoard';
import Issues from '../components/Issues/Issues';
import IssuesForm from '../components/Issues/IssuesForm';
import Login from '../components/User/Login';
import Profile from '../components/Profile/Profile';

// * HISTORY OBJ
const history = createBrowserHistory();

const AppRouter = () => {

    // * TOKEN
    const token = localStorage.getItem('token')

    // * CHECK CURRENT TOKEN IF EXPIRED.g
    !!token && axiosWithAuth().get('/users/getuserinfo')
        .then(res => console.log(`APP ROUTER AXIOS CALL`, res))
        .catch(err => {
            const status = err.response.status

            // ? IF A STORAGE SAVED DATA OF 'token' EXIST, DELETE IT & REDIRECT
            if (status === 401) {
                !!token &&
                    localStorage.removeItem('token')

                alert(`CALL STATUS ${status}, WE'RE REDIRECTING TO LOGIN TO RECEIVE NEW TOKEN. IF ISSUES STILL PERSIST, CONTACT Bao / Krishan.`)

                // * THEN PUSH TO LOGIN AND RECEIVE NEW TOKEN
                return history.replace('/')
            }
        })

    return (
        <Router history={history}>
            <>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/signup" component={Login} />
                    <PrivateRoute path="/new-issue" component={IssuesForm} />
                    <PrivateRoute path="/edit-issue" component={IssuesForm} />
                    <Route path="/issue/:id" component={Issues} />
                    <Route path="/dashboard" component={DashBoard} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/issues" component={Issues} />
                </Switch>
            </>
        </Router>
    )
}

export default AppRouter