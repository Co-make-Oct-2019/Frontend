// * TYPES
export const LOGIN = 'LOGIN';
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
    return dispatch => {
        dispatch(login(inputData))
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