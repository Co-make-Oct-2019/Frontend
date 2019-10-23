import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

// * IMPORTS (COMPONENTS / IMPORTS)

// ? ROUTES
import PrivateRoute from './PrivateRoute';

// ? COMPONENTS
import DashBoard from '../components/DashBoard/DashBoard';
import Issues from '../components/Issues/Issues';
import IssuseForm from '../components/Issues/IssuesForm';
import Login from '../components/User/Login';
import Profile from '../components/Profile/Profile';
import ProfileForm from '../components/Profile/ProfileForm';

// * HISTORY OBJ
const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/signup" component={Login}/>
                <PrivateRoute path="/new-issue" component={IssuseForm}/>
                <Route path="/dashboard" component={DashBoard}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/profile-form" component={ProfileForm}/>
                <Route path="/issues" component={Issues}/>
            </Switch>
        </>
    </Router>
)

export default AppRouter