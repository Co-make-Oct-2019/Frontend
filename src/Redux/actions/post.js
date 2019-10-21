// * TYPES
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

// * PAYLOAD
export const create_post = (data) => ({
    type: CREATE_POST,
    payload: data
})

export const update_post = (data) => ({
    type: UPDATE_POST,
    payload: data
})

export const delete_post = (data) => ({
    type: DELETE_POST,
    payload: data
})

// * LOGIC BELOW
export const startCreatePost = (inputData) => {
    return dispatch => {
        dispatch(create_post(inputData))
    }
}

export const startUpdatePost = (inputData) => {
    return dispatch => {
        dispatch(update_post(inputData))
    }
}

export const startDeletePost = (inputData) => {
    return dispatch => {
        dispatch(delete_post(inputData))
    }
}