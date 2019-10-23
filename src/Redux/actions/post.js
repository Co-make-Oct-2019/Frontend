import axiosWithAuth from '../../components/Utils/axiosWithAuth';

// * TYPES
export const CREATE_POST = 'CREATE_POST';
export const GET_POST = 'GET_POST';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';

// * PAYLOAD
export const create_post = (data) => ({
    type: CREATE_POST,
    payload: data
})

export const get_post = (data) => ({
    type: GET_POST,
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

        // ! LOG DATA
        // console.log('START CREATE POST', inputData)

        if ( // ? IF A SINGLE FIELD IS RECIEVED, UPDATE
            !!inputData && Object.entries(inputData).length === 1
        ) dispatch(create_post(inputData))
    }
}

export const startGetPosts = (inputData) => {
    return dispatch => {
        // * RETRIEVE ALL POSTS
        axiosWithAuth().get('/posts/allposts')
            .then(res => {
                if (!!res === true) dispatch(get_post(res.data))
            })
            .catch(err => console.log(err.response))
    }
}

export const startUpdatePost = (inputData) => {
    return dispatch => {

        // ! LOG DATA
        // console.log('START UPDATE POST', inputData)

        axiosWithAuth().put(`/posts/post/${inputData.userpostid}`, inputData)
            .then(res => dispatch(update_post(res.data)))
            .catch(err => console.log(err.response))
    }
}

export const startDeletePost = (inputData) => {
    return dispatch => {

        // ! LOG DATA
        // console.log('START DELETE POST', inputData)

        // * RETRIEVE ALL POSTS
        const update = () => axiosWithAuth().get('/posts/allposts')

        // * DELETE SELETED POST
        axiosWithAuth().delete(`/posts/post/${inputData.userpostid}`)
            .then(res => {
                console.log(res)
                update()
                    .then(res => {
                        console.log(res)
                        if (!!res === true) dispatch(get_post(res.data))
                    })
                    .catch(err => console.log(err.response))
            })
            .catch(err => console.log(err.response))
    }
}