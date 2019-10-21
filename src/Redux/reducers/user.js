const userDefaultState = {
    username: undefined,
    password: undefined,
    location: undefined,
    imageurl: undefined
}

export default (state = userDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}