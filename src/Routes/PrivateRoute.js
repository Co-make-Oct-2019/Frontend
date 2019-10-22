import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        !!localStorage.getItem('token') === true ? (
            <>
                <Component {...props}/>
            </>
        ) : (
            // * REDIRECT TO LOGIN PAGE
            <Redirect to="/" />
        )
    )}>

    </Route>
)

export default PrivateRoute