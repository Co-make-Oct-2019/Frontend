import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// * ACTIONS
import { startCreateUser } from '../../Redux/actions/user';
import { startLogin } from '../../Redux/actions/user';

// * STYLED COMPONENT IMPORT
import style from './StyledComponents';

const Login = (props) => {

    // * STATE
    const [credentials, setCredentials] = useState({});

    const location = props.history.location.pathname;
    const history = props.history;

    useEffect(() => {
        const token = localStorage.getItem('token');

        // * IF LOGGED IN (TOKEN EXIST), REDIRECT
        if (!!token === true) history.replace('/issues')

        // * IF ACCOUNT WAS JUST CREATED, REDIRECT
        if (props.user.accountCreated === true) history.replace('/')

        // ! LOG DATA
        // console.log('LOGIN COMPONENT', props);

    }, [props.user])

    // * LOGIC FOR DATA HANDLING BELOW

    // ? INPUT HANDLER
    const handleChange = (e) => {
        e.preventDefault()

        // * SET STATE
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    // ? SUBMIT HANDLER
    const handleSubmit = (type, e) => {
        e.preventDefault()

        // ? BASED ON TYPE OF SUBMISSION, EXECUTE CERTAIN ACTION.
        if (type === 'create') props.startCreateUser(credentials)
        if (type === 'login') props.startLogin(credentials)
    }

    // ! LOG DATA!
    // console.log(credentials, location)

    // ? BASED ON LOCATION, RENDER SPECIFIC FORM
    return location === '/signup' ?
        (

            <style.form onSubmit={(e) => handleSubmit('create', e)}>
                <h2>Sign-Up</h2>
                <input onChange={(e) => handleChange(e)} name="username" placeholder="username here" type="text" />
                <input onChange={(e) => handleChange(e)} name="password" placeholder="password here" type="password" />
                <input onChange={(e) => handleChange(e)} name="location" placeholder="user location" type="text" />

                <button>Submit</button>
            </style.form>

        )
        :
        (
            <style.form onSubmit={(e) => handleSubmit('login', e)}>
                <h2>Login</h2>
                <input onChange={(e) => handleChange(e)} name="username" placeholder="username here" type="text" />
                <input onChange={(e) => handleChange(e)} name="password" placeholder="password here" type="password" />

                <button>Submit</button>
                <Link to="/signup">
                    <button>Sign Up</button>
                </Link>
            </style.form>

        )
}

// * REDUX SETUP
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    startCreateUser: (credentials) => dispatch(startCreateUser(credentials)),
    startLogin: (credentials) => dispatch(startLogin(credentials))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)