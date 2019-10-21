const postDefaultState = {
    title: undefined,
    location: undefined,
    line1: undefined,
    imageurl: undefined
}

export default (state = postDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}