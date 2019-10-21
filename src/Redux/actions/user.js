import axios from 'axios';
import axiosWithAuth from '../../components/Utils/axiosWithAuth';

// * TYPES
export const LOGIN = 'LOGIN';
export const CREATE_USER = 'CREATE_USER';
export const AUTHENTICATE = 'AUTHENTICATE';
export const UPLOAD_IMG = 'UPLOAD_IMG';

// * RETURNED PAYLOAD
export const login = (data) => ({
    type: LOGIN,
    payload: data
})

export const authenticate = (data) => ({
    type: AUTHENTICATE,
    payload: data
})

export const upload_img = (data) => ({
    type: UPLOAD_IMG,
    payload: data
})


// * LOGIC BELOW
export const startLogin = (inputData) => {

    // ! LOG DATA
    console.log('START LOGIN', inputData);

    const credentials = `grant_type=password&username=${inputData.username}&password=${inputData.password}`

    return dispatch => {
        axiosWithAuth().post('/login', credentials)
            .then(res => {
                if (!!res === true) {
                    // dispatch(login(res.data))
                    console.log(res.data)
                    res.data && localStorage.setItem('token', res.data.access_token)
                }
            })
            .catch(err => console.log(err))
    }
}

export const startCreateUser = (inputData) => {
    return dispatch => {
        // ! LOG DATA
        console.log('START CREATE USER', inputData)

        axios.post('https://bw-co-make.herokuapp.com/newuser/createnewuser', {
            username: inputData.username,
            password: inputData.password,
            location: inputData.location
        })
            .then(res => {
                if (res.status === 201) dispatch(authenticate({ accountCreated: true }))
            })
            .catch(err => console.log(err))
    }

}

export const startAuthentication = (inputData) => {
    return dispatch => {
        dispatch(authenticate(inputData))
    }
}

export const startUploadImg = (inputData) => {
    return dispatch => {
        dispatch(upload_img(inputData))
    }
}