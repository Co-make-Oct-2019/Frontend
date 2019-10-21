// * TYPES
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

// * PAYLOAD
export const create_comment = (data) => ({
    type: CREATE_COMMENT,
    payload: data
})

export const update_comment = (data) => ({
    type: UPDATE_COMMENT,
    payload: data
})

export const delete_comment = (data) => ({
    type: DELETE_COMMENT,
    payload: data
})

// * LOGIC BELOW
export const startCreateComment = (inputData) => {
    return dispatch => {
        dispatch(create_comment(inputData))
    }
}

export const startUpdateComment = (inputData) => {
    return dispatch => {
        dispatch(update_comment(inputData))
    }
}

export const startDeleteComment = (inputData) => {
    return dispatch => {
        dispatch(delete_comment(inputData))
    }
}