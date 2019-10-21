import { AUTHENTICATE, LOGIN } from '../actions/user';

const userDefaultState = {
    username: undefined,
    password: undefined,
    location: undefined,
    imageurl: undefined
}

export default (state = userDefaultState, action) => {
    switch(action.type) {
        case AUTHENTICATE:
            console.log(AUTHENTICATE, action)
            return {
                ...state,
                ...action.payload
            }
        case LOGIN:
            console.log(LOGIN, action)
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}