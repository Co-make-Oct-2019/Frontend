// * TYPES
import { CREATE_POST, GET_POST, UPDATE_POST, UPDATE_POST_VOTE } from '../actions/post';

const postDefaultState = {
    title: undefined,
    location: undefined,
    description: undefined,
    imageurl: undefined
}

export default (state = postDefaultState, action) => {
    switch (action.type) {
        case CREATE_POST:
            console.log(CREATE_POST, action)
            return {
                ...state,
                ...action.payload
            }
        case GET_POST:
            console.log(GET_POST, action)
            return {
                post_template: state,
                response_data: [...action.payload]
            }
        case UPDATE_POST:
            console.log(UPDATE_POST, action)
            return {
                post_template: state,
                updated: action.payload
            }
        case UPDATE_POST_VOTE:
            console.log(UPDATE_POST_VOTE, action)
            return {
                post_template: state,
                response_data: [
                    ...state.response_data.filter(
                        issue => issue.userpostid !== action.payload.userpostid
                    ),
                    action.payload
                ]
            }
        default:
            return state;
    }
}