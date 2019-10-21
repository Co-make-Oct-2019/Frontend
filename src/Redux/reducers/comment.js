const commentDefaultState = {
    title: undefined,
    imageurl: undefined,
    line1: undefined
}

export default (state = commentDefaultState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}