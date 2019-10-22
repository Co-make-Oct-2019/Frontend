const postDefaultState = {
    title: undefined,
    location: undefined,
    description: undefined,
    imageurl: undefined
}

export default (state = postDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}