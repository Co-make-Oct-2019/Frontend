import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// * IMPORTS (COMPONENTS / IMPORTS)

// ? ROUTES
// TODO: CREATE PRIVATE ROUTES
import PrivateRoute from './PrivateRoute';

// ? COMPONENTS
import DashBoard from '../components/DashBoard/DashBoard';
import Issues from '../components/Issues/Issues';
import Login from '../components/User/Login';
import Profile from '../components/Profile/Profile';

// * HISTORY OBJ
const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Login}/>
                <Route path="/dashboard" component={DashBoard}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/issues" component={Issues}/>
            </Switch>
        </>
    </Router>
)

export default AppRouter