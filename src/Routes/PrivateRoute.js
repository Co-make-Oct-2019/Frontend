import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} component={(props) => (
        // TODO: REPLACE LOGIC WHEN TOKEN SETUP IS COMPLETE
        (!!localStorage.getItem('token')) === false ? (
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